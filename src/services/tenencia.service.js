import BaseService from './base.service';

class TenenciaService extends BaseService {
    constructor() {
        super('Tenencia');
    }
}

module.exports = new TenenciaService();
