import { combineReducers } from "redux";
import { searchResultsReducer } from "./searchResults";

const masterReducer = combineReducers({
  searchResults: searchResultsReducer
});

export default masterReducer;
