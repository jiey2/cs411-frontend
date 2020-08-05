import React, { Component, Row, Col } from 'react';
import { Typography, Divider } from 'antd';
import ReactPlayer from 'react-player/youtube';

const { Title, Paragraph, Text } = Typography;

class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <Typography>
                    <Title level={4}>Introduction</Title>

                    <Paragraph>
                        In this course project, we developed an one-stop price comparing application, through which users could easily find CS:GO item price on three common CS:GO exchange platforms (i.e. Steam, BitSkins and WAXPEER). The developed application, equipped with automatic fetching technique, can offer users the newest item price information. Thus, buyers or sellers can obtain the precise market price of specific items through our application instead of checking the price on the three websites manually one by one. Benefited from this, sellers can determine their selling price and buyers can know the good places to purchase items based on market price provided by this application. Moreover, our application will summarize the price changes in either 24 hours or 7 days to reveal price trends. Visitors are also allowed to leave comments or click “like” on a specific item, and such information will be displayed on the item page to offer guidance for other viewers.


                    </Paragraph>
                    
                    <Title level={4}>Application Functionality</Title>
                    <Paragraph>
                        Clearly list the functionality of your application (feature specs)
                        Explain one basic function
                        Show the actual SQL code snippet
                        List and briefly explain the dataflow, i.e. the steps that occur between a user entering the data on the screen and the output that occurs (you can insert a set of screenshots)

                        Basically, the developed application can offer users functions as follows:
                        Search for item price
                        Insert/delete comments on items
                        Label “likes” on items
                        Display item price fluctuation in 24 hours or 7 days
                        Recommend similar items user may like
                        Data automatic fetching every hour
                        For example, when a user would like to search for the price information of the item through our application. He/She can type in the item name and click search button as shown in the figure 1, then it will jump to the item page to display all the information including price on the three websites, price fluctuation, number of “likes”, recommendations and comments. To achieve the search function, we used Python language and MySQL commands to extract corresponding information from MySQL database as shown in the Figure 3. In such searching process, frontend will send user request, which is an item name, to our server.  Then the server will query the MySQL database to obtain all the information related to the item, price on Steam for example, and return them back to the frontend in JSON format after some calculations like price change rate in 24 hours are finished. Finally, the frontend will render the page to display some results for the searched item.

                    </Paragraph>
                    <ReactPlayer url='https://youtu.be/RHC-uGDbu7s' style={{ margin: 'auto', padding: '20px' }} />

                    <Title level={4}>Description</Title>
                    <Paragraph>
                        Item exchange is common throughout online games and there are several platform operating Business-to-Customer or Customer-to-Customer exchanges. Therefore, there might exist price differences on the same item because the item can come from different sources (different sellers) on different platforms. When a user would like to purchase an item, it could be not convenient to look for the cheapest one through all different platforms. In this project, we plan to develop a self-renewed price comparing database on game items, CS:GO OUTLETS, to help buyers to find the best place to make a deal, and also provide market arbitrageurs with some price reference to maximize their margins. Due to the time and effort constraints, market data now only supports CS:GO items. CS:GO items markets are known for its high liquidity and wide varieties. More than 10,000 items are actively trading at multiple exchanges 7 days a week by buyers and sellers across the globe. A good database implementation would be very beneficial in handling this kind of rapid changing data with a massive size. 
                         
                    </Paragraph>

                    <Title level={4}>Usefulness</Title>
                    <Paragraph>
                        CS:GO OUTLETS is designed to help sellers and buyers collect price information from several common exchange platforms, and with capacity of automatically renewing sellers and buyers can easily know the current market price across different platforms, instead of searching through multiple platforms by himself/herself. There do exists similar website, CS:GO Stash, which collects price information from Steam and BitSkins. What make the CS:GO OUTLETS competitive is that it can acquire price from two more common platforms and insert new price into current database so that it is possible to analyze item price trends to help sellers and buyers make decisions.

                    </Paragraph>

                    <Title level={4}>Realness</Title>
                    <Paragraph>
                        All data will be used in this project is collected from three common game item exchange platforms: Steam Community Market, Buff, Bitskins and Waxpeer ( Steam community market is the official market affiliated with the Valve corporation which is the developer of CS:GO, while Buff, Bitskins and waxpeer are third parties trading sites that resemble an OTC market structure.). Therefore, this database will be realistic and applicable in real cases.

                    </Paragraph>





                </Typography>

                

            </div >

        );
    }
}

export default About;