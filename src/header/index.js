import React, {PureComponent } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';


class Header extends PureComponent{
    render(){
        const {location} = this.props;
        return (
            <div>
                <Navbar bg="info" variant="dark">
                    <a className="icon iconfont" 
                        style={{"float":"left", 
                                "fontSize":'25px', 
                                'textDecoration':'none',
                                'marginRight':'40px',
                            }}
                        href="/"
                        >
                        &#xe6d1;
                    </a>
                    <Nav
                        className="justify-content-center"
                        activeKey={location.pathname}
                        onSelect = {()=>{}}
                        >
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/home/blog">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/home/about">About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);