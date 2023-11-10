import React from 'react';
import {User} from '../../../types/entity/user';

export interface LoginFormParams {
  setIdent: React.Dispatch<React.SetStateAction<string>>;
  setPw: React.Dispatch<React.SetStateAction<string>>;
}

export interface LoginInfoParams {
  ident: string;
  pw: string;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface LoginRequest {
  enteredID: string;
  enteredPW: string;
}

export interface LoginPayload {
  code: number;
  data: any;
  message: string;
  ok: boolean;
}

export interface LoginResponse {
  ok: boolean;
  login: boolean;
  payload: LoginPayload | null;
  error: string | null;
}
