import {Switch, Route} from 'react-router-dom';
import HomepageComponent from "./page/Homepage/HomepageComponent.jsx";
import Product from './components/ProductComponent/product.jsx';

function App() {
 
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomepageComponent} />
        <Route path="/hats" component={Product} />
        <Route path="/jackets" component={Product} />
        <Route path="/sneakers" component={Product} />
        <Route path="/womens" component={Product} />
        <Route path="/mens" component={Product} />
    </Switch>
    </div>
  );
}

export default App;
