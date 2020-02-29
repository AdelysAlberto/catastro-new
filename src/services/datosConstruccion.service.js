import BaseService from './base.service';

class DatosConstruccionService extends BaseService {
    constructor() {
        super('DatosContruccion');
    }
}

module.exports = new DatosConstruccionService();
