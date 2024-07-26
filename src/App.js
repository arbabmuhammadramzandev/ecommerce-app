import {Switch, Route} from 'react-router-dom';
import HomepageComponent from "./page/Homepage/HomepageComponent.jsx";
import ShopPage from './page/ShopPage/ShopPageComponent.jsx';
import Header from './components/HeaderComponent/HeaderComponent.jsx';
import SignInComponent from './page/SignIn/SignInComponent.jsx';

function App() {
 
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomepageComponent} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInComponent} />
    </Switch>
    </div>
  );
}

export default App;
