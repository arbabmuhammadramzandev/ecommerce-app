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
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
   this.unsubscribeFromAuth =  onAuthStateChanged(auth, (user) => {
      this.setState({currentUser : user});
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
    render(){
      const {currentUser} = this.state;
      return (
        <div>
          <Header currentUser={currentUser} />
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
