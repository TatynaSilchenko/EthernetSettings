import React from 'react'
import s from './Settings.module.css'
import {Field} from 'redux-form'
import {Input} from '../features/formControls/formControls'
import {ipCorrect, required} from '../features/validates/validates'
import RadioButtons from './RadioButtons'
import cn from 'classnames'
import {ipModes, networkTypes} from '../redux/networkSettingsReducer'

let IPComponent = (props) => {
    let {networkType} = props;

    let ipMode = props.currentValues[networkType]
        ? props.currentValues[networkType].ipMode
        : props.initialValues[networkType].ipMode;

    const disableInputs = ipMode === ipModes.DYNAMIC || (networkType === networkTypes.WIFI && !props.wifiMode)
    const disableRadioButtons = props.networkType === networkTypes.WIFI && !props.wifiMode
    let disableClasses = cn({
        [s.disableLable]: disableInputs,
    })
    const getName = (name) => networkType + '.' + name

    return <div className={s.ipWrapper}>
        <RadioButtons name={getName(props.radioName)}
                      option1Text={'Obtain an IP server address automatically (DHTP/BootP)'}
                      option2Text={'Use the following IP address:'}
                      option1Value={ipModes.DYNAMIC}
                      option2Value={ipModes.STATIC}
                      networkType={props.networkType}
                      disableClasses={props.disableClassesWifi}
                      wifiMode={props.wifiMode}
                      disableRadioButtons={disableRadioButtons}/>
        <div className={[s.ipInfoBlock]}>
            <div className={s.addInfo}>
                <label className={disableClasses}>IP address: <span>*</span></label>
                <Field component={Input} type='text' name={getName(props.ipAddess)}
                       validate={ipMode === ipModes.STATIC ? [required, ipCorrect] : []}
                       disabled={disableInputs}/>
            </div>
            <div className={s.addInfo}>
                <label className={disableClasses}>Subnet Mask: <span>*</span></label>
                <Field component={Input} type='text'
                       name={getName(props.subnetMask)}
                       validate={ipMode === ipModes.STATIC ? [required, ipCorrect] : []}
                       disabled={disableInputs}/>
            </div>
            <div className={s.addInfo}>
                <label className={disableClasses}>Default Gateway: </label>
                <Field component={Input} type='text'
                       name={getName(props.defaulGateWay)} disabled={disableInputs}/>
            </div>
        </div>
    </div>
}


export default IPComponent