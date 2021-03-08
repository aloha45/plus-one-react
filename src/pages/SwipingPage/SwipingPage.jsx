import React from 'react';
import Card from '../../components/Card/Card'

const SwipingPage = (props) => {

    return ( 
        <React.Fragment>
            <h1>Swiping Page</h1>
            <Card 
                handleYep={props.handleYep}
                handleNope={props.handleNope}/>
            <a href="www.google.com">Google</a>
        </React.Fragment>
     );
}
 
export default SwipingPage;
