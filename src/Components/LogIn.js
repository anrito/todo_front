
import React, { useState } from 'react';


const LogIn = ({ apiCall }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>
            <div class="container ">
                <form class="form" id="form">
                    <h1>Log In</h1>

                    <div class="form-control ">
                        <input type="text" id="email" placeholder="Email Address" onChange={e => setUserName(e.target.value)}></input>
                        <small>Error message</small>
                    </div>

                    <div class="form-control ">
                        <input type="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                        <i class="far fa-eye" id="togglePassword"></i>
                        <small>Error message</small>
                    </div>

                    <div class="login-btn">
                        <button onClick={(e) => {
                            e.preventDefault();
                            apiCall({ userName, password });
                        }} type="submit" class="btn btn-full log-in" href="#" >Log in</button>
                        <a class="btn sign-up" href="#">Sign up</a>
                    </div>


                </form>
            </div>

        </div>
    )
}

export default LogIn
