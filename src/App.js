import React, { Component } from 'react';
import './app.css'
import Header from './components/Header/Header'
import BooksList from './components/BooksList/BooksList'
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyProfile from './components/MyProfile/MyProfile';
import SignIn from './components/SignIn/SignIn';

class App extends Component {
  render(){
  return (
    <Router>
    <div>
      <Header/>
      <BooksList/>
            {/* <Route exact path={"/"} component={BooksList} /> */}
            <Switch>
            <Route path="/myProfile" component={MyProfile} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}
}
export default App;
