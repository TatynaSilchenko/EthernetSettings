import React from 'react';
import s from "../../UI/Settings.module.css"

export let Input = ({input, meta, ...props}) => {
    const hasError=meta.touched&&meta.error
    return <div className={s.inputWrapper}>
        <input  type={props.type} disabled={props.kind===false} {...input} />

        {hasError && <div className={s.errorWraper}><span className={s.error}> {meta.error}</span></div>}
        {meta.touched && meta.warning && <span style={{color: 'orange'}}> {meta.warning}</span>}
    </div>
};

export let Select = ({input, meta, ...props}) => {
    const hasError=meta.touched&&meta.error
    return <div>
        <select  type={props.type} disabled={props.kind===false} {...input} >
            <option/>
        <option value="netWork1">Network 1</option>
        <option value="netWork2">Network 2</option>
        <option value="netWork3">Network 3</option>
        </select>
        {hasError && <span className={s.errorSelect}> {meta.error}</span>}
        {meta.touched && meta.warning && <span style={{color: 'orange'}}> {meta.warning}</span>}
    </div>
};