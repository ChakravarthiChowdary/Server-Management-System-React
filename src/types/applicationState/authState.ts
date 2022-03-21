import { User } from "../user";

export interface AuthState {
  loading: boolean;
  error: null | { message: string; code: number };
  user: null | User;
}
