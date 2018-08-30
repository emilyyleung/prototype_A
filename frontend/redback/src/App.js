import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import './App.css';
import 'antd/dist/antd.css';

import BaseLayout from './layouts/Base';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <BaseLayout>
            <BaseRouter />
          </BaseLayout>
        </Router>
      </div>
    );
  }
}

export default App;
