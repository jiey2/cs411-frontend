import React, { Component, useEffect } from 'react';
import { Image, Container } from 'react-bootstrap'
import { Rate, Statistic, Row, Col } from 'antd';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import styled from 'styled-components';

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
        }
    }

    async setRating(myRate) {
        this.state.like += myRate;
        console.log([this.state.itemName,myRate])
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                ItemName: this.state.itemName,
                Like: myRate
            })
        }; 
        const url = "http://api.996.com.de/item/rate";
        const response = await fetch(url, requestOptions);
        console.log(response);
    }

    async componentDidMount() {
        const itemName = this.props.match.params.name;
        const url = `http://api.996.com.de/item/${encodeURIComponent(itemName)}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // console.log(data.data[0][2]);
        this.setState({ itemDetails: data });
        this.setState({ itemName: data.data[0][0], like: data.data[0][4]})
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
                            <Statistic id="likenum" title='Like' value={this.state.like} />
                            <Rate
                                character={<HeartOutlined />}
                                onChange={(myRate) => this.setRating(myRate)}
                                allowClear={false}
                            />
                        </Col>
                    </Row>
                    <hr />
                </Container>
            );
        }

    }
}

export default ItemDetails;

