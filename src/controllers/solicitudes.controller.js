import BaseController from './base.controller';

import { SolicitudServicio } from '../services';

class SolicitudController extends BaseController {
    constructor() {
        super(SolicitudServicio);
    }
}

module.exports = new SolicitudController();
