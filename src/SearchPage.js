import React, { Component } from 'react';
import { Input, Alert, Result  } from 'antd';
import ReactDOM from 'react-dom';

const { Search } = Input;

class SearchPage extends Component {
    state = { 

    }

    async serachItem( input ) {
        let errorMsgMountNode = document.getElementById('searchMsg');

        console.log(input);
        const url = `http://api.996.com.de/item/${encodeURIComponent(input)}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.found === true) {
            this.setState({ itemDetails: data });
            this.props.history.push(`/item/${encodeURIComponent(input)}`)
        } else {
            ReactDOM.render(
                <>
                <Alert message="❌  Not Found" type="error"></Alert>
                <Result
                    status="404"
                    title="Not found"
                    subTitle="Sorry, the item you searched does not exist."
                />
                </>,
                errorMsgMountNode,
            );
        }
    }


    render() { 
        return (
            <div>
            <h2>Search</h2>
            <div id='searchMsg'/>
            <Search
                placeholder="input your item name"
                style={{ width: 200 }}
                onSearch={(val) => this.serachItem(val)}

            />
            <br/>
            <h7>
                Note: Vanilla search function. Only return with exact name match. For example, "AWP | Safari Mesh (Field-Tested)".
            </h7>
            </div>


        );
    }
}
 
export default SearchPage;