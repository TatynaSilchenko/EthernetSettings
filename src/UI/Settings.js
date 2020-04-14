import React, {useState} from 'react';
import s from "./Settings.module.css"
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import IPComponent from "./IPComponent";
import DNSComponent from "./DNSComponent";
import WifiComponent from "./WifiComponent";
import {reset} from 'redux-form';

const Settings = (props) => {

    let saveSettings = (values) => {
        console.log(values);
    }
    return <div className={s.settings__wrapper}>
        <AddSettingsForm onSubmit={saveSettings}  {...props}/>
    </div>
}

let AddSettingsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.settings__form}>
            <div className={s.settings__choice}>
                <div className={s.columnSettings}>
                    <h5>EthernetSettings</h5>
                    <IPComponent nameRadio={"isEditeIP"} ipAddess={'ipAddress'}
                                 subnetMask={'subnetMask'} defaulGateWay={'defaulGateWay'}
                                 {...props}/>
                    <DNSComponent nameRadio={"isEditeDNS"} dnsServer={'dnsServer'} dnsAlternativeServer={'dnsAlternativeServer'}{...props}/>
                    {/*<DNSComponent nameRadio={"isEditeDNS"} {...props}/>*/}
                </div>
                <div className={s.columnSettings}>
                    <h5>Wireless Settings</h5>
                  <WifiComponent {...props}/>
                </div>
            </div>
            <div className={s.settings__submit}>
                <button type="submit" className={s.submite}>Save</button>
                <button type="button" className={s.cancelBtn} onClick={props.reset}>Cancel</button>


                {/*<Submit {...props} title={'Save'} style={{backgroundColor: '#1aa8eb', color: 'white'}}/>*/}
                {/*<Submit title={'Cancel'}/>*/}
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    return {
        initialValues: {
            isEditeIP: state.settings.isEditeIP,
            isEditeDNS: state.settings.isEditeDNS,
            isEditeIPWifi: state.settings.isEditeIPWifi,
            isEditeWifi: state.settings.isEditeWifi,
            wifi: state.settings.wifi
        }
    }
}

AddSettingsForm = connect(mapStateToProps)(reduxForm({
    form: 'addSettings', enableReinitialize: true,
    onSubmitSuccess:(result, dispatch, props) => {
       return  dispatch(reset(props.form))
    }
})(AddSettingsForm))
export default Settings