import React from 'react'
import s from './Settings.module.css'
import {Field} from 'redux-form'
import {Input} from '../features/formControls/formControls'
import {ipCorrect, required} from '../features/validates/validates'
import RadioButtons from './RadioButtons'
import cn from 'classnames'
import {ipModes, networkTypes} from '../redux/networkSettingsReducer'

let DNSComponent = (props) => {

    let {networkType} = props;

    let dnsMode = props.currentValues[networkType]
        ? props.currentValues[networkType].dnsMode
        : props.initialValues[networkType].dnsMode;

    const disableInputs = dnsMode === ipModes.DYNAMIC || (networkType === networkTypes.WIFI && !props.wifiMode)

    let disableClasses = cn({
        [s.disableLable]: disableInputs
    })

    const getName = (name) => networkType + '.' + name

    return <div className={s.ipWrapper}>
        <RadioButtons name={getName(props.radioName)}
                      disableClasses={props.disableClassesWifi}
                      option1Text={'Obtain DNS server server address automatically'}
                      option2Text={'Use the following DS address:'}
                      option1Value={ipModes.DYNAMIC}
                      option2Value={ipModes.STATIC}
                      wifiMode={props.wifiMode} networkType={networkType}/>
        <div className={s.followingIPInfo}>
            <div className={s.addInfo}>
                <label className={disableClasses}>Preffered DNS server: <span>*</span></label>
                <Field component={Input} type='text'
                       name={getName(props.dnsServer)}
                       validate={dnsMode === ipModes.STATIC ? [required, ipCorrect] : []} disabled={disableInputs}/>
            </div>
            <div className={s.addInfo}>
                <label className={disableClasses}>Alternative DNS server: </label>
                <Field component={Input} type='text'
                       name={getName(props.dnsAlternativeServer)}
                       disabled={disableInputs}/>
            </div>

        </div>
    </div>
}


export default DNSComponent