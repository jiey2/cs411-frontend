import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import fonts
// import './fonts/AirbnbCerealMedium.ttf'
// import './fonts/AirbnbCerealLight.ttf'
// import './fonts/AirbnbCerealExtraBold.ttf'
// import './fonts/AirbnbCerealBook.ttf'
// import './fonts/AirbnbCerealBold.ttf'
// import './fonts/AirbnbCerealBlack.ttf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
