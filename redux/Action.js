import { ADDITION, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, SUBTRACTION } from "./ActionType";



export const addition = count => ({
  type: ADDITION,
  payload: count + 1,
});

export const subtraction = count => ({
  type: SUBTRACTION,
  payload: count - 1,
});

export const getDataMethod =data => ({
    type: 'GET_DATA',
    payload: data,
});


export const additemToCart = data => ({
  type: ADD_TO_CART,
  payload: getDataMethod(data),
});

export const removeFromCart =index => ({
      type:REMOVE_FROM_CART,
      payload:index,
});

export const additemToWishlist=data => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});

export const removeFromWishlist =index => ({
      type:REMOVE_FROM_WISHLIST,
      payload:index,
});



