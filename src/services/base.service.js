import db from '../dal/models';

class BaseService {
    constructor(entity) {
        this.entity = entity;
        this.db = db;
    }

    async getAll() {
        const entities = await this.db[this.entity].findAll();
        return entities;
    }

    async getBy(id) {
        const entities = await this.db[this.entity].findOne({ where: { id } });
        return entities;
    }

    async create(data) {
        const entities = await this.db[this.entity].create(data);
        return entities;
    }

    async update(id, data) {
        delete data.createAt;
        delete data.updateAt;
        const entities = await this.db[this.entity].update(data, { where: { id } });
        return entities;
    }
}

module.exports = BaseService;
