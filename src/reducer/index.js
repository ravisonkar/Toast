import { showToast } from "./showToast";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    showToast: showToast
})


export default rootReducer;