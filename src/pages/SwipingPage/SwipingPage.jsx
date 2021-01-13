import React, { Component } from 'react';
import Card from '../../components/Card/Card'

const SwipingPage = (props) => {

    return ( 
        <React.Fragment>
            <h1>Swiping Page</h1>
            <Card 
                handleYep={props.handleYep}
                handleNope={props.handleNope}/>
        </React.Fragment>
     );
}
 
export default SwipingPage;
