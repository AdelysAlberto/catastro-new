import BaseService from './base.service';

class ComplementoService extends BaseService {
    constructor() {
        super('Complemento');
    }
}

module.exports = new ComplementoService();
