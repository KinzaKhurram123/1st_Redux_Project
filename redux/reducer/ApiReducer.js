import { ADDITION, ADD_TO_CART, REMOVE_FROM_CART, SUBTRACTION } from "../ActionType";

const initialState = {
  results: [],
  cart:[],
  counter: 0,
};

export default mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: action.payload};

    case SUBTRACTION:
      return {...state, counter: state.counter - 1};

    case 'GET_DATA':
      return {...state, results: action.payload };

    case  ADD_TO_CART:
       return {...state, cart :action.payload};
    
    case REMOVE_FROM_CART:
         const delelatdArray =initialState.filter((item, index))
         return index != action.payload;
  
         return delelatdArray;
    default:
      return state;
  }
};
 
