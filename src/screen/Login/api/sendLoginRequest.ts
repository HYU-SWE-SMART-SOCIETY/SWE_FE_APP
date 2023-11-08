import {LoginRequest, LoginResponse} from '../types/types';
import axios from 'axios';

export const sendLoginRequest = async (
  loginRequest: LoginRequest,
): Promise<LoginResponse> => {
  try {
    const data = {
      payload: loginRequest,
    };

    //TODO!! IMPORTANT: Need to hide the url in production!
    const res = await axios.post('http://localhost:11000/api/v1/signin/', data);
    console.log(res);
  } catch (e: any) {
    console.error('Error while sending login request! ' + e.toString());
    return {
      ok: false,
      error: e.toString(),
    };
  }
  return {ok: true, error: null};
};
