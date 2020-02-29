import BaseService from './base.service';

class RoleService extends BaseService {
    constructor() {
        super('Role');
    }
}

module.exports = new RoleService();
