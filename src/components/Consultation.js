import React from 'react'
import Lab from './Lab'
import Admission from './Admission'
import Ultrasound from './Ultrasound'

function Consultation() {
    return (
        <div>

            {/* Patient's Encounter */}
            <form className="ui form container">
            <h2 className="ui dividing header">Doctors Specialist And Consultant Patient's Encounter</h2>
            <div className="field">
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Patient's No" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Doctor On Duty" />
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
                    <input type="text" placeholder="Diagnosis/Observation" />
                </div>
                <div className="field">
                    <textarea type="text" placeholder="Prescription/Treatment" />
                </div>
                </div>
                <div className="one field">
                <div className="field">
                    <h1>Medications</h1>
                <table class="ui celled table">
                        <thead>
                            <tr><th>Drug</th>
                            <th>Description/Strength</th>
                            <th>Dosage</th>
                            <th>Periods</th>
                            <th>Investigation</th>
                            <th>Ultrasound</th>
                            <th>Others</th>
                        </tr></thead>
                        <tbody>
                            <tr>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label="investigation"></td>
                            <td data-label="ultrascan"></td>
                            <td data-label="others"></td>
                            </tr>
                            <tr>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            </tr>
                            <tr>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            </tr>
                            <tr>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            <td data-label=""></td>
                            </tr>
                        </tbody>
                        </table>
                </div>
                <div className="field">
                    <h1>Procedures</h1>
                <table class="ui celled table">
                        <thead>
                            <tr>
                            <th>Procedurename</th>
                            <th>Date</th>
                            <th>Comment</th>
                            <th>Review</th>
                            <th>Details</th>
                        </tr></thead>
                        <tbody>
                            <tr>
                            <td data-label="procedurename"></td>
                            <td data-label="date"></td>
                            <td data-label=""></td>
                            <td data-label="review"></td>
                            <td data-label="details"></td>
                            </tr>
                            <tr>
                            <td data-label="procedurename"></td>
                            <td data-label="date"></td>
                            <td data-label=""></td>
                            <td data-label="review"></td>
                            <td data-label="details"></td>
                            </tr>
                            <tr>
                            <td data-label="procedurename"></td>
                            <td data-label="date"></td>
                            <td data-label=""></td>
                            <td data-label="review"></td>
                            <td data-label="details"></td>
                            </tr>
                        </tbody>
                        </table>
                </div>
                </div>
                
                </div>

        </form>

        {/* Consultation Services */}

        <form className="ui form container">
            <h2 className="ui dividing header">Consultation Services</h2>
            <div className="field">
                <div className="two fields">
                <div className="field">
                    <input type="text" placeholder="Patient's No" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Receipt's No" />
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
                    <input type="text" placeholder="Doctor Booked" />
                </div>
                </div>
                <div className="one field">
                <div className="field">
                    <input type="text" placeholder="Type Of Patient Visitation/New" />
                </div>
                </div>
                
                </div>
        </form>
        <Lab />
        <Ultrasound />
        <Admission />
        </div>
    )
}	
    



export default Consultation
