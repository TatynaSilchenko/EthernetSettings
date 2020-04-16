import {Field} from 'redux-form'
import React from 'react'
import s from './Settings.module.css'
import {Input, Select} from '../features/formControls/formControls'
import {required} from '../features/validates/validates'
import repeat from '../assets/repeat.svg'
import IPComponent from './IPComponent'
import DNSComponent from './DNSComponent'
import cn from 'classnames'

let WifiComponent = (props) => {

    let networkType = props.networkType;
    let wifiMode = props.currentValues[networkType]
        ? props.currentValues[networkType].wifiMode
        : props.initialValues[networkType].wifiMode;
    let isSecurityKey = props.currentValues[networkType]
        ? props.currentValues[networkType].isSecurityKey
        : props.initialValues[networkType].isSecurityKey;
    const disableWifiSettings = !wifiMode
    const disableSecurityKey = !isSecurityKey

    let disableClassesWiFi = cn({
        [s.disableLable]: disableWifiSettings,
    })
    let disableClassesKey = cn({
        [s.disableLable]: disableSecurityKey,
    })

    const getName = (name) => networkType + '.' + name

    return <div className={s.ipWrapper}>
        <div className={s.enable}>
            <div>
                <label><Field name={getName(props.checkBoxName)} component='input'
                              type='checkBox' checked={wifiMode} className={s.checkmark}/>
                    Enable wifi
                </label>
            </div>
            <div className={[s.addInfo, s.searchWiFiName].join(' ')}>
                <label className={disableClassesWiFi}>Wireless
                    Network Name <span>*</span></label>
                <Field name={getName('wifiName')} component={Select} type='select'
                       disabled={!wifiMode} validate={wifiMode ? [required] : []}/>

                <div className={[s.repeatCircle, !wifiMode && s.disabledRepatIcon].join(' ')}
                     onClick={() => alert('search new networks')}>
                    <img src={repeat} alt='repeat icon' className={s.repeatIcon}/></div>
            </div>
        </div>
        <div className={s.enable}>
            <label className={[disableClassesWiFi, s.securityTitle].join(' ')}>
                <Field name={getName('isSecurityKey')} component='input'
                       type='checkBox' className={s.checkmark} disabled={!wifiMode}
                       checked={isSecurityKey}/>
                Enable Wireless Security
            </label>
            <div className={s.securityInfo}>
                <div className={s.securityKey}>
                    <label className={disableClassesKey}>Securety Key: <span>*</span></label>
                    <Field component={Input} type='text' className={s.infoField} disabled={!isSecurityKey}
                           name={getName('securityKey')}/>
                </div>
            </div>
        </div>

        <IPComponent radioName={'ipMode'} ipAddess={'ipAddressWifi'}
                     subnetMask={'subnetMaskWifi'} defaulGateWay={'defaulGateWayWifi'}
                     networkType={props.networkType} wifiMode={wifiMode}
                     disableClassesWifi={disableClassesWiFi}{...props}/>
        <DNSComponent radioName={'dnsMode'} dnsServer={'dnsServerWifi'}
                      dnsAlternativeServer={'dnsAlternativeServerWifi'}
                      networkType={props.networkType} wifiMode={wifiMode}
                      disableClassesWifi={disableClassesWiFi}{...props}/>
    </div>
}


export default WifiComponent