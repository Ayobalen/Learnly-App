"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const helmet_1 = __importDefault(require("helmet"));
const morgan = require("morgan");
const nestjs_pino_1 = require("nestjs-pino");
const app_module_1 = require("./app.module");
const exception_filter_1 = require("./helpers/exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true,
    });
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.setGlobalPrefix('api/v1');
    app.useGlobalFilters(new exception_filter_1.HttpExceptionFilter());
    app.use((0, helmet_1.default)());
    app.enableCors();
    app.use(morgan('dev'));
    await app.listen(process.env.PORT || '3005');
}
bootstrap();
//# sourceMappingURL=main.js.map