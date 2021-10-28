import './content.css';
import RegisterForm from './RegisterForm';
import React from 'react';

const Content = (props: any) => {
    
    return (
        <div>
            <div className="hero-image">
                <div className="hero-content">
                <h1>Tiersitter!</h1>
                <button className="registerButton" onClick={() => 
                {
                    
                    return RegisterForm
                }} >Registrieren</button>
                <button className="loginButton">Login</button>
            </div>
        </div>
    </div>
    )
}

export default Content
