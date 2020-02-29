import BaseService from './base.service';

class SolicitudService extends BaseService {
    constructor() {
        super('Solicitud');
    }
}

module.exports = new SolicitudService();
