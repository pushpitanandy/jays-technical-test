// methods for user registration, authentication, and other related operations

import { User } from '../models/User';

export interface UserService {
  register(name: string, email: string, password: string): Promise<User>;
  login(email: string, password: string): Promise<string>;
  getUserById(id: string): Promise<User | null>;
}
