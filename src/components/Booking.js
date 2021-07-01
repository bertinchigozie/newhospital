import React from 'react'

function Booking() {
    return (
        <div>
            <form className="ui form">
            <h2 className="ui dividing header">Vital Signs/Appointment</h2>
            <div className="field">
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Patient's No" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Appointment Type: Physician/Medical Officer" />
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
                    <input type="text" placeholder="Height" />
                </div>
                <div className="field">
                    <input type="text" placeholder="BMI" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Weight" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Respiration" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Pressure" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Temperature" />
                </div>
                </div>
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Pulse" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Appointment Mode: New/Visitation" />
                </div>
            </div>
        </div>
            



        </form>
        </div>
    )
}

export default Booking
