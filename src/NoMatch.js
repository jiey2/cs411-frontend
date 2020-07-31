import React, { Component } from 'react';
import styled from 'styled-components';
const bigmid = styled.h1`
    color: #265
    font-size: 25rem
    `
;

class NoMatch extends Component {

    render() { 
        return (
            <div>
                <bigmid>
                404
                </bigmid>
            </div>
        );
    }
}
 
export default NoMatch;