import React, { Component } from 'react';
import userService from '../../services/userService'

class ProfilePage extends Component {
    state = { 
        user: userService.getUser()
     }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Hey, check it out: {this.state.user.name}'s profile page.</h1>
            </React.Fragment>
         );
    }
}
 
export default ProfilePage;