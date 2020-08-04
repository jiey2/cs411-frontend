import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background-color: #26;
    }

    .navbar-brand {
        color: #333333;
        font-size: 1.5em;
        font-weight: bold;
        font-family: 
        margin: 1em;


        &:hover {
            color: #257;
        }

    }
    
    .navbar-nav, .nav-link {
        color: #333333;
        font-size: 1em;
    }
`;

export const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expand='lg'>
                <Navbar.Brand href='/'>
                    996 @ CS411
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/arbitrage">Arbitrage Table</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/search">Search</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="https://wiki.illinois.edu/wiki/display/CS411SU20/Overview">CS411 </Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );

}