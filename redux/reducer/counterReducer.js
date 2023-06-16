const initialState = {
  counterAdd: 0,
};

export default counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return {...state, counterAdd: action.payload};

    default:
      return state;
  }
};
