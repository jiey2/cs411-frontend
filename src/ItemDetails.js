import React, { Component, useEffect } from 'react';
import { Image, Container } from 'react-bootstrap'
import { Rate, Statistic, Row, Col, Card } from 'antd';
import { HeartOutlined, ArrowUpOutlined, ArrowDownOutlined, HeartFilled } from '@ant-design/icons';
import styled from 'styled-components';
import ReactDOM from 'react-dom'; 

import Comments from './components/Comments';
import Recommendations from './components/Recommendations';

const StyleIcon = styled(Image)`
    width: 300px;
    margin: auto;
    border: solid blue line;

`;


class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            itemDetails: null,
            itemName: null,
            like: 0,
            ItemComments: null,
        }
        this.rerenderCallback = this.rerenderCallback.bind(this);
    }

    rerenderCallback() {
        this.forceUpdate()
        window.location.reload();
        console.log("Force Update")
    }

    async setRating(myRate) {
        this.state.like += myRate;
        console.log([this.state.itemName, myRate])
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            
            },
            body: JSON.stringify({
                ItemName: this.state.itemName,
                Like: myRate
            })
        };
        const url = "http://api.996.com.de/item/rate";
        const response = await fetch(url, requestOptions);
        console.log(response);

        let mountNode = document.getElementById('ratings');
        ReactDOM.render(
            <Col>
                <Statistic id="likenum" title='Like' value={this.state.like} />
                <Rate
                    character={< HeartFilled /> }
                    value={myRate}
                    disabled={true}
                    count={1}
                />
            </Col>, mountNode
        );


    }

    async componentDidMount() {
        const itemName = this.props.match.params.name;
        const url = `http://api.996.com.de/item/${encodeURIComponent(itemName)}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // console.log(data.data[0][2]);
        this.setState({ itemDetails: data });
        this.setState({ itemName: data.data[0][0], like: data.data[0][4] })
        this.setState({ ItemComments: data.comments })
        this.setState({ loading: false });
        
    }

    render() {
        if (this.state.loading == true) {
            return (
                <div>
                    <h2>Item Details</h2>
                    <h1>Loading...</h1>
                </div>
            );
        } else {
            return (
                <Container>
                    <h2>Item Details</h2>

                    <Row>
                        <Col span={12}>
                            <StyleIcon src={this.state.itemDetails.data[0][2]}></StyleIcon>
                            <h4>{this.state.itemDetails.data[0][0]}</h4>
                            <h6>{this.state.itemDetails.data[0][3]}</h6>
                        </Col>
                        <Col>
                            <Row gutter={16}>
                            <Col id='ratings'>
                            <Statistic id="likenum" title='Like' value={this.state.like} />
                            <Rate
                                character={<HeartFilled />}
                                onChange={(myRate) => this.setRating(myRate)}
                                count={1}
                            />
                            </Col>
                            </Row>
                            <br/>
                            <Row gutter={16}>
                                <div className="site-statistic-demo-card">
                                    <Row gutter={16}>
                                        <Col>
                                            <Card>
                                                <Statistic
                                                    title="24H CHANGE "
                                                    value={11.28}
                                                    precision={2}
                                                    valueStyle={{ color: '#3f8600' }}
                                                    prefix={<ArrowUpOutlined />}
                                                    suffix="%"
                                                />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Statistic
                                                    title="7DAY CHANGE"
                                                    value={9.3}
                                                    precision={2}
                                                    valueStyle={{ color: '#cf1322' }}
                                                    prefix={<ArrowDownOutlined />}
                                                    suffix="%"
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    
                    <Row>
                    </Row>
                    <hr />
                    <Recommendations recomList={this.state.itemDetails.recommendations} />
                    <h2> Comments </h2>
                    <Comments rerenderCallback={this.rerenderCallback} ItemName={this.state.itemName} Comments={this.state.ItemComments}/>
                </Container>
            );
        }

    }
}

export default ItemDetails;

