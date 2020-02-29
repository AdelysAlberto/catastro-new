import BaseService from './base.service';

class DatosTerrenoService extends BaseService {
    constructor() {
        super('DatosTerreno');
    }
}

module.exports = new DatosTerrenoService();
