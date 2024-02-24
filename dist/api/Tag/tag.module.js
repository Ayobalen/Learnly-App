"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const helpers_1 = require("../../helpers");
const tag_provider_1 = require("./tag.provider");
const tag_service_1 = require("./tag.service");
const schema_1 = require("./schema");
const tag_controller_1 = require("./tag.controller");
let TagsModule = class TagsModule {
};
TagsModule = __decorate([
    (0, common_1.Module)({
        providers: [tag_provider_1.TagsProvider, tag_service_1.TagsService, helpers_1.UtilService],
        exports: [tag_service_1.TagsService],
        controllers: [tag_controller_1.TagsController],
        imports: [
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.Tags.name,
                    schema: schema_1.TagsSchema,
                },
            ]),
        ],
    })
], TagsModule);
exports.TagsModule = TagsModule;
//# sourceMappingURL=tag.module.js.map