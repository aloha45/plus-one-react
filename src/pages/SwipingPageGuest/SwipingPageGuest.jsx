import React from 'react';
import Card from '../../components/Card/Card'

const SwipingPageGuest = (props) => {

    return ( 
        <React.Fragment>
            <h1>Swiping Page Guest</h1>
            <Card 
                handleYep={props.handleYep}
                handleNope={props.handleNope}/>
            <a href="/matches-guest">See Guest Matches</a>
        </React.Fragment>
     );
}
 
export default SwipingPageGuest;
