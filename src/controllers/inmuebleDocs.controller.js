import BaseController from './base.controller';

import { InmuebleDocsService } from '../services';

class InmuebleDocsController extends BaseController {
    constructor() {
        super(InmuebleDocsService);
    }
}

module.exports = new InmuebleDocsController();
