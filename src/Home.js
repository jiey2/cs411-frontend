import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './Home.css';
import logo from './assests/996ICON2.svg';

const StyledTypingEffect = styled.div`
    font-size: 3.5em;
    font-family: sans-serif;
    font-weight: bold;
    margin: auto;
    color: #256;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

`;

const Styles = styled.div`
    .Container {
        position: relative;
    }
`;

const ExplainText = styled.h2`
    margin: 0em;
    width: 100%;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 1.7em;
    text-align: center;
    color: #256;
`;

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Styles>
                        <Row>
                            <Col>
                                <StyledTypingEffect>
                                    <ReactTypingEffect
                                        staticText={"We help you find"}
                                        text={["the lowest price of the CS:GO skin you want.",
                                            "arbitrage opportunities. ",
                                            "the right exchange with the highest profit.",
                                        ]
                                        }
                                        speed={80}
                                        eraseDelay={1000}
                                        typingDelay={1000}
                                    />
                                </StyledTypingEffect>
                            </Col>
                            <Col>
                                <img
                                    width={640}
                                    height={640}
                                    src={logo}
                                    alt="logo"
                                />
                            </Col>
                        </Row>
                    </Styles>
                </Container>
                <Container>


                    <Row>
                        <ExplainText>A market data collection site of <a href="https://steamcommunity.com/market/" class="text-success" color={"#256"}>tradeable game assets</a>. Track, Record, Compare.</ExplainText>
                    </Row>
                    <Row>
                        <Col style={{ margin: 'auto', textAlign: "center", padding: '10px' }}>
                            <Button type="primary" href="/search" size='large' shape='block'> <text>Check an item</text></Button>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <ReactPlayer url='https://youtu.be/RHC-uGDbu7s' style={{ margin: 'auto', padding: '20px' }} />
                        </Col>
                    </Row>


                </Container>
            </div>
        );
    }
}

export default Home;
