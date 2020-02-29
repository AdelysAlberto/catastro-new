import BaseService from './base.service';

class ServicioService extends BaseService {
    constructor() {
        super('Servicio');
    }
}

module.exports = new ServicioService();
