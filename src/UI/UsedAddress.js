import React from 'react';
import s from "./Settings.module.css"
import {Field} from "redux-form";

const UsedAddress = (props) => {
    return <div className={s.ipWrapper}>
        <label className={props.disableClasses}>
            <Field name={props.name} component='input' className={s.radioBtn}
                   type="radio" value={"dinamic"}
                   disabled={props.networkType==='wifi'&&!props.wifiMode}/>
            Obtain {props.text} server address automatically {props.dhtp}</label>
        <label className={props.disableClasses}>
            <Field name={props.name} component='input' className={s.radioBtn}
                   value={"static"}  type="radio"
                   disabled={props.networkType==='wifi'&&!props.wifiMode}/>
            Use the following {props.text} address:</label>
    </div>

}

export default UsedAddress