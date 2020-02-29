import BaseController from './base.controller';

import { DocumentoService } from '../services';

class DocumentoController extends BaseController {
    constructor() {
        super(DocumentoService);
    }
}

module.exports = new DocumentoController();
