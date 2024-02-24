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
exports.MailServiceSandpress = void 0;
const common_1 = require("@nestjs/common");
const smtpexpress_1 = require("smtpexpress");
let MailServiceSandpress = class MailServiceSandpress {
    constructor() {
        try {
            this.transporter = (0, smtpexpress_1.createClient)({
                projectId: 'sm0pid-tVQteYpIXgkMT5Uu4uFmT6TdV',
                projectSecret: 'c4e33b2298522ab6439a03fa75ed68575ed02aa50dfbb2e615',
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async sendEmail(email) {
        await this.transporter.sendApi.sendMail({
            subject: 'A message from the express',
            message: '<h1> Welcome to the future of Email Delivery </h1>',
            sender: {
                name: 'Tenotea',
                email: 'tenotea@smtpexpress.com',
            },
            recipients: {
                name: "My recipient's name",
                email: 'olawoye51@gmail.com',
            },
        });
    }
};
MailServiceSandpress = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MailServiceSandpress);
exports.MailServiceSandpress = MailServiceSandpress;
//# sourceMappingURL=smtpexpress.js.map