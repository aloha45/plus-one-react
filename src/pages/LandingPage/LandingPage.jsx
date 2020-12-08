import React, { Component } from 'react'
import userService from '../../services/userService'

class LandingPage extends Component {
    state = { 

     }
    render() { 
        return ( 
            <React.Fragment>
                <h1>{this.props.user.name} rules</h1>
            </React.Fragment>
         );
    }
}
 
export default LandingPage;