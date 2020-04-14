let initialState = {
    isEditeIP: 'false',
    isEditeDNS:'false',
    isEditeIPWifi:'false',
    isEditeWifi:'false',
    wifi:false
    // followingIP: {
    //         iPAddress: '173.121.208.298',
    //     subnetMask: '255.255.255.000',
    //     defaulGateWay: '10.1.1.1'
    // }

}
const ElementsReduser = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

let setSettings = (data) => {

}
export default ElementsReduser