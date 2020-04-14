import {Field} from "redux-form";
import React from "react";
import s from "./Settings.module.css"
import {Input, Select} from "../features/formControls/formControls";
import {required} from "../features/validates/validates";
import repeat from "../assets/repeat.svg"
import IPComponent from "./IPComponent";
import DNSComponent from "./DNSComponent";

class WifiComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            wifi: false,
            wifiSecurity:false
        }
    }

    setAnable = (e) => {
        let nameField=e.currentTarget.name
        this.setState(prevState => {
            return {[nameField]: !prevState[nameField]}
        })
    }

    render() {
        let disableStyleWifiEnable = [!this.state.wifi && s.disableLable, this.state.wifi && s.secu]
            .filter(e => !!e).join(' ')
        let disableStyleSecurityKey = [!this.state.wifiSecurity && s.disableLable, this.state.wifiSecurity && s.activeLable]
            .filter(e => !!e).join(' ')
        return <div className={s.ipWrapper}>
            <div className={s.enable}>
                <div>
                    <lable><Field name='wifi' component='input'
                                  type='checkBox' onChange={this.setAnable}
                                  className={s.checkmark} value={this.state.wifi}/>
                        Enable wifi
                    </lable>
                </div>
                <div className={[s.addInfo, s.searchWiFiName].join(' ')}><label className={disableStyleWifiEnable}>Wireless
                    Network Name <span>*</span></label>
                    <Field name="wifiName" component={Select} type='select' kind={this.state.wifi} validate={this.state.wifi && [required]}/>
                    <div className={[s.repeatCircle,!this.state.wifi&&s.disabledRepatIcon].join(' ')}>
                        <img src={repeat} alt="repeat icon" className={s.repeatIcon}/></div>
                </div>
            </div>
            <div className={s.enable}>
                <lable className={[disableStyleWifiEnable,s.securityTitle].join(' ')}><Field name='wifiSecurity' component='input'
                                                       type='checkBox' onChange={this.setAnable}
                                                       className={s.checkmark} disabled={!this.state.wifi}/>
                    Enable Wireless Security
                </lable>
                <div className={s.securityInfo}>

                    <div className={s.securityKey}><label className={disableStyleSecurityKey}>Securety Key: <span>*</span></label>
                        <Field component={Input} type='text' className={s.infoField}
                               name='securityKey' kind={this.state.wifiSecurity}
                               validate={this.state.wifiSecurity&& [required]}/>
                    </div>
                </div>
            </div>
            <IPComponent nameRadio={"isEditeIPWifi"} isWifi={this.state.wifi} ipAddess={'ipAddressWifi'}
                         subnetMask={'subnetMaskWifi'} defaulGateWay={'defaulGateWayWifi'}
                         disable={!this.state.wifi&&'notEnable'}{...this.props}/>
            <DNSComponent nameRadio={"isEditeWifi"} dnsServer={'dnsServerWifi'}  isWifi={this.state.wifi}
                          dnsAlternativeServer={'dnsAlternativeServerWifi'}
                          disable={!this.state.wifi&&'notEnable'}{...this.props}/>
        </div>
    }
}

export default WifiComponent