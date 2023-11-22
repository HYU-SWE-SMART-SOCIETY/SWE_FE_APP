import {PingRequest, PingResponse} from './types';
import axios from 'axios';

export const sendPingRequest = async (
  pingRequest: PingRequest,
): Promise<PingResponse> => {
  try {
    const data = {
      payload: pingRequest,
    };
    // TODO -> IMPORTANT: Need to encapsulate the request uri after the demo.

    const res = await axios.post('http://localhost:11000/api/v1/ping/', data);

    const respData = res.data;

    if (!respData.ok) {
      console.error('Error!! Error message from backend: ' + respData.message);
      return {result: null};
    }

    return {
      result: respData.data.result,
    };
  } catch (e: any) {
    console.error('Error while sending ping request! ' + e.message);
    return {
      result: null,
    };
  }
};
