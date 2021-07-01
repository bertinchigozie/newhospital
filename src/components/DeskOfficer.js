import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom'
import './DeskOfficer.css'
import Registration from './Registration'
import Footer from './Footer'
import Consultation from './Consultation'
import Emergency from './Emergency'
import Eye from './Eye'
import Services from './Services'
import Premarital from './Premarital'
import DashBoard from './DashBoard'
import Exit from './Exit'
import { Link } from 'react-router-dom'

function DeskOfficer() {
    return (

        <Router>
          <div className="ui grid">
              <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
                <Link to='/DashBoard' className="active item">
                    DashBoard
                </Link>
                <Link to='/Registration' className="item">
                    Registration
                </Link>
                <Link to='/Emergency' className="item">
                    Emergency
                </Link>
                <Link to='/Services' className="item">
                    Services
                </Link>
                <Link to='/Premarital' className="item">
                    Premarital
                </Link>
                <Link to='/Eye' className="item">
                    Eye
                </Link>
                <Link to='/Consultation' className="item">
                    Consultation
                </Link>
                <Link to='/Exit' className="item">
                    Exit
                </Link>
            </div> 
            </div>
            <div className="twelve wide stretched column">
                <div className="ui segment">
            <Switch>
                <Route exact path='/DashBoard' component={DashBoard} />
                <Route exact path='/Registration' component={Registration} />
                <Route exact path='/Emergency' component={Emergency} />
                 <Route exact path='/Services' component={Services} /> 
                 <Route exact path='/PreMarital' component={Premarital} />
                 <Route exact path='/Eye' component={Eye} />
                 <Route exact path='/Exit' component={Exit} />
                <Route exact path='/Consultation' component={Consultation} />
            </Switch>
            </div>
            </div>
            <Footer /> 

            </div>
            </Router>
    )
}

export default DeskOfficer
