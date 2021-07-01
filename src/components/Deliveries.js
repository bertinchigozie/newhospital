import React from 'react'
import Pharmacy from './Pharmacy'

function Deliveries() {
    return (
        <div>
             <form className="ui form container">
            <h2 className="ui dividing header">Deliveries Mother's Bill/Payment</h2>
            <div className="field">
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Receipt's No" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Patient's Surname" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Patient's Othername" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Date" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Ward" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Chart Life" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Home Drugs" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Nursing Services" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Consumables" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Delivery Fee" />
                </div>
                </div>
                <div className="three fields">
                <div className="field">
                    <input type="text" placeholder="Surgical Services" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Amount Deposited" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Balance" />
                </div>
                </div>
            </div>
            <div className="field">
                <div className="fields">
                <div className="twelve wide field">
                    <textarea type="text" name="shipping[address]" placeholder="Patient's Address" />
                </div>
                </div>
            </div>

        </form>
        <Pharmacy />
        </div>
    )
}


export default Deliveries
