import {Switch, Route} from 'react-router-dom';
import HomepageComponent from "./page/Homepage/HomepageComponent.jsx";
import ShopPage from './page/ShopPage/ShopPageComponent.jsx';

function App() {
 
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomepageComponent} />
        <Route path="/shop" exact component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
