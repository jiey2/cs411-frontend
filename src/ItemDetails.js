import React, { Component } from 'react';
import { Image } from 'react-bootstrap'

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            itemDetails: null
        }
    }

    async componentDidMount() {
        const itemName = this.props.match.params.name;
        const url = `http://api.996.com.de/item/${encodeURIComponent(itemName)}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        console.log(data.data[0][2]);
        this.setState({ itemDetails: data });
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
                <div class="ItemDetails">
                    <h2>Item Details</h2>
                    <div class="container">
                        <div class="column">
                            <div class="col-sm">
                                <Image src={this.state.itemDetails.data[0][2]} class="img-thumbnail"></Image>
                            </div>
                            <div class="col-sm">
                                <h4>{this.state.itemDetails.data[0][0]}</h4>
                                <h6>{this.state.itemDetails.data[0][3]}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default ItemDetails;

