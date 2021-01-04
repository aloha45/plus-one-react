import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Landing from '../../components/LandingHeader/LandingHeader'
import Card from '../../components/Card/Card'

class SwipingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <Landing />
                <h1>Swiping Page</h1>
                <Card />
            </React.Fragment>
         );
    }
}
 
export default SwipingPage;