import { userService } from '../services';


class UserController {
    async getUser(req, res) {
        const user = await userService.getUser();
        res.send(user);
    }

    async createUser(req, res) {
        const { body } = req;
        const user = await userService.createUser(body);
        res.send(user);
    }
}

module.exports = new UserController();
