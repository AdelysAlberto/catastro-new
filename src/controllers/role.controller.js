import BaseController from './base.controller';

import { RoleService } from '../services';

class RoleController extends BaseController {
    constructor() {
        super(RoleService);
    }
}

module.exports = new RoleController();
