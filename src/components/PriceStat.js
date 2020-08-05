import React, { Component } from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { DollarCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import moment from 'moment';

const Style = styled.div`
    .site-statistic-demo-card {
        background: #ececec;
        padding: 30px;
    }


`;



class PriceStat extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            BitSkinsUpdateTime: this.props.ItemStat[0].BitSkinsUpdateTime,
            BitskinsNum: this.props.ItemStat[0].BitskinsNum,
            BitskinsPrice: this.props.ItemStat[0].BitskinsPrice,
            BuffPrice: this.props.ItemStat[0].BuffPrice,
            BuffNum: this.props.ItemStat[0].BuffNum,
            BuffUpdateTime: this.props.ItemStat[0].BuffUpdateTime,
            WaxpeerPrice: this.props.ItemStat[0].WaxpeerPrice,
            WaxpeerNum: this.props.ItemStat[0].WaxpeerNum,
            WaxpeerUpdateTime: this.props.ItemStat[0].WaxpeerUpdateTime,
            SteamPrice: this.props.ItemStat[0].SteamPrice,
            SteamNum: this.props.ItemStat[0].SteamNum,
            SteamWeekVolume: this.props.ItemStat[0].SteamWeekVolume,
            SteamUpdateTime: this.props.ItemStat[0].SteamUpdateTime
        }
    }
    render() {
        return (
            <Style>
                <div className="site-statistic-demo-card">
                    <Row gutter={30}>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Bitskins"
                                    value={this.state.BitskinsPrice}
                                    precision={2}
                                    valueStyle={{ color: '#256' }}
                                    prefix={< DollarCircleFilled />}
                                    suffix="."

                                />
                                <br/>
                                <Statistic 
                                    title="Available listings"
                                    value={this.state.BitskinsNum}
                                ></Statistic>
                                <br />

                                <h7>Last Update:</h7>
                                <br/>
                                <h7>{moment.unix(this.state.BitSkinsUpdateTime).fromNow()}</h7>
                                


                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Buff"
                                    value={this.state.BuffPrice}
                                    precision={2}
                                    valueStyle={{ color: '#256' }}
                                    prefix={< DollarCircleFilled />}
                                    suffix="."

                                />
                                <br />
                                <Statistic
                                    title="Available listings"
                                    value={this.state.BuffNum}
                                ></Statistic>
                                <br />

                                <h7>Last Update:</h7>
                                <br />
                                <h7>{moment.unix(this.state.BuffUpdateTime).fromNow()}</h7>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Waxpeer"
                                    value={this.state.WaxpeerPrice}
                                    precision={2}
                                    valueStyle={{ color: '#256' }}
                                    prefix={< DollarCircleFilled />}
                                    suffix="."

                                />
                                <br />
                                <Statistic
                                    title="Available listings"
                                    value={this.state.WaxpeerNum}
                                ></Statistic>
                                <br />

                                <h7>Last Update:</h7>
                                <br />
                                <h7>{moment.unix(this.state.WaxpeerUpdateTime).fromNow()}</h7>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card>
                                <Statistic
                                    title="Steam References"
                                    value={this.state.SteamPrice}
                                    precision={2}
                                    valueStyle={{ color: '#256' }}
                                    prefix={< DollarCircleFilled />}
                                    suffix="."

                                />
                                <br />
                                <Statistic
                                    title="Steam Week Volume"
                                    value={this.state.SteamWeekVolume}
                                ></Statistic>
                                <br />

                                <h7>Last Update:</h7>
                                <br />
                                <h7>{moment.unix(this.state.SteamUpdateTime).fromNow()}</h7>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </Style>
        );
    }
}

export default PriceStat;