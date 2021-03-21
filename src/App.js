import Header from './header';
import { Provider } from 'react-redux';
import store from './store';
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Blog, About, Article } from './pages';
import {Container, Row, Col} from 'react-bootstrap';
import PersonCard from './personcard';

function NotFoundPage() {
    return (
        <div>
            Page Not Found
        </div>
    );
}

function App() {
    const HeaderWithRouter = withRouter(Header);
    return (
      <Provider store={store}>
        <Router>
            <Route path="/">
                <HeaderWithRouter />
                <Container fluid>
                    <Row>
                        <Col style={{"backgroundColor" : "red", "max-width":"330px"}}>
                            <PersonCard/>
                        </Col>
                        <Col style={{"backgroundColor" : "lightpink"}}>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/about" exact component={About} />
                                <Route path="/blog" exact component={Blog} />
                                <Route path="/article/:id" component={Article} />
                                <Route component={NotFoundPage} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Route>
        </Router>
      </Provider>
  );
}

export default App;
