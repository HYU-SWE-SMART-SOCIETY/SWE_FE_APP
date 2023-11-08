import React from 'react';

export interface LoginFormParams {
  setIdent: React.Dispatch<React.SetStateAction<string>>;
  setPw: React.Dispatch<React.SetStateAction<string>>;
}

export interface LoginInfoParams {
  ident: string;
  pw: string;
}

export interface LoginRequest {
  enteredID: string;
  enteredPW: string;
}
export interface LoginResponse {
  ok: boolean;
  error: string | null;
}
