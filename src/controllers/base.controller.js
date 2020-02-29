class BaseController {
    constructor(services) {
        this.service = services;
    }

    async get(req, res) {
        const { id } = req.params;
        let payload;
        if (!id) {
            payload = await this.service.getAll();
        } else {
            payload = await this.service.getBy(id);
        }
        if (payload) {
            res.send(payload);
        } else {
            res.status(404).json({ msg: 'data not found' });
        }
    }

    async simpleGet() {
        const payload = await this.service.getAll();
        if (payload) {
            return payload;
        }
        return false;
    }

    async simpleGetBy(id) {
        const payload = await this.service.getBy({ where: { id } });
        if (payload) {
            return payload;
        }
        return false;
    }

    async create(req, res) {
        const { body } = req.params;
        const payload = await this.service.create(body);
        if (payload) {
            res.send(payload);
        } else {
            res.status(404).json({ msg: 'data not found' });
        }
    }

    async update(req, res) {
        const { body } = req.params;
        delete body.createAt;
        delete body.updateAt;
        const payload = await this.service.update(body, { where: { id: body.id } });
        if (payload) {
            res.send(payload);
        } else {
            res.status(404).json({ msg: 'data not found' });
        }
    }
}

module.exports = BaseController;
