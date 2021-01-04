import React, { Component } from 'react';
import './GreetingPage.css'

function GreetingPage (props) {
        return ( 
            <React.Fragment>
                <div className='greetingPage'>
                    <div className='greetingTitle'>
                        <h1>Welcome to Plus One.</h1>
                        <a href='/login'>
                            Click here to Log In to Plus One.
                        </a>
                        <br></br>
                        <a href='/signup'>
                            Join Plus One.
                        </a>
                    </div>
                </div>
            </React.Fragment>
         );
        }
 
export default GreetingPage;