import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';


const { Meta } = Card;

class Recommendations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recomList: this.props.recomList
        }
    }


    render() {
        return (

            <div className="site-card-border-less-wrapper">
                <h2> You may also like </h2>
                <Row gutter={16} justify="space-around">
                    <Col span={4}>
                        <Link to={`/item/${encodeURIComponent(this.state.recomList[0].ItemName)}`} >
                                <Card
                                    hoverable
                                    width={1}
                                    cover={<img alt="icon" src={this.state.recomList[0].IconURL} />}
                                >

                                    <Meta description={this.state.recomList[0].ItemName} title={"$ " + this.state.recomList[0].SteamPrice} />
                                </Card>
                            </Link>

                    </Col>
                    <Col span={4}>
                        <Card
                            hoverable
                            width={1}
                            cover={<img alt="icon" src={this.state.recomList[1].IconURL} />}
                        >
                            <Meta description={this.state.recomList[1].ItemName} title={"$ " + this.state.recomList[1].SteamPrice} />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            hoverable
                            width={1}
                            cover={<img alt="icon" src={this.state.recomList[2].IconURL} />}
                        >
                            <Meta description={this.state.recomList[2].ItemName} title={"$ " + this.state.recomList[2].SteamPrice} />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            hoverable
                            width={1}
                            cover={<img alt="icon" src={this.state.recomList[3].IconURL} />}
                        >
                            <Meta description={this.state.recomList[3].ItemName} title={"$ " + this.state.recomList[3].SteamPrice} />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            hoverable
                            width={1}
                            cover={<img alt="icon" src={this.state.recomList[4].IconURL} />}
                        >
                            <Meta description={this.state.recomList[4].ItemName} title={"$ " + this.state.recomList[4].SteamPrice} />
                        </Card>
                    </Col>
                </Row>
                <br />
            </div>

        );
    }
}

export default Recommendations;