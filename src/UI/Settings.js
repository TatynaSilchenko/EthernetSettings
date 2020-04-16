import React from 'react';
import s from "./Settings.module.css"
import {formValueSelector, reduxForm} from "redux-form";
import {connect, useDispatch} from "react-redux";
import IPComponent from "./IPComponent";
import DNSComponent from "./DNSComponent";
import {reset} from 'redux-form';
import WifiComponent from "./WifiComponent";
import {ethernetSettings} from "../BLL/settingsReducer";

const Settings = (props) => {
    let dispatch=useDispatch()
    let saveSettings = (values) => {
        dispatch(ethernetSettings(values.ethernet,values.wifi))

    }
    return <div className={s.settings__wrapper}>
        <AddSettingsForm onSubmit={saveSettings}  {...props}/>
    </div>
}

let AddSettingsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}  className={s.settings__form}>
            <div className={s.settings__choice}>
                <div className={s.columnSettings}>
                    <h5>EthernetSettings</h5>
                    <IPComponent nameRadio={"ipMode"} ipAddess={"ipAddress"}
                                 subnetMask={"subnetMask"} defaulGateWay={"defaulGateWay"}
                                 networkType={"ethernet"} wifiMode={false} disableClassesWifiv={null}
                                 {...props}/>
                    <DNSComponent nameRadio={"dnsMode"} dnsServer={'dnsServer'}
                                  dnsAlternativeServer={'dnsAlternativeServer'}
                                  networkType={"ethernet"} wifiMode={false} disableClassesWifiv={null}
                                  {...props}/>
                </div>
                <div className={s.columnSettings}>
                   <h5>Wireless Settings</h5>
                    <WifiComponent  nameCheckBox={"wifiMode"} networkType={"wifi"}{...props}/>
                </div>
            </div>
            <div className={s.settings__submit}>
                <button type="submit" className={s.submite}>Save</button>
                <button type="button" className={s.cancelBtn} onClick={props.reset}>Cancel</button>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    return {
        initialValues: state.settings,
        currentValues: {
            ethernet: formValueSelector("addSettings")(state, "ethernet"),
            wifi: formValueSelector("addSettings")(state, "wifi")
        }
    }
}

AddSettingsForm = connect(mapStateToProps)(reduxForm({
    form: 'addSettings', enableReinitialize: true,
    onSubmitSuccess: (result, dispatch, props) => {
        return dispatch(reset(props.form))
    }
})(AddSettingsForm))
export default Settings