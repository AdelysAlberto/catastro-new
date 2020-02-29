import BaseController from './base.controller';

import { InmuebleUbicService } from '../services';

class InmuebleDocController extends BaseController {
    constructor() {
        super(InmuebleUbicService);
    }
}

module.exports = new InmuebleDocController();
