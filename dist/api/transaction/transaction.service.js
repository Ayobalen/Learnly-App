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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const transaction_schema_1 = require("./schema/transaction.schema");
const mongoose_2 = require("mongoose");
const constants_1 = require("../../constants");
let TransactionService = class TransactionService {
    constructor(transactionModel) {
        this.transactionModel = transactionModel;
    }
    async findOrCreateTransactionByUserId(userId, amount) {
        const latestTransaction = await this.transactionModel
            .findOne({ user: userId })
            .sort({ createdAt: -1 });
        const newBalance = latestTransaction ? latestTransaction.balance + amount : amount;
        const newTransaction = new this.transactionModel({
            user: userId,
            balance: newBalance,
            transaction_type: constants_1.TRANSACTION_TYPE.DEPOSIT,
            transaction_status: constants_1.TRANSACTION_STATUS.COMPLETED,
        });
        await newTransaction.save();
        return newTransaction;
    }
    async withdraw(userId, amount) {
        const userTransaction = await this.transactionModel.findOne({ user: userId });
        if (!userTransaction) {
            throw new common_1.NotFoundException('Transaction not found for the user');
        }
        if (userTransaction.balance < amount) {
            throw new common_1.BadRequestException('Insufficient balance for withdrawal');
        }
        const withdrawalTransaction = new this.transactionModel({
            user: userId,
            balance: -amount,
            transaction_type: constants_1.TRANSACTION_TYPE.WITHDRAWAL,
            transaction_status: constants_1.TRANSACTION_STATUS.COMPLETED,
        });
        await withdrawalTransaction.save();
        userTransaction.balance -= amount;
        await userTransaction.save();
        return withdrawalTransaction;
    }
    async transfer(transferDto) {
        const senderTransaction = await this.transactionModel.findOne({ user: transferDto.user });
        if (!senderTransaction) {
            throw new common_1.NotFoundException('Transaction not found for the sender');
        }
        if (senderTransaction.balance < transferDto.amount) {
            throw new common_1.BadRequestException('Insufficient balance for transfer');
        }
        let recipientTransaction = await this.transactionModel.findOne({
            user: transferDto.transfer_to,
        });
        if (!recipientTransaction) {
            recipientTransaction = new this.transactionModel({
                user: transferDto.transfer_to,
                balance: 0,
                transaction_type: constants_1.TRANSACTION_TYPE.INITIAL,
                transaction_status: constants_1.TRANSACTION_STATUS.COMPLETED,
            });
            await recipientTransaction.save();
        }
        const transferTransaction = new this.transactionModel({
            user: transferDto.user,
            balance: -transferDto.amount,
            transaction_type: constants_1.TRANSACTION_TYPE.TRANSFER,
            transaction_status: constants_1.TRANSACTION_STATUS.COMPLETED,
            transfer_to: transferDto.transfer_to,
        });
        await transferTransaction.save();
        senderTransaction.balance -= transferDto.amount;
        await senderTransaction.save();
        recipientTransaction.balance += transferDto.amount;
        await recipientTransaction.save();
        return {
            message: 'Money transferred successfully',
            data: {
                transaction: transferTransaction,
                senderUpdatedBalance: senderTransaction.balance,
                recipientUpdatedBalance: recipientTransaction.balance,
            },
        };
    }
    async getUserTransaction(filterQuery) {
        const allTransaction = await this.transactionModel.find(filterQuery);
        return allTransaction;
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(transaction_schema_1.Transaction.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map