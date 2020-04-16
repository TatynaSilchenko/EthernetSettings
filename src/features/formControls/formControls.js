import React from 'react'
import s from '../../UI/Settings.module.css'

export let Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return <div className={s.inputWrapper}>
        <input type={props.type} disabled={props.disabled} {...input} />

        {hasError && <div className={s.errorWraper}>
            <span className={s.error}> {meta.error}</span>
        </div>}
    </div>
};

export let Select = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return <div className={s.selectWrapper}>
        <select disabled={props.disabled} {...input} >
            <option/>
            <option value='netWork1'>Network 1</option>
            <option value='netWork2'>Network 2</option>
            <option value='netWork3'>Network 3</option>
        </select>

        {hasError && <span className={s.errorSelect}> {meta.error}</span>}

    </div>
};