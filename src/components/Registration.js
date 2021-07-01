import React from 'react'

function Registration() {
    return (
        <div>
            <form className="ui form container">
            <h2 className="ui dividing header">Registration Form</h2>
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
                    <input type="text" placeholder="Date Of Birth" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Gender" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Occupation" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Phone No" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Guardians Surname" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Guardians Other names" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Contact No" />
                </div>
                <div className="field">
                    <input type="text" placeholder="State" />
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
    </div>
    )	
   
}

export default Registration
