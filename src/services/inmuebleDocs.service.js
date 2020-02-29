import BaseService from './base.service';

class InmuebleDcosService extends BaseService {
    constructor() {
        super('InmuebleDocs');
    }
}

module.exports = new InmuebleDcosService();
