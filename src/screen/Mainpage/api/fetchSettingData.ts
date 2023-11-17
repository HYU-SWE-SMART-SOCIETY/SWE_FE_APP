import {FetchRequest, SettingResponse} from '../types/types';
import axios from 'axios';

export const fetchSettingData = async (
  fetchRequest: FetchRequest,
): Promise<SettingResponse> => {
  try {
    const data = {
      payload: fetchRequest,
    };
    //TODO!! IMPORTANT: Need to hide the url in production!
    const resp = await axios.post(
      'http://localhost:11000/api/v1/setting/download/',
      data,
    );

    return {
      ok: true,
      message: 'SUCCESSFUL',
      payload: resp.data,
    };
  } catch (e: any) {
    console.error('Error while fetching instance settings! ' + e.message);
    return {
      ok: false,
      message: e.message,
      payload: null,
    };
  }
};
