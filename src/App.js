import React from 'react';
import Content from './Components/Content';
import Header from './Components/Header';
import Left_bar from './Components/Left_bar';

function App() {
  return (
    <div>
      <Header />
      <div class="main_body">
        <Left_bar />
        <Content />
      </div>
    </div>
  );
}

export default App;
