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

    return {
      ok: true,
      login: res.data.ok, //* Defines if current login is okay or not.
      payload: res.data,
      error: null,
    };
  } catch (e: any) {
    console.error('Error while sending login request! ' + e.message);
    return {
      ok: false,
      login: false,
      payload: null,
      error: e.toString(),
    };
  }
};
