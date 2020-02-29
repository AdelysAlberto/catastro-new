import BaseService from './base.service';

class OcupanteService extends BaseService {
    constructor() {
        super('Ocupante');
    }
}

module.exports = new OcupanteService();
