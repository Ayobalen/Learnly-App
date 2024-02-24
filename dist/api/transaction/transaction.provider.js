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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionProvider = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const transaction_service_1 = require("./transaction.service");
let TransactionProvider = class TransactionProvider {
    constructor(transactionService, userService) {
        this.transactionService = transactionService;
        this.userService = userService;
    }
    async depositMoney(depositDto) {
        try {
            const user = await this.userService.getUser({ _id: depositDto.user });
            if (!user) {
                throw new common_1.NotFoundException('User does not exist');
            }
            const transaction = await this.transactionService.findOrCreateTransactionByUserId(user._id, depositDto.amount);
            return {
                status: 'success',
                message: 'Money deposited successfully',
                data: transaction,
            };
        }
        catch (err) {
            console.log(err);
            return {
                status: 'error',
                message: 'An error occurred while depositing money',
                data: null,
            };
        }
    }
    async withdrawMoney(withdrawalDto) {
        try {
            const user = await this.userService.getUser({ _id: withdrawalDto.user });
            if (!user) {
                throw new common_1.NotFoundException('User does not exist');
            }
            const transaction = await this.transactionService.withdraw(user._id, withdrawalDto.amount);
            return {
                status: 'success',
                message: 'Money withdrawn successfully',
                data: transaction,
            };
        }
        catch (err) {
            console.log(err);
            return {
                status: 'error',
                message: err.message || 'An error occurred while withdrawing money',
                data: null,
            };
        }
    }
    async transferMoney(transferDto) {
        try {
            const sender = await this.userService.getUser({ _id: transferDto.user });
            if (!sender) {
                throw new common_1.NotFoundException('Sender does not exist');
            }
            const recipient = await this.userService.getUser({ _id: transferDto.transfer_to });
            if (!recipient) {
                throw new common_1.NotFoundException('Recipient does not exist');
            }
            const transaction = await this.transactionService.transfer(transferDto);
            return {
                status: 'success',
                message: 'Money transferred successfully',
                data: transaction,
            };
        }
        catch (err) {
            console.log(err);
            return {
                status: 'error',
                message: err.message || 'An error occurred while transferring money',
                data: null,
            };
        }
    }
    async getUserTransactions(userId) {
        const filterQuery = { user: userId };
        const allTransactions = await this.transactionService.getUserTransaction(filterQuery);
        return {
            data: allTransactions,
            status: 'sucess',
            message: 'All user transaction retrieved successfully',
        };
    }
};
TransactionProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService,
        user_service_1.UserService])
], TransactionProvider);
exports.TransactionProvider = TransactionProvider;
//# sourceMappingURL=transaction.provider.js.map