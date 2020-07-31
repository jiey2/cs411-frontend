import React, { Component } from 'react';
import { Nav, NavBar, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #26;
    }

    .navbar-brand {
        color: #333333;
        font-size: 1.5em;
        font-weight: bold;
        margin: 1em;


        &:hover {
            color: #7D4CDB;
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
                <Navbar.Brand href='/'>996 @ CS411</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/search">Search</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/arbitrage">Arbitrage Table</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/lowestprice">Find Lowest Price</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );

}