import React, { useReducer } from 'react';

interface ICart {
  products: Array<string>
  shipping_value?: number;
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppReducer: React.FC = () => {
  const cart = useReducer(
    (state: ICart, action: CartActionType) => {
      switch (action.type) {
        case 'ADD_PRODUCT':
          return {
            ...state,
            product: [...state.products, "Produto Novo"]
          }
        default:
          return state
      }
    },
    {
      products: [],
      shipping_value: 0
    },
  )
  return (
    <div />
  );
}

export default AppReducer;
