import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import Card from '../../components/Card/Card'
import GreetingPage from '../GreetingPage/GreetingPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import SwipingPage from '../SwipingPage/SwipingPage'

class App extends Component {
  state = {
    user: userService.getUser(),
  }

  handleYep(profile) {
    // this.state.user.yepArr.push(profile)
    // console.log(this.state.user)
    // need to set state with new user profile array and also save in the database
  }

  handleNope(profile) {
    // this.state.user.nopeArr.push(profile)
    // console.log(this.state.user)
    // need to set state with new user profile array and also save in the database
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render () {
    return (
      <>
      {this.state.user ? 
        <>
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout} />
        <LandingHeader
          user={this.state.user} />
        {/* <Card 
          handleYep={this.handleYep}
          handleNope={this.handleNope} />  */}
        <SwipingPage 
          handleYep={this.handleYep}
          handleNope={this.handleNope}/>
          </>
          :
        <GreetingPage />
      }

        <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/profile' render={({ history }) => 
          <ProfilePage
            history={history}
            user={this.state.user}
          />
        }/>
      </>
    );
  }
}

export default App;
