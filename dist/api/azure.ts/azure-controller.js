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
exports.AzureController = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const storage_blob_1 = require("@azure/storage-blob");
const common_1 = require("@nestjs/common");
let AzureController = class AzureController {
    async uploadedFile(file) {
        try {
            const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
            const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME;
            const blobName = encodeURIComponent(file.originalname);
            const sasToken = process.env.AZURE_STORAGE_SAS_KEY;
            const blobUrl = `https://${accountName}.blob.core.windows.net/${containerName}/${blobName}${sasToken}`;
            const blockBlobClient = new storage_blob_1.BlockBlobClient(blobUrl);
            await blockBlobClient.uploadData(file.buffer);
            common_1.Logger.log(`File uploaded to Azure Blob Storage with URL: ${blockBlobClient.url}`);
            return { message: 'File uploaded successfully', url: blockBlobClient.url };
        }
        catch (error) {
            common_1.Logger.error(`Failed to upload file: ${error.message}`);
            throw new common_1.HttpException('Failed to upload file', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AzureController.prototype, "uploadedFile", null);
AzureController = __decorate([
    (0, common_1.Controller)('file-upload')
], AzureController);
exports.AzureController = AzureController;
//# sourceMappingURL=azure-controller.js.map