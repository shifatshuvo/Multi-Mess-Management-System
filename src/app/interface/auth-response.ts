import { user } from "./data-type";


export interface AuthResponse {
  tokenStr: string;
  user: user;
}