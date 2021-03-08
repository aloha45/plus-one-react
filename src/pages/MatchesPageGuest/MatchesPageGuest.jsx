import React from 'react';
import './MatchesPageGuest.css'

const MatchesPageGuest = (props) => {
    if (props.guest) return ( 
        <>
            {/* <p className="matchTitle">Click on a match to message them!</p> */}
            <main>
                <div className="container">
                    {props.guest.yepArr.map(p =>
                    <>
                    <div className="matchCard">
                        <img src={p.picture}></img>
                        <p>{p.name}</p>
                    </div>
                    </>
                    )}
                </div>
            </main>
        </>
     )
    return <p className="matchTitle">Go swipe to make some matches!</p>;
}
 
export default MatchesPageGuest;