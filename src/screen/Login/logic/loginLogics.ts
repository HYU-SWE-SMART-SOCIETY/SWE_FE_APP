import React from 'react';
import {User} from '../../../types/entity/user';

export const checkIfRequiredFieldFilled = (
  ident: String,
  pw: String,
): boolean => {
  return ident.length > 0 && pw.length > 0;
};

//* TODO: Add More Login Logic If Needed
export const handleLogin = async (
  setUser: React.Dispatch<React.SetStateAction<User>>,
  user: User,
): Promise<void> => {
  setUser(user);
};
