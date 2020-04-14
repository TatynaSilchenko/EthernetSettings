import React from 'react';
import s from "./Settings.module.css"
import {Field} from "redux-form";
import {Input} from "../features/formControls/formControls";
import { ipCorrect, required} from "../features/validates/validates";
import UsedAddress from "./UsedAddress";

class DNSComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            kindDNS: false
        }
    }
   onChangeKind = (e) => {
        debugger
        this.setState(prevState => {
            return {kindDNS: !prevState.kindDNS}
        })
    }

    render() {
        let disableStyle = [!this.state.kindDNS  && s.disableLable,
            this.state.kindDNS && s.activeLable].filter(e => !!e)
            .join(' ')
        return <div className={s.ipWrapper}>
            <UsedAddress name={this.props.nameRadio} onChangeKind={this.onChangeKind}
                         text={'DNS server '} dhtp={''} isWifi={this.props.isWifi}
                         disable={this.props.disable}/>
            <div className={s.followingIPInfo}>
                <div className={s.addInfo}>
                    <label className={disableStyle}>Preffered DNS server: <span>*</span></label>
                    <Field component={Input} type='text' className={s.infoField}
                           name={this.props.dnsServer} kind={this.state.kindDNS }
                           validate={this.state.kindDNS  && [required, ipCorrect]}/>
                </div>
                <div className={s.addInfo}>
                    <label className={disableStyle}>Alternative DNS server: </label>
                    <Field component={Input} type='text'
                           name={this.props.dnsAlternativeServer} kind={this.state.kindDNS }/>
                </div>

            </div>
        </div>
    }
}

export default DNSComponent