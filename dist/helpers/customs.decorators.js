"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = void 0;
const common_1 = require("@nestjs/common");
exports.UserAuth = (0, common_1.createParamDecorator)((data, context) => {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    return req.user;
});
//# sourceMappingURL=customs.decorators.js.map