import api from "../DAL/api";

const SET_STATUS = 'SET_STATUS';

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
            ipMode: "dinamic", // "static",
            dnsMode: "dinamic",
        },
    wifi: {
        wifiMode: false,
        isSecurityKey: false,
        ipMode: "dinamic",
        dnsMode: "dinamic"
    },


}
const ElementsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const ethernetSettings = (ethernet,wifi) =>async (dispatch)=>{
    dispatch(setStatus(statuses.IN_PROGRESS));
    let data= {ethernet, wifi};
   let settings= await api.loadForm(data)
    console.log(settings.data)
    dispatch(setStatus(statuses.SUCCESS));
};

export const setStatus = (status) => ({type: SET_STATUS, status});

export default ElementsReduser