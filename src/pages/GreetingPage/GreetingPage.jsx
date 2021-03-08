import React from 'react';
import './GreetingPage.css'

function GreetingPage (props) {
        return ( 
            <React.Fragment>
                <div className='greetingPage'>
                    <div className='greetingTitle'>
                        <h1>Welcome to Plus One.</h1>
                        <div className="greeting-choices">
                        <a href='/login'>
                            Click here to Log In to Plus One.
                        </a>
                        <a href='/signup'>
                            Join Plus One.
                        </a>
                        <a href='/guest'>
                            Swipe as a guest.
                        </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
        }
 
export default GreetingPage;