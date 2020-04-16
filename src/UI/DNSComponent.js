import React from 'react';
import s from "./Settings.module.css"
import {Field} from "redux-form";
import {Input} from "../features/formControls/formControls";
import {ipCorrect, required} from "../features/validates/validates";
import UsedAddress from "./UsedAddress";
import cn from "classnames";

let DNSComponent = (props) => {

    let {networkType} = props;
    let dnsMode = props.currentValues[networkType]
        ? props.currentValues[networkType].dnsMode
        : props.initialValues[networkType].dnsMode;
    const disableInputs = dnsMode === "dinamic" || (networkType === 'wifi' && !props.wifiMode)
    let disableClasses = cn({
        [s.disableLable]: disableInputs
    })

    return <div className={s.ipWrapper}>
        <UsedAddress name={networkType + "." + props.nameRadio}
                     text={'DNS server '} dhtp={''} disableClasses={props.disableClassesWifi}
                     wifiMode={props.wifiMode} networkType={networkType}/>
        <div className={s.followingIPInfo}>
            <div className={s.addInfo}>
                <label className={disableClasses}>Preffered DNS server: <span>*</span></label>
                <Field component={Input} type='text'
                       name={networkType + "." + props.dnsServer}
                       validate={dnsMode === "static" && [required, ipCorrect]} disabled={disableInputs}/>
            </div>
            <div className={s.addInfo}>
                <label className={disableClasses}>Alternative DNS server: </label>
                <Field component={Input} type='text'
                       name={networkType + "." + props.dnsAlternativeServer}
                       disabled={disableInputs}/>
            </div>

        </div>
    </div>
}


export default DNSComponent