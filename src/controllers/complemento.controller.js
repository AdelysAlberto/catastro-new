import BaseController from './base.controller';

import { ComplementoService } from '../services';

class ComplementoController extends BaseController {
    constructor() {
        super(ComplementoService);
    }
}

module.exports = new ComplementoController();
