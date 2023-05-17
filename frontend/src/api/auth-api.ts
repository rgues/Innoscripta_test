import { API_END_POINT } from '../config'
import { LoginRequest } from '../types/LoginRequest';
import { CreateAccountRequest } from '../types/CreateAccountRequest';

import { AuthResponse } from '../types/AuthResponse';
import { headers } from '../api/request-api';

import Axios from 'axios'


export async function createAccount(
  accountData: CreateAccountRequest
): Promise<AuthResponse> {
  const response = await Axios.post(`${API_END_POINT}/register`,  JSON.stringify(accountData), headers());
  return response.data;
}

export async function login(
  loginData: LoginRequest
): Promise<AuthResponse> {
  const response = await Axios.post(`${API_END_POINT}/login`, JSON.stringify(loginData), headers());
  return response.data;
}

export async function logout(): Promise<void> {
  await Axios.delete(`${API_END_POINT}/logout`, headers())
}
