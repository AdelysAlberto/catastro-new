import BaseService from './base.service';

class OperacionService extends BaseService {
    constructor() {
        super('Operacion');
    }
}

module.exports = new OperacionService();
