import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import Feelings from '../Feelings/Feelings.js';
import Understanding from '../Understanding/Understanding.js';
import Supported from '../Supported/Supported.js';
import Comments from '../Comments/Comments.js';
import Submit from '../Submit/Submit.js';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
        <Route exact path="/" component={Feelings} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/supported" component={Supported} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/submit" component={Submit} />
      </div>
    </Router>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
