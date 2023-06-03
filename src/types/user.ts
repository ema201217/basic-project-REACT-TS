import { Dispatch, SetStateAction } from 'react';

export interface User {
  email: string | null;
  password: string | null;
  token?: string | null;
}

export interface UserContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}