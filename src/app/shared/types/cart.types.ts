import { Product } from './product.type'
export interface Cart {
  _id: string
  products: Product[]
  total: number
  shipping: number
  subtotal: number
}

