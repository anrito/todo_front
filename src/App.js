import React, { useState } from 'react';
import Content from './Components/Content';
import Header from './Components/Header';
import Left_bar from './Components/Left_bar';
import TestLog from './Components/TestLog';

function App() {
  const [showCont, setShowCont] = useState(false);
  const [data, setData] = useState({});
  const [log, setLog] = useState(true);
  const apiCall = async ({ userName, password }) => {

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
      const response = await fetch("https://1da313a35bfd.ngrok.io/user/login", requestOptions)
      const result = await response.json();
      console.log(result)
      setData(result.user)
      setShowCont(true);
      setLog(false)
    } catch (error) {
      console.log(error);
    }
  }



  return (

    <div>
      { log && <TestLog apiCall={apiCall} />}
      { showCont && <Header data={data} />}
      <div className="main_body">
        {showCont && <Left_bar />}
        {showCont && <Content />}
      </div>
    </div>
  );
}

export default App;
