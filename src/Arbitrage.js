import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Link from 'react-router-dom/Link';

import Spinner from 'react-bootstrap/Spinner';

const TableStyles = styled.div`
    color: #256
`;

class Arbitrage extends Component {
    state = {
        loading: true,
        arbItem: []
    }

    async componentDidMount() {
        const url = "http://api.996.com.de/arbitrage";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ arbItem: data.data });
        this.setState({loading: false})
    }

    renderItem(item, index) {
        // change timestamp to str time
        var timestamp = item.UpdateTime;
        var date = new Date(timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        var formattedTime = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        item.UpdateTime = formattedTime;

        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td><Link to={`/item/${encodeURIComponent(item.ItemName)}`}>{item.ItemName}</Link></td>
                <td>{item.AbsoluteProfit}</td>
                <td>{item.BitskinsNum}</td>
                <td>{item.BitskinsPrice}</td>
                <td>{item.PercentProfit}</td>
                <td>{item.SteamDayVolume}</td>
                <td>{item.SteamPrice}</td>
                <td>{item.SteamWeekVolume}</td>
                <td>{item.UpdateTime}</td>
                <td>{item.WaxpeerNum}</td>
                <td>{item.WaxpeerPrice}</td>
            </tr>
        );


    }

    render() {
        if (this.state.loading == true) {
            return (
                <div className="Arbitrage">
                    <h2>Arbitrage Table  <Spinner animation="grow" variant="primary"/></h2>

                </div>
            );
        } else {
            return (
                <div className='Arbitrage'>
                    <h2>Arbitrage Table</h2>
                    <TableStyles>
                        <Table class="table table-hover text-center">
                            <thead class="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Item Name</th>
                                    <th>Absolute Profit</th>
                                    <th>BitSkins Daily Volume</th>
                                    <th>BitSkins Price</th>
                                    <th>Percent of Profit</th>
                                    <th>Steam Daily Volume</th>
                                    <th>Steam Price</th>
                                    <th>Steam Weekly Volume</th>
                                    <th>Update Time</th>
                                    <th>WAXPEER Volume</th>
                                    <th>WAXPEER Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.arbItem.map(this.renderItem)}
                            </tbody>
                        </Table>
                    </TableStyles>
                </div>
            );
        }



    }
}

export default Arbitrage;
