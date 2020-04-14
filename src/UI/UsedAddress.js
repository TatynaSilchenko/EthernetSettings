import React, {useState} from 'react';
import s from "./Settings.module.css"
import {Field} from "redux-form";
import {Input} from "../features/formControls/formControls";
import {ipAddressShow, required} from "../features/validates/validates";

const IPComponent=(props)=>{
    let [kindIP, setKindIP] = useState('auto')
    let onChangeKind = (e) => {
        setKindIP(e.currentTarget.value)
    }
    return <div className={s.ipWrapper}>
        <label className={s.choiseIP}>
            <Field name="ipAddressChoice" component='input' className={s.radioBtn}
                   onChange={onChangeKind} type="radio" value='auto' />
            Obtain an IP address automatically</label>
        <label className={s.choiseIP}><Field name="ipAddressChoice" component='input' className={s.radioBtn}
                                             onChange={onChangeKind} type="radio" value='following'/>
            Use the following IP address:</label>
        <div className={s.followingIPInfo}>
            <div className={s.addInfo}>
                <label>IP address: <span>*</span></label>
                <Field component={Input} type='text' className={s.infoField}
                       name='ipAddress' kindIP={kindIP}
                       validate={[required, ipAddressShow]}/>
            </div>
            <div className={s.addInfo}>
                <label>Subnet Mask: <span>*</span></label>
                <Field component={Input} type='text'
                       name='subnetMask' kindIP={kindIP}
                       validate={[required, ipAddressShow]}/>
            </div>
            <div className={s.addInfo}>
                <label>Default Gateway: </label>
                <Field component={Input} type='text'
                       name='defaulGateWay' kindIP={kindIP}/>
            </div>
        </div>
    </div>
}

export default IPComponent