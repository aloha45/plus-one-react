import React from 'react';
import './SwipingPageGuest.css'
import MatchesPageGuest from '../../components/MatchesGuest/MatchesGuest';
import Card from '../../components/Card/Card';

const SwipingPageGuest = (props) => {

    return ( 
        <React.Fragment>
            <Card 
                handleYep={props.handleYep}
                handleNope={props.handleNope}/>
            <p className="guest-matches">Guest Matches</p>
            <MatchesPageGuest 
                guest={props.guest}/>
        </React.Fragment>
     );
}
 
export default SwipingPageGuest;
