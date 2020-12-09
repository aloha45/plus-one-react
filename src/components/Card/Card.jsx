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
         this.getProfile();
         this.getProfilePic();
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
            console.log(name, city, age)
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
                    <button>Yep</button>
                    <button>Nope</button>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Card;