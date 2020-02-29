import BaseController from './base.controller';

import { StatusService } from '../services';

class StatusController extends BaseController {
    constructor() {
        super(StatusService);
    }
}

module.exports = new StatusController();
