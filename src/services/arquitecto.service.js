import BaseService from './base.service';

class ArquitectoService extends BaseService {
    constructor() {
        super('Arquitecto');
    }
}

module.exports = new ArquitectoService();
