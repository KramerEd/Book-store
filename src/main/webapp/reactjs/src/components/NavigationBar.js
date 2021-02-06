import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class NavigationBar extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src= "logo.png"/> BookShop
                </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link">Add book</Link>
                    <Link to={"list"} className="nav-link">Book List</Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;