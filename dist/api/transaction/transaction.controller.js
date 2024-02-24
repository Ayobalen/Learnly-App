"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
const dtos_1 = require("./dtos");
const transaction_provider_1 = require("./transaction.provider");
const schema_validator_1 = require("./schema-validator");
let TransactionController = class TransactionController {
    constructor(transactionProvider) {
        this.transactionProvider = transactionProvider;
    }
    async deposit(userAuth, depositDto) {
        depositDto.user = userAuth.user;
        return this.transactionProvider.depositMoney(depositDto);
    }
    async withdraw(userAuth, wthdrawalDto) {
        wthdrawalDto.user = userAuth.user;
        return this.transactionProvider.withdrawMoney(wthdrawalDto);
    }
    async transfer(userAuth, transferDto) {
        transferDto.user = userAuth.user;
        return this.transactionProvider.transferMoney(transferDto);
    }
    async getUserTransaction(userAuth, req, user) {
        const response = await this.transactionProvider.getUserTransactions(user);
        return response;
    }
};
__decorate([
    (0, common_1.Post)('deposit'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validator_1.depositSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.DepositDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "deposit", null);
__decorate([
    (0, common_1.Post)('withdrawal'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validator_1.withdrawalSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.WithdrawalDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "withdraw", null);
__decorate([
    (0, common_1.Post)('transfer'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validator_1.transferSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.TransferDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "transfer", null);
__decorate([
    (0, common_1.Get)(':user_id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(2, (0, common_1.Param)('user_id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getUserTransaction", null);
TransactionController = __decorate([
    (0, common_1.Controller)('transaction'),
    __metadata("design:paramtypes", [transaction_provider_1.TransactionProvider])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map