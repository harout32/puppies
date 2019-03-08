import { AuthUserLoginType } from './types';

/**
 *
 *
 * @param {name: string, email: string} userData
 * @returns
 */
export const authLogin = userData => {
  return { payload: userData, type: AuthUserLoginType };
};
