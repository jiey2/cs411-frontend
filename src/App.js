import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import SearchPage from './SearchPage';
import Arbitrage from './Arbitrage';
import Lowestprice from './Lowestprice';
import NoMatch from './NoMatch';
import ItemDetails from './ItemDetails';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/search' component={SearchPage}/>
              <Route path='/about' component={About} />
              <Route path='/arbitrage' component={Arbitrage} />
              <Route path='/lowestprice' component={Lowestprice} />
              <Route path='/item/:name' component={ItemDetails}/>
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}


export default App;
