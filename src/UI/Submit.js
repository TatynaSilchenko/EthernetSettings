import React from 'react';
import s from "./Submit.module.css"

const Submit=(props)=>{
    debugger
    return <>
       <button type="submit" style={props.style} className={s.submite}>{props.title}</button>
    </>
}
export default Submit