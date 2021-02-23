import Layout from './components/Layout';
import Page404 from './pages/404';
import Login from './pages/Login';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/404" component={Page404} />
       <Route path="/login" component={Login} />
       <Route path="/" component={Layout} />
     </Switch>
    </div>
  );
}

export default App;
