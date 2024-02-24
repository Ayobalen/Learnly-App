"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const transaction_provider_1 = require("./transaction.provider");
const transaction_service_1 = require("./transaction.service");
const transaction_controller_1 = require("./transaction.controller");
const transaction_schema_1 = require("./schema/transaction.schema");
const user_service_1 = require("../user/user.service");
const schema_1 = require("../user/schema");
const helpers_1 = require("../../helpers");
let TransactionModule = class TransactionModule {
};
TransactionModule = __decorate([
    (0, common_1.Module)({
        providers: [transaction_provider_1.TransactionProvider, user_service_1.UserService, helpers_1.UtilService, transaction_service_1.TransactionService],
        exports: [transaction_service_1.TransactionService],
        controllers: [transaction_controller_1.TransactionController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: transaction_schema_1.Transaction.name,
                    schema: transaction_schema_1.TransactionSchema,
                },
                {
                    name: schema_1.User.name,
                    schema: schema_1.UserSchema
                }
            ]),
        ],
    })
], TransactionModule);
exports.TransactionModule = TransactionModule;
//# sourceMappingURL=transaction.module.js.map