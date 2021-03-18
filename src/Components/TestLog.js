import React,{useState} from 'react';



const TestLog = ({apiCall}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    return(
        <div>
            <form>
                <label name="text">Username</label>
                <input type="email" name="text" onChange={e => setUserName(e.target.value)}></input>
                <label name="text">Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} name="password"></input>
                <button onClick={(e) => {
                    e.preventDefault();
                    apiCall({userName, password});
                }} type="submit">Submit</button>
            </form>
        </div>
    );

}


export default TestLog;
