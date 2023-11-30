export enum ReportType {
  'SYNC',
  'UPGRADE',
  'REPLACEMENT',
}

export interface Report {
  report: {
    id: number;
    payload: string;
    reportType: ReportType;
    checked: boolean;
    userId: number;
    created_at: String;
  };
}
export interface FetchReportRequest {
  payload: {
    userId: number;
  };
}

export interface FetchReportResponse {
  ok: boolean;
  code: number;
  message: string;
  data: Report[] | null;
}
