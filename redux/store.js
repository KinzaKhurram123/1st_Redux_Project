import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/reducer/RootReducer";

export const mystore = createStore (rootReducer,{}, applyMiddleware(thunk));
