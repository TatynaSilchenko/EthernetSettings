import {applyMiddleware, combineReducers, createStore} from "redux"
import {reducer as formReducer} from "redux-form"
import ElementsReduser from "./settingsReducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    form: formReducer,
    settings:ElementsReduser
})
const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store

export default store