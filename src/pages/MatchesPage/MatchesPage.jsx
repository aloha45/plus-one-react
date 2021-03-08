import React from 'react';
import './MatchesPage.css'

const MatchesPage = (props) => {
    if (props.user) return ( 
        <>
            {/* <p className="matchTitle">Click on a match to message them!</p> */}
            <main>
                <div className="container">
                    {props.user.yepArr.map(p =>
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
 
export default MatchesPage;