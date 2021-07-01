import React from 'react'

function Lab() {
    return (
        <div>
            <form className="ui form container">
            <h2 className="ui dividing header">Laboratory Test Sample Template</h2>
            <div className="field">
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Patient's No" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Patient's Name" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Test Name" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Sample Collection" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Age" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Gender" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Ward" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Doctor" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Lab Technician" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Date" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <textarea type="text" placeholder="Result" />
                </div>
            </div>

            </div>

        </form>

        {/* Lab Test */}
        <div>
    <form className="ui form container">
            <h2 className="ui dividing header">Laboratory Test</h2>
            <div className="field">
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Receipt's No" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Patient No" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Date" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Patient's Surname" />
                </div>
                </div>
                <div className="three fields">
                <div className="field">
                    <input type="text" placeholder="Patient's Othername" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Test Required" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Amount" />
                </div>
                </div>
            </div>

        </form>
    </div>

        </div>
    )
}

export default Lab
