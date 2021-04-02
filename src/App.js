import Header from './header';
import { Provider } from 'react-redux';
import store from './store';
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { VisitorHome, Blog, About, Article } from './pages';
import {Container, Row, Col} from 'react-bootstrap';
import PersonCard from './personcard';
import Visitor from './Visitor';
import Admin from './Admin';



function App() {
    return (
      <Provider store={store}>
        <Router>
                <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Visitor} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </Router>
      </Provider>
  );
}

export default App;
