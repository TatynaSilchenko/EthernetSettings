import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import ElementsReduser from "./settingsReducer";

const rootReducer = combineReducers({
    form: formReducer,
    settings:ElementsReduser
})
const store = createStore(rootReducer)
export default store