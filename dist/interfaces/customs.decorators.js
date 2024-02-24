"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
exports.Auth = (0, common_1.createParamDecorator)((data, context) => {
    var _a, _b, _c;
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    return { userId: (_a = req.auth) === null || _a === void 0 ? void 0 : _a._id, store: (_c = (_b = req.auth) === null || _b === void 0 ? void 0 : _b.store) === null || _c === void 0 ? void 0 : _c._id };
});
//# sourceMappingURL=customs.decorators.js.map