import React from 'react'

import {About,Footer,Skills,Header,Work} from './container';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <About/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;