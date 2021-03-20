import React, { useState } from 'react';


const SignUp = () => {


    const [fullname, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

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
            const response = await fetch("https://api-nodejs-todolist.herokuapp.com/user/register", requestOptions)
            const result = await response.json();
            console.log(result)
        } catch (error) {
            console.log(error)

        }




    }





    return (
        <div>
            <div class="signUp">
                <div class="signUp-header">
                    <h1>Create account</h1>
                    <p>Already have an account? <a href="log in.html">Sign in</a></p>
                </div>
                <form action="">
                    <div class="name">
                        <input type="text" placeholder="Full name" onChange={e => setFullName(e.target.value)} ></input>
                        <input type="number" placeholder="Age" onChange={e => setAge(e.target.value)} ></input>
                    </div>
                    <input type="text" placeholder="E-mail Address" onChange={e => setEmail(e.target.value)} ></input>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                    <button onClick={(e) => {
                        e.preventDefault();
                        userRegAPI({ fullname, password, age, email });
                    }} type="sybmit">Sign up</button>
                    <div class="checkbox">
                        <input type="checkbox" />
                        <p>I have read and agree to the <a href="#">Terms of Service</a></p>
                    </div>
                </form>
            </div>

        </div >
    )
}

export default SignUp
