
import React, { useState } from 'react';
import { Link  } from 'react-router-dom';


const LogIn = ({ apiCall }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    

    return (
        <div>
            <div className="container ">
                <form className="form" id="form">
                    <h1>Sign In</h1>

                    <div className="form-control ">
                        <input type="text" id="email" placeholder="Email Address" onChange={e => setUserName(e.target.value)}></input>
                        <small>Error message</small>
                    </div>

                    <div className="form-control ">
                        <input type="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                        <i className="far fa-eye" id="togglePassword"></i>
                        <small>Error message</small>
                    </div>

                    <div className="login-btn">
                        <button onClick={(e) => {
                            e.preventDefault();
                            apiCall({ userName, password });
                        }} type="submit" className="btn btn-full log-in" href="#" >Sign in</button>
                        
                            <Link to="/signup" className="btn sign-up">Sign up</Link>
                    </div>


                </form>
            </div>

        </div>
    )
}

export default LogIn;
