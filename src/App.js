import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomepageComponent from "./page/Homepage/HomepageComponent.jsx";
import ShopPage from './page/ShopPage/ShopPageComponent.jsx';
import Header from './components/HeaderComponent/HeaderComponent.jsx';
import SignInSignUpComponent from './page/Signin&Signup/SigninSignupComponent.jsx';
import {auth,onAuthStateChanged} from './firebase/firebase.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : JSON.parse(localStorage.getItem('user')) || null,
    }
  }

 handleLogout = () => {
    this.setState({currentUser : null})
    localStorage.removeItem('user')
 }
    render(){
      const {currentUser} = this.state;
      return (
        <div>
          <Header currentUser={currentUser} handleLogout={this.handleLogout} />
          <Switch>
            <Route path="/" exact component={HomepageComponent} />
            <Route path="/shop" component={ShopPage} />
           <Route path="/signin" component={SignInSignUpComponent} />
        </Switch>
        </div>
      );
    }
}

export default App;
