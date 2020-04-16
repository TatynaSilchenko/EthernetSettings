import React from 'react'
import s from './Settings.module.css'
import {formValueSelector, reduxForm, reset} from 'redux-form'
import {connect} from 'react-redux'
import IPComponent from './IPComponent'
import DNSComponent from './DNSComponent'
import WifiComponent from './WifiComponent'
import {networkTypes, saveNetworkSettings} from '../redux/networkSettingsReducer'
import {getNetworkSettings} from '../redux/network-settings-selectors'
import {compose} from 'redux'

const Settings = (props) => {
    return (
        <div className={s.settings__wrapper}>
            <form onSubmit={props.handleSubmit} className={s.settings__form}>
                <div className={s.settings__choice}>
                    <div className={s.columnSettings}>
                        <h5>EthernetSettings</h5>
                        <IPComponent radioName={'ipMode'} ipAddess={'ipAddress'}
                                     subnetMask={'subnetMask'} defaulGateWay={'defaulGateWay'}
                                     networkType={networkTypes.ETHERNET} wifiMode={false}
                                     disableClassesWifiv={null}
                                     {...props}/>
                        <DNSComponent radioName={'dnsMode'} dnsServer={'dnsServer'}
                                      dnsAlternativeServer={'dnsAlternativeServer'}
                                      networkType={networkTypes.ETHERNET} wifiMode={false}
                                      disableClassesWifiv={null}
                                      {...props}/>
                    </div>
                    <div className={s.columnSettings}>
                        <h5>Wireless Settings</h5>
                        <WifiComponent checkBoxName={'wifiMode'} networkType={"wifi"}{...props}/>
                    </div>
                </div>
                <div className={s.settings__submit}>
                    <button type='submit' className={s.submite}>Save</button>
                    <button type='button' className={s.cancelBtn} onClick={props.reset}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        initialValues: getNetworkSettings(state),
        currentValues: {
            ethernet: formValueSelector('addSettings')(state, 'ethernet'),
            wifi: formValueSelector('addSettings')(state, 'wifi')
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(saveNetworkSettings(values.ethernet, values.wifi))
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: 'addSettings', enableReinitialize: true,
        onSubmitSuccess: (result, dispatch, props) => {
            return dispatch(reset(props.form))
        }
    })
)(Settings)