export declare class FileExportService {
    private saveCSV;
    private savePDF;
    jsonTOCsv(data: any, fields: any): Promise<any>;
    sendReportToAdmin(payload: any): Promise<void>;
}
