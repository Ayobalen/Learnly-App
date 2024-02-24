"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileExportService = void 0;
const common_1 = require("@nestjs/common");
const plainjs_1 = require("@json2csv/plainjs");
const fs = __importStar(require("fs"));
const jspdf_1 = require("jspdf");
const jspdf_autotable_1 = __importDefault(require("jspdf-autotable"));
let FileExportService = class FileExportService {
    saveCSV(csv) {
        const filepath = `src/helpers/${Date.now()}report.csv`;
        fs.writeFileSync(filepath, csv);
        return filepath;
    }
    savePDF(csv) {
        const doc = new jspdf_1.jsPDF();
        doc.setFont('helvetica');
        doc.setTextColor(40);
        doc.text('CSV to PDF Conversion Example', 14, 22);
        const data = csv
            .split('\n')
            .slice(1)
            .map((row) => row.split(','));
        const header = csv
            .split('\n')[0]
            .split('","')
            .join()
            .split('"')
            .join()
            .split(',')
            .join()
            .slice(1)
            .slice(0, -1)
            .split(',');
        (0, jspdf_autotable_1.default)(doc, {
            head: [header],
            body: data,
        });
        const filepath = `src/helpers/${Date.now()}report.pdf`;
        doc.save(filepath);
        return filepath;
    }
    async jsonTOCsv(data, fields) {
        const json2csv = new plainjs_1.Parser({ fields });
        const csv = json2csv.parse(data);
        return csv;
    }
    async sendReportToAdmin(payload) {
        const { data, fields, fileType } = payload;
        const csv = await this.jsonTOCsv(data, fields);
        let path;
        if (fileType === 'PDF') {
            path = this.savePDF(csv);
        }
        else {
            path = this.saveCSV(csv);
        }
        fs.unlinkSync(path);
    }
};
FileExportService = __decorate([
    (0, common_1.Injectable)()
], FileExportService);
exports.FileExportService = FileExportService;
//# sourceMappingURL=file.exports.service.js.map