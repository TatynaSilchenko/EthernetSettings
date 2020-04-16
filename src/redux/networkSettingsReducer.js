import api from '../api/api'

const SET_STATUS = 'network/settings/SET_STATUS'
export const ipModes = {
    DYNAMIC: 'dynamic',
    STATIC: 'static',
}
export const networkTypes = {
    ETHERNET: 'ethernet',
    WIFI: 'wifi'
}

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    IN_PROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS'
}
let initialState = {
    status: statuses.NOT_INITIALIZED,
    ethernet:
        {
            ipMode: ipModes.DYNAMIC, // "static",
            dnsMode: ipModes.DYNAMIC,
        },
    wifi: {
        wifiMode: false,
        isSecurityKey: false,
        ipMode: ipModes.DYNAMIC,
        dnsMode: ipModes.DYNAMIC
    },


}
const networkSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const saveNetworkSettings = (ethernet, wifi) => async (dispatch) => {
    dispatch(setStatus(statuses.IN_PROGRESS));
    let data = {ethernet, wifi};
    try {
        let settings = await api.sendSettings(data)
        console.log(settings.data)
        dispatch(setStatus(statuses.SUCCESS));
    } catch (error) {
        console.error(error)
        dispatch(setStatus(statuses.ERROR));
    }
}

export const setStatus = (status) => ({type: SET_STATUS, status});

export default networkSettingsReducer