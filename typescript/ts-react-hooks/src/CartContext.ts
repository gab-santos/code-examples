import { createContext } from 'react'

interface IProducts {
  id: string;
  name: string;
  price: number;
}

interface ICart {
  products?: Array<IProducts>
  shipping_value?: number;
}

const CartContext = createContext<ICart>({
  products: [],
  shipping_value: 0
});

export default CartContext;