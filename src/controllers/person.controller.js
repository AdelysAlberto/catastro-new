import { PersonService } from '../services';

class PersonController {
    async getPerson(req, res) {
        const { id } = req.params;
        let user;
        if (!id) {
            user = await PersonService.getPerson();
        } else {
            user = await PersonService.getPersonBy('cedula', id);
        }
        if (user) {
            res.send(user);
        } else {
            res.status(404).json({ msg: 'User not found' });
        }
    }

    async getPersonBy(req, res) {
        const { params } = req;
        const user = await PersonService.getUserBy(params);
        res.send(user);
    }

    async createPerson(req, res) {
        const { body } = req;
        const user = await PersonService.createUser(body);
        res.send(user);
    }

    async updatePerson(req, res) {
        const { body } = req;
        const user = await PersonService.updatePerson(body);
        res.send(user);
    }

    async deletePerson(req, res) {
        const { body } = req;
        const user = await PersonService.createUser(body);
        res.send(user);
    }
}

module.exports = new PersonController();
