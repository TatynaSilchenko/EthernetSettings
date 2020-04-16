import React from 'react'
import s from './Settings.module.css'
import {Field} from 'redux-form'

const RadioButtons = (props) => {
    return <div className={s.ipWrapper}>

        <label className={props.disableClasses}>
            <Field name={props.name} component='input' className={s.radioBtn}
                   type='radio' value={props.option1Value}
                   disabled={props.disableRadioButtons}/>
            {props.option1Text}
        </label>

        <label className={props.disableClasses}>
            <Field name={props.name} component='input' className={s.radioBtn}
                   value={props.option2Value} type='radio'
                   disabled={props.disableRadioButtons}/>
            {props.option2Text}
        </label>

    </div>

}

export default RadioButtons