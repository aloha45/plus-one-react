import React from 'react';
import Card from '../../components/Card/Card'

const SwipingPage = (props) => {

    return ( 
        <React.Fragment>
            <Card 
                handleYep={props.handleYep}
                handleNope={props.handleNope}/>
        </React.Fragment>
     );
}
 
export default SwipingPage;
