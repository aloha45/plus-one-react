import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import SwipingPageGuest from '../../pages/SwipingPageGuest/SwipingPageGuest'
import GreetingPage from '../GreetingPage/GreetingPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import MatchesPage from '../MatchesPage/MatchesPage'
import SwipingPage from '../SwipingPage/SwipingPage'

class App extends PureComponent {
  state = {
    user: userService.getUser(),
    guest: {
      yepArr: [],
      id: "guest",
    }
  }

  handleYep = async newProfile => {
    const userLike = this.state.user
    userLike.yepArr.push(newProfile)
    await userService.save(userLike)
    this.setState({ user: userLike })
    console.log(this.state.user)
    // need to set state with new user profile array and also save in the database
  }

  handleGuestYep = async newProfile => {
    const guestLike = this.state.guest
    guestLike.yepArr.push(newProfile)
    this.setState({ guest: guestLike })
    console.log(this.state.guest)
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
      { this.state.user ? 
        <>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout} />
          <LandingHeader
            user={this.state.user} />
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
        <Route exact path="/swiping" render={({ history }) =>
          <SwipingPage 
            handleYep={this.handleYep}
            handleNope={this.handleNope}
            user={this.state.user}
            />
          }/>
        <Route exact path='/matches' render={({ history }) => 
          <MatchesPage
            history={history}
            user={this.state.user}
          />
        }/>
        <Route exact path='/guest' render={({ history }) => 
          <SwipingPageGuest
            handleYep={this.handleGuestYep}
            guest={this.state.guest}
            history={history}
          />
        }/>
      </>
    );
  }
}

export default App;
