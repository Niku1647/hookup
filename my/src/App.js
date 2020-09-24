import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Signin from './components/signin'
import Signup from './components/signup'
import Nav from './components/nav'
 
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Route  exact path='/signin' component={Signin} />
      <Route  exact path='/signup' component={Signup} />

      </BrowserRouter>

      
    </div>
  );
}

export default App;
