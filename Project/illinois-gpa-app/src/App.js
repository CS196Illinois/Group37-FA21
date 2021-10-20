// UofI orange: "#E84A27"
// UofI blue: "#13294B"

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Feedback from './components/Feedback';
import Tool from './components/Tool';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MainMenu from'./components/Menu';

function App() {
    return (
      <div className="App">
        
        {/* Navbar */}
        <AppBar style={{ background: '#E84A27' }}>
          <Toolbar>
            <MainMenu />
            <Typography variant="h6">
              Illinois GPA Wiki
            </Typography>
          </Toolbar>
        </AppBar>
        
        {/* BrowserRouter */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Tool" component={Tool} />
          <Route path="/Feedback" component={Feedback} />
        </Switch>

      </div>
    );
}


export default App;