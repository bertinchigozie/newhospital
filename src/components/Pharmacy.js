import React from 'react'

function Pharmacy() {
    return (
        <div>
            <form className="ui form container">
            <h2 className="ui dividing header">Pharmacy Dispensing Unit</h2>
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
                    <input type="text" placeholder="Referring Practitioner" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Ward" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Drug" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Description/Strength" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Dosage" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Period" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <textarea type="text" placeholder="Comment" />
                </div>
                </div>

            </div>

        </form>
        </div>
    )
}


export default Pharmacy
