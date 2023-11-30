import {FetchReportRequest, FetchReportResponse, Report} from '../types/types';
import axios from 'axios';

export const fetchAllReport = async (
  fetchReportRequest: FetchReportRequest,
): Promise<FetchReportResponse> => {
  try {
    const resp = await axios.post(
      'http://localhost:11000/api/v1/report/fetchAll',
      fetchReportRequest,
    );

    const body = resp.data;

    if (!body.ok) {
      return {
        ok: false,
        message: 'FAILED',
        code: -1,
        data: null,
      };
    }

    const data: Report[] = body.data;
    return {
      ok: false,
      message: 'SUCCESSFUL',
      code: -1,
      data,
    };
  } catch (e: any) {
    console.error('Error while fetching reports! ' + e.message);
    return {
      ok: false,
      message: e.message,
      code: -1,
      data: null,
    };
  }
};
