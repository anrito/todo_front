import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './Components/Content';
import Header from './Components/Header';
import Left_bar from './Components/Left_bar';
import SignIn from './Components/SignIn';
import Loading from './Components/Loading';
import SignUp from './Components/SignUp';


function App() {
  const [showCont, setShowCont] = useState(false);
  const [data, setData] = useState({});
  const [log, setLog] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  const apiCall = async ({ userName, password }) => {
    setLog(false)
    setIsLoading(true)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": userName,
      "password": password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      if ((userName && password) !== '') {
        const response = await fetch("https://api-nodejs-todolist.herokuapp.com/user/login", requestOptions)
        const result = await response.json();
        console.log(result)
        setData(result.user)
        setShowCont(true);
        setIsLoading(false)
      } else {
        alert('Username or Password is emply')
        setIsLoading(false);
        setLog(true)
      }

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div>
      <Switch>
      <Route path="/signup" component={SignUp}/>
      
      {isLoading && <Loading />}
  
      { log && <SignIn setLog={setLog} apiCall={apiCall} />}

      
      { showCont && <Header data={data} />}
      <div className="main_body">
        {showCont && <Left_bar />}
        {showCont && <Content />}
      </div>
      </Switch>
    </div>
  );
}

export default App;
