import {applyMiddleware, combineReducers, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import networkSettingsReducer from './networkSettingsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    form: formReducer,
    settings: networkSettingsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store

export default store