import React from 'react';
import s from "./Settings.module.css"
import {Field} from "redux-form";

const UsedAddress = (props) => {
    return <div className={s.ipWrapper}>
        {/*<label className={s.choiseIP}>*/}
        <label className={[props.isWifi  && s.choiseIP, !props.isWifi&&props.disable==='notEnable'&& s.disableLable]
            .filter(e => !!e).join(' ')}>
            <Field name={props.name} component='input' className={s.radioBtn}
                   onChange={props.onChangeKind} type="radio" value='false' disabled={props.disable==='notEnable'}/>
            Obtain {props.text} server address automatically {props.dhtp}</label>
        <label className={[props.isWifi  && s.choiseIP, !props.isWifi&&props.disable==='notEnable'&& s.disableLable]
                .filter(e => !!e).join(' ')}>
            <Field name={props.name} component='input' className={s.radioBtn}
                                             onChange={props.onChangeKind} type="radio" value='true'
                                             disabled={props.disable==='notEnable'}/>
            Use the following {props.text} address:</label>
    </div>

}

export default UsedAddress