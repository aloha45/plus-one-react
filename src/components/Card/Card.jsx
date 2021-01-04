import React, { Component } from 'react'
class Card extends Component {
    state = { 
        picture: "",
        name: "",
        city: "",
        age: ""
     }

     handleYepClick = () => {
        const click = new Audio('audio/click.wav');
        this.getProfilePic();
        this.getProfile();
        this.props.handleYep();
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
                console.log(this.state)
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
                console.log(this.state)
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

    // testButton() {
    //     const testState = this.state
    //     console.log(testState)
    // }
    
    render() { 
        return ( 
            <React.Fragment>
                <h4>Dating Card goes here</h4>
                <h4>{this.state.name}</h4>
                <h4>{this.state.age}</h4>
                <h4>{this.state.city}</h4>
                <h4>{this.state.picture}</h4>
                <div>
                    <button onClick={this.handleYepClick}>Yep</button>
                    <button onClick={this.handleNopeClick}>Nope</button>
                    <button onClick={this.testButton}>Test</button>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Card;