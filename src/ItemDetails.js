import React, { Component } from 'react';
import { Image, Container } from 'react-bootstrap'
import { Rate, Statistic, Row, Col, Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, HeartFilled } from '@ant-design/icons';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

import Comments from './components/Comments';
import Recommendations from './components/Recommendations';
import PriceStat from './components/PriceStat';

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
            avgweekprice: null,
            avgmonthprice: null,
            steamprice: null,
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
        const url = "https://api.996.com.de/item/rate";
        const response = await fetch(url, requestOptions);
        console.log(response);

        let mountNode = document.getElementById('ratings');
        ReactDOM.render(
            <Col>
                <Statistic id="likenum" title='Like' value={this.state.like} />
                <Rate
                    character={< HeartFilled />}
                    value={myRate}
                    disabled={true}
                    count={1}
                />
            </Col>, mountNode
        );
    }



    async componentDidMount() {
        const itemName = this.props.match.params.name;
        const url = `https://api.996.com.de/item/${encodeURIComponent(itemName)}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // console.log(data.data[0][2]);
        this.setState({ itemDetails: data });
        this.setState({ itemName: data.data[0][0], like: data.data[0][4] })
        this.setState({ ItemComments: data.comments })
        this.setState({ loading: false });
        this.setState({ steamprice: data.statistics[0].SteamPrice})

        this.setState({ avgweekprice: data.statistics[0].AvgWeekPrice })
        this.setState({ avgmonthprice: data.statistics[0].AvgMonthPrice })
    }

    render() {
        
        let weekmove = (this.state.steamprice - this.state.avgweekprice) / (this.state.avgweekprice) * 100 
        let monthmove = (this.state.steamprice - this.state.avgmonthprice) / (this.state.avgmonthprice) * 100
        let weekincrease = false;
        let monthincrease = false;
        if (weekmove > 0) {
            weekincrease = true
        } else {
            weekincrease = false
        }

        if (monthmove > 0) {
            monthincrease = true
        } else {
            monthincrease = false
        }
        console.log(weekmove,monthmove)

        if (this.state.loading === true) {
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
                            <br />
                            <Row gutter={16}>
                                <div className="site-statistic-demo-card">
                                    <Row gutter={16}>
                                        <Col>
                                            <Card>
                                                <Statistic
                                                    title="7Day Change "
                                                    value={weekmove}
                                                    precision={2}
                                                    valueStyle={weekincrease ? { color: '#3f8600' } : { color: '#cf1322'}}
                                                    prefix={weekincrease ? < ArrowUpOutlined />: <ArrowDownOutlined />}
                                                    suffix="%"
                                                />
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Statistic
                                                    title="30Day Change"
                                                    value={monthmove}
                                                    precision={2}
                                                    valueStyle={monthincrease ? { color: '#3f8600' } : { color: '#cf1322' }}
                                                    prefix={monthincrease ? < ArrowUpOutlined /> : <ArrowDownOutlined />}
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
                    <PriceStat ItemStat={this.state.itemDetails.statistics} />
                    <hr />
                    <Recommendations recomList={this.state.itemDetails.recommendations} />
                    <h2> Comments </h2>
                    <Comments rerenderCallback={this.rerenderCallback} ItemName={this.state.itemName} Comments={this.state.ItemComments} />
                </Container>
            );
        }

    }
}

export default ItemDetails;

