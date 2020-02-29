import { UserService } from '../services';

class UserController {
    async getUser(req, res) {
        const { id } = req.params;
        let user;
        if (!id) {
            user = await UserService.getUser();
        } else {
            user = await UserService.getUserBy(id);
        }
        if (user) {
            res.send(user);
        } else {
            res.status(404).json({ msg: 'User not found' });
        }
    }

    async getUserBy(req, res) {
        const { params } = req;
        const user = await UserService.getUserBy(params);
        res.send(user);
    }

    async createUser(req, res) {
        const { body } = req;
        const user = await UserService.createUser(body);
        res.send(user);
    }
}

module.exports = new UserController();
