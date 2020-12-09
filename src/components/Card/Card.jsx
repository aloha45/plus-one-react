import React, { Component } from 'react'
class Card extends Component {
    state = { 
        profile: {
            picture: "",
            name: "",
            city: "",
            age: ""
        }
     }

     handleYepClick = () => {
        const click = new Audio('audio/click.wav');
        this.getProfilePic();
        this.getProfile();
        this.props.handleYep();
        //  click.play()
        console.log('yep')
     }

     handleNopeClick = () => {
        const snap = new Audio('audio/snap.wav');
        this.getProfilePic();
        this.getProfile();
        this.props.handleNope();
        // snap.play()
        console.log('nope')
    }

     async getProfile(){
        await fetch("https://randomuser.me/api/")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            const name = data.results[0].name.first;
            const city = data.results[0].location.city;
            const age = data.results[0].dob.age;
            // profiles.push(newProfile);
            this.setState({
                name: this.state.profile.name,
                city: this.state.profile.city,
                age: this.state.profile.age
            }, () => {
                console.log(this.state.profile)
            })
            console.log(name, city, age);
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
            console.log(data)
            const picture = data[parseInt(Math.floor(Math.random() * Math.floor(30)))].download_url;
            // profiles.push(newProfile);
            this.setState({
                picture: this.state.profile.picture
            }, () => {
                console.log(this.state.profile)
            })
            console.log(picture)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <h4>Dating Card goes here</h4>
                <div>
                    <button onClick={this.handleYepClick}>Yep</button>
                    <button onClick={this.handleNopeClick}>Nope</button>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Card;