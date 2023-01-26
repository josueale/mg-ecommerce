import { Cart } from './cart.types';
import { User } from './user.types';

export interface BasicOrder {
  _id: string;
  cart_id: string;
  user_id: string;
  billing_address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order extends BasicOrder {
  user: User;
  cart: Cart;
}
