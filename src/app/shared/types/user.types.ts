export interface User {
  _id:       string;
  name:      string;
  lastname:  string;
  email:     string;
  profile?: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

export type UserRegister = User

export interface UserLogin {
  authenticated:  boolean;
  user:           User;
  token:          string;
}

export interface UserContext extends User {
  token:            string;
  isAuthenticated:  boolean;
}

export type UserList = UserItem[]

export interface UserItem{
  _id:        string;
  name:       string;
  lastname:   string;
  email:      string;
  profile:    string;
  createdAt:  string;
  updatedAt:  string;
  is_active:  boolean;
}