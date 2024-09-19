import React, { useContext } from 'react';
import {Switch, Route} from 'react-router-dom';
import HomepageComponent from "./page/Homepage/HomepageComponent.jsx";
import ShopPage from './page/ShopPage/ShopPageComponent.jsx';
import Header from './components/HeaderComponent/HeaderComponent.jsx';
import SignInSignUpComponent from './page/Signin&Signup/SigninSignupComponent.jsx';
// import {auth,onAuthStateChanged} from './firebase/firebase.js'
import AuthProvider from './context/contextApi.js'
import {AuthContext} from './context/contextApi.js'
import styled, {ThemeProvider} from 'styled-components';

import { DarkTheme, LightTheme } from './theme.js';

const App = () => {
  const [theme, setTheme] = React.useState(LightTheme);
  const user = React.useContext(AuthContext);

  const  handleLogout = () => {
    localStorage.removeItem('user');
 }
 const Container = styled.div`
 background: ${props => props.theme.background};
 color: ${props => props.theme.color};
 height: 100vh;
 display: flex;
 align-items: center;
 `;
 const Button = styled.button`
 padding: 10px 20px;
 cursor: pointer;
 `
 const togale = () => setTheme(theme === LightTheme ? DarkTheme : LightTheme)
  return ( 
  <ThemeProvider theme={theme}>
<Container >
  <h1>Helloo</h1>
  <Button onClick={togale}>Dont Click Me</Button>
</Container>
    {/* <AuthProvider>
    <div>
      <Header handleLogout={handleLogout} />
      <Switch>
        <Route path="/" exact component={HomepageComponent} />
        <Route path="/shop" component={ShopPage} />
       <Route path="/signin" component={SignInSignUpComponent} />
    </Switch>
    </div>
    </AuthProvider> */}
  </ThemeProvider>
  
  )
}
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       currentUser : JSON.parse(localStorage.getItem('user')) || null,
//     }
//   }


//     render(){
//       const {currentUser} = this.state;
//       console.log("AuthContext",AuthContext)
//       return (
 
//       );
//     }
// }

export default App;
