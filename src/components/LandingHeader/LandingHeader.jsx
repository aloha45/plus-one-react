import React from 'react'

function LandingPage(props){
        return ( 
            <React.Fragment>
                <h1>{props.user.name} rules</h1>
            </React.Fragment>
         );
}
 
export default LandingPage;