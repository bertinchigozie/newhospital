import React from 'react'

function Eye() {
    return (
        <div>
            {/* Cancer Screening */}
            <div className="container">
            <form className="ui form container">
            <h2 className="ui dividing header">Cancer Screening</h2>
            <div className="field">
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Receipt's No" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Patient's No" />
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
                    <input type="text" placeholder="Type Of Test" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Amount" />
                </div>
                </div>
               
            </div>

        </form>
            </div>

                {/* Eye Clinic */}
            <div className="contain">
            <form className="ui form container">
            <h2 className="ui dividing header">Eye Clinic</h2>
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
                    <input type="text" placeholder="Date" />
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
                    <input type="text" placeholder="Home Drugs" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Glasses" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Eye Pressure" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Dialitation" />
                </div>
                <div className="field">
                    <input type="text" placeholder="FB Removal" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="OPD Services" />
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

export default Eye
