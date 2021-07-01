import React from 'react'
import Deliveries from './Deliveries'

function Admission() {
    return (
        <div>
            <form className="ui form container">
            <h2 className="ui dividing header">Admission Details</h2>
            <div className="field">
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Patient's No" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Date" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Patient's Surname" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Patient's Othername" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Date Admitted" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Ward" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="General/Private Ward" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Bed No" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <textarea type="text" placeholder="Daily Vital Sign Chart Sheet" />
                </div>
                <div className="field">
                    <textarea type="text" placeholder="Drug Chart Sheet" />
                </div>
                </div>
            </div>
                

        </form>

        <form className="ui form container">
            <h2 className="ui dividing header">In/Out Patient Billing/Payment</h2>
            <div className="field">
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Patient's No" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Receipt No" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Patient's Surname" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Patient's Othername" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Ward Fee" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Chart File" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Consultation" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Home Drugs" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Lab Test" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Card" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Nursing Services" />
                </div>
                <div className="field">
                    <input type="text" placeholder="OPD Services" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Consumable" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Surgical Services" />
                </div>
                </div>
                <div className="three fields">
                <div className="field">
                    <input type="text" placeholder="Pharmacy Bag" />
                </div>
                <div className="field">
                    <input type="text" placeholder="amount Deposited" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Balance" />
                </div>
                </div>
            </div>

        </form>

            <Deliveries />
        </div>
    )
}

export default Admission
