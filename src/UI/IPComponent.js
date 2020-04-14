import React, {useState} from 'react';
import s from "./Settings.module.css"
import {Field} from "redux-form";
import {Input} from "../features/formControls/formControls";
import {ipCorrect, required} from "../features/validates/validates";
import UsedAddress from "./UsedAddress";

class IPComponent extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            isEditIP: false
        }
    }
    onChangeKind = (e) => {
        this.setState(prevState => {
            return {isEditIP: !prevState.isEditIP}
        })
    }

    // componentDidMount() {
    //     this.setState({
    //         isEditIP: this.props.isEditeIP
    //
    //     })
    // }



    render() {
let wifiIP=this.props.disable

        let disableStyle = [!this.state.isEditIP  && s.disableLable, this.state.isEditIP && s.activeLable]
            .filter(e => !!e)
            .join(' ')
        return <div className={s.ipWrapper}>
            <UsedAddress name={this.props.nameRadio} onChangeKind={this.onChangeKind} text={'an IP '}
                         dhtp={'(DHCP/BootP)'}
                         isWifi={this.props.isWifi} disable={this.props.disable}/>
            <div className={[s.ipInfoBlock]}>
                <div className={s.addInfo}>
                    <label className={disableStyle}>IP address: <span>*</span></label>
                    <Field component={Input} type='text' className={s.infoField}
                           name={this.props.ipAddess} kind={this.state.isEditIP }
                           validate={this.state.isEditIP && [required, ipCorrect]}/>
                </div>
                <div className={s.addInfo}>
                    <label className={disableStyle}>Subnet Mask: <span>*</span></label>
                    <Field component={Input} type='text'
                           name={this.props.subnetMask} kind={this.state.isEditIP }
                           validate={this.state.isEditIP && [required, ipCorrect]}/>
                </div>
                <div className={s.addInfo}>
                    <label className={disableStyle}>Default Gateway: </label>
                    <Field component={Input} type='text'
                           name={this.props.defaulGateWay} kind={this.state.isEditIP }/>
                </div>
            </div>
        </div>
    }
}

export default IPComponent