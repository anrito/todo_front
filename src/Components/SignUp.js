import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {


    const [fullname, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const userRegAPI = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": fullname,
            "email": email,
            "password": password,
            "age": age,
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            if((fullname && age && password && email) !== ''){
                const response = await fetch("https://api-nodejs-todolist.herokuapp.com/user/register", requestOptions)
                const result = await response.json();
                console.log(result)
                setToken(result.token);
                
            }else {
                alert('Fill Fields!!');
            }
            if(token !== '') {
                alert("Registration successful, Please Sign In");
            }

        } catch (error) {
            console.log(error)

        }




    }





    return (
        <div>
            <div className="signUp">
                <div className="signUp-header">
                    <h1>Create account</h1>
                    <p>Already have an account? <a href="login.html">Sign in</a></p>
                </div>
                <form >
                    <div className="name">
                        <input type="text" placeholder="Full name" onChange={e => setFullName(e.target.value)} ></input>
                        <input type="number" placeholder="Age" onChange={e => setAge(e.target.value)} ></input>
                    </div>
                    <input type="text" placeholder="E-mail Address" onChange={e => setEmail(e.target.value)} ></input>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                    
                    <button onClick={(e) => {
                        e.preventDefault();
                        userRegAPI({ fullname, password, age, email });
                    }} type="sybmit">Sign up</button>


                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>I have read and agree to the <a href="#">Terms of Service</a></p>
                    </div>

                    <Link to="/">Go Back</Link>
                </form>
            </div>

        </div >
    )
}

export default SignUp
