import { User } from './user.types';

export interface RegisterForm {
  name:           string;
  lastname:       string;
  email:          string;
  password:       string;
  terms_acepted:  boolean
}

export interface LoginForm {
  email:    string;
  password: string;
}

export interface UserData {
  user:   User;
  token:  string;
}

// this can be extended for future features
export interface AppContext {
  isInitialized:    boolean;
  isAuthenticated:  boolean;
  isExpired:        boolean;
  data:             UserData | null;
}
