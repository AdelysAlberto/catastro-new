import BaseService from './base.service';

class TipoUsoService extends BaseService {
    constructor() {
        super('TipoUso');
    }
}

module.exports = new TipoUsoService();
