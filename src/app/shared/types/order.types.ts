import { Cart } from './cart.types';
import { User } from './user.types';

export interface Order {
  _id: string;
  cart_id: string;
  user_id: string;
  billing_address: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  cart: Cart;
}


