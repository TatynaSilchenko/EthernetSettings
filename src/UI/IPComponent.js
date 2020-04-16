import React from 'react';
import s from "./Settings.module.css"
import {Field} from "redux-form";
import {Input} from "../features/formControls/formControls";
import {ipCorrect, required} from "../features/validates/validates";
import UsedAddress from "./UsedAddress";
import cn from "classnames";

let IPComponent = (props) => {

    let {networkType} = props;
    let ipMode = props.currentValues[networkType]
        ? props.currentValues[networkType].ipMode
        : props.initialValues[networkType].ipMode;
    const disableInputs = ipMode === "dinamic" || (networkType === 'wifi' && !props.wifiMode)

    let disableClasses = cn({
        [s.disableLable]: disableInputs,
    })
    return <div className={s.ipWrapper}>
        <UsedAddress name={networkType + "." + props.nameRadio} text={'an IP '}
                     dhtp={'(DHCP/BootP)'} networkType={props.networkType}
                     disableClasses={props.disableClassesWifi}
                     wifiMode={props.wifiMode}/>
        <div className={[s.ipInfoBlock]}>
            <div className={s.addInfo}>
                <label className={disableClasses}>IP address: <span>*</span></label>
                <Field component={Input} type='text' name={networkType + "." + props.ipAddess}
                       validate={ipMode === "static" ? [required, ipCorrect] : []}
                       disabled={disableInputs}/>
            </div>
            <div className={s.addInfo}>
                <label className={disableClasses}>Subnet Mask: <span>*</span></label>
                <Field component={Input} type='text'
                       name={networkType + "." + props.subnetMask}
                       validate={ipMode === "static" ? [required, ipCorrect] : []}
                       disabled={disableInputs}/>
            </div>
            <div className={s.addInfo}>
                <label className={disableClasses}>Default Gateway: </label>
                <Field component={Input} type='text'
                       name={networkType + "." + props.defaulGateWay} disabled={disableInputs}/>
            </div>
        </div>
    </div>
}


export default IPComponent