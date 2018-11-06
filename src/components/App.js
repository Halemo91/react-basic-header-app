import React, { Component } from 'react';
import '../styling/App.css';

import {Header}  from "./Header";
import { Home}  from "./Home";

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                  <Header/>
              </div>
          </div>
          App
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                  <Home/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
