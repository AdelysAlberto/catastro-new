import BaseService from './base.service';


class DocumentoService extends BaseService {
    constructor() {
        super('Documento');
    }
}

module.exports = new DocumentoService();
