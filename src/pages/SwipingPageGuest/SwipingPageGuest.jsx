import React from 'react';
import MatchesPageGuest from '../MatchesPageGuest/MatchesPageGuest'
import Card from '../../components/Card/Card'

const SwipingPageGuest = (props) => {

    return ( 
        <React.Fragment>
            <Card 
                handleYep={props.handleYep}
                handleNope={props.handleNope}/>
            <MatchesPageGuest 
                guest={props.guest}/>
        </React.Fragment>
     );
}
 
export default SwipingPageGuest;
