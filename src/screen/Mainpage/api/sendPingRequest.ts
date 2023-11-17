import axios from 'axios';
import {ConnectedDevice} from '../types/types';

export const sendPingRequest = async (
  userId: number,
): Promise<ConnectedDevice[] | null> => {
  try {
    const data = {
      payload: {
        userId,
      },
    };

    //TODO!! IMPORTANT: Need to hide the url in production!
    const resp = await axios.post('http://localhost:11000/api/v1/ping/', data);
    const body = resp.data;
    if (body.ok) {
      return body.data.result;
    }
  } catch (e: any) {
    console.log(e.message);
    return null;
  }
  return null; //* This must be not be executed!
};
