import React, { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home'
import { connect } from 'react-redux'
import { auth } from './utils/firebase'
import { setUser, setLogin } from './actions/index'


function App(props) {

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        props.setUser(user);
        props.setLogin(true);
      }
    });
  }, [])
  


  return (
    <div className="App">
      <Home/>
    </div>
  );
}

const mapDispatchToProps = {
  setLogin,
  setUser,
}

export default connect(null, mapDispatchToProps)(App);