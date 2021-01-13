import React from 'react';

const ProfilePage = (props) => {
    return ( 
        <React.Fragment>
            <h1>Hey, check it out: {props.user.name}'s profile page.</h1>
            <p>A match component goes here</p>
        </React.Fragment>
     );
}
 
export default ProfilePage;
