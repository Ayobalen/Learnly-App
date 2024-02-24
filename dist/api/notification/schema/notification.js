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
exports.NotificationSchema = exports.NotificationModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("../../user/schema");
let NotificationModel = class NotificationModel {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], NotificationModel.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], NotificationModel.prototype, "body", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], NotificationModel.prototype, "is_read", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: schema_1.User.name,
    }),
    __metadata("design:type", Object)
], NotificationModel.prototype, "user", void 0);
NotificationModel = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    })
], NotificationModel);
exports.NotificationModel = NotificationModel;
exports.NotificationSchema = mongoose_1.SchemaFactory.createForClass(NotificationModel);
//# sourceMappingURL=notification.js.map