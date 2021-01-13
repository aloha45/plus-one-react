import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    state = { 
        picture: "",
        name: "",
        city: "",
        age: ""
     }

     handleSaveProfile() {
         const newProfile = {
             picture: this.state.picture,
             name: this.state.name,
             city: this.state.city,
             age: this.state.age
         }
         console.log('save profile', newProfile)
     }

     handleYepClick = () => {
        const click = new Audio('audio/click.wav');
        const newProfile = {
            picture: this.state.picture,
            name: this.state.name,
            city: this.state.city,
            age: this.state.age
        }
        this.getProfilePic();
        this.getProfile();
        this.props.handleYep(newProfile);
        this.handleSaveProfile();
        //  click.play()
        console.log('yep', this.state)
     }

     handleNopeClick = () => {
        const snap = new Audio('audio/snap.wav');
        this.getProfilePic();
        this.getProfile();
        this.props.handleNope();
        // snap.play()
        console.log('nope', this.state)
    }

     async getProfile(){
        await fetch("https://randomuser.me/api/")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const name = data.results[0].name.first;
            const city = data.results[0].location.city;
            const age = data.results[0].dob.age;
            // profiles.push(newProfile);
            this.setState({
                name: name,
                city: city,
                age: age
                }, () => {
                console.log('this is the state', this.state)
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    async getProfilePic (){
        await fetch("https://picsum.photos/v2/list")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const picture = data[parseInt(Math.floor(Math.random() * Math.floor(30)))].download_url;
            // profiles.push(newProfile);
            this.setState({
                picture: picture
            }, () => {
                console.log('this is the state', this.state)
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.getProfilePic()
        this.getProfile()
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <div className='card'>
                    <img id='profilePic' src={this.state.picture} alt='profile pic' />
                    <div id='profileData'>
                        <h4>{this.state.name}</h4>
                        <h5>{this.state.age} years old</h5>
                        <h5>{this.state.city}</h5>
                    </div>
                </div>
                <div className='buttonDiv'>
                    <button id='yesButton' onClick={this.handleYepClick}>Yep</button>
                    <button id='noButton' onClick={this.handleNopeClick}>Nope</button>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Card;