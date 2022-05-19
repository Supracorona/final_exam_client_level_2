import {} from "redux";
import rootReducer from "../reducers/rootReducer";
import initialState from "./initialState";

const configureStore = () => {
  return creatorStore(rootReducer, initialState);
}

export default configureStore;