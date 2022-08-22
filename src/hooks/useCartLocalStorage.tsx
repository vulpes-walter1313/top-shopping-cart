import React, { useReducer, useEffect } from "react";

interface CartItem {
  productId: number;
  quantity: number;
}

export type CartData = CartItem[];

type AddToCartAction = {
  type: "add" | "delete" | "update";
  payload: {
    id: number;
    quantity?: number;
  };
};

type ReducerActions = AddToCartAction;

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string)
  : [];
// const initialState: CartData | undefined[] = [];

// function initSt(initialStat: typeof initialState) {
//   if (localStorage.getItem("cart")) {
//     return JSON.parse(localStorage.getItem("cart") as string);
//   } else {
//     return initialState;
//   }
// }

function cartReducer(
  state: CartData,
  action: ReducerActions
): CartData | typeof initialState {
  switch (action.type) {
    case "add":
      // If the item added is not already in the cart, add it along with its quantity
      if (!state.some((item) => item.productId === action.payload.id)) {
        return [
          ...state,
          { productId: action.payload.id, quantity: action.payload.quantity },
        ];
        // Else if the item added is already in the cart
      } else if (state.some((item) => item.productId === action.payload.id)) {
        // if product is already in cart, then check if quantity needs to be updated.
        let newState = state.map((item) => {
          if (item.productId === action.payload.id) {
            if (item.quantity !== action.payload.quantity) {
              return {
                productId: item.productId,
                quantity: action.payload.quantity,
              };
            } else {
              return item;
            }
          } else {
            return item;
          }
        });
        return newState;
      } else {
        return state;
      }

    case "delete":
      // delete item
      return state.filter((item) => item.productId === action.payload.id);

    case "update":
      let newState = state.map((item) => {
        if (item.productId === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        } else {
          return item;
        }
      });
      return newState;
    default:
      return state;
  }
}

export default function useCartLocalStorage(): [
  CartData,
  React.Dispatch<AddToCartAction>
] {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}
