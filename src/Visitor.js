import Header from './header';
import { Provider } from 'react-redux';
import store from './store';
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Blog, About, Article } from './pages';
import { Container, Row, Col } from 'react-bootstrap';
import PersonCard from './personcard';

function NotFoundPage() {
    return (
        <div>
            Page Not Found
        </div>
    );
}

function Visitor() {
    const HeaderWithRouter = withRouter(Header);
    return (
        <Router>
            <HeaderWithRouter />
            <Container fluid>
                <Row>
                    <Col style={{ "backgroundColor": "white", "maxWidth": "330px" }}>
                        <PersonCard />
                    </Col>
                    <Col style={{ "backgroundColor": "white" }}>
                        <Switch>
                            <Route path="/home" exact component={Home} />
                            <Route path="/home/about" exact component={About} />
                            <Route path="/home/blog" exact component={Blog} />
                            <Route path="/home/article/:id" component={Article} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default Visitor;
