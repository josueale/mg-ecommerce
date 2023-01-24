export interface Product{
  _id: string;
  title: string;
  is_active: boolean;
  description: string;
  price: number;
  stock: number;
  in_stock: boolean;
  is_on_sale: boolean;
  on_sale_price: number;
  category: string;
  tags: any[];
  comments_id: any[];
  createdAt: string;
  updatedAt: string;
}