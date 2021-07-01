import React from 'react'

function Ultrasound() {
    return (
        <div>
            {/* Ultrasound */}
            <div>
    <form className="ui form container">
            <h2 className="ui dividing header">Physiotherapy</h2>
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
                    <input type="text" placeholder="Type Of Utrasound" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Amount" />
                </div>
                </div>
            </div>

        </form>
    </div>

    {/* CT Scan */}

    <div>
    <form className="ui form container">
            <h2 className="ui dividing header">CT Scan</h2>
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
                    <input type="text" placeholder="Type Of Scan" />
                </div>
                <div className="field">
                    <input type="text" placeholder="Amount" />
                </div>
                </div>
            </div>

        </form>
    </div>

    {/* X-ray */}

    <div>
    <form className="ui form container">
            <h2 className="ui dividing header">X-ray</h2>
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
                    <input type="text" placeholder="Type Of X-ray" />
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

export default Ultrasound
