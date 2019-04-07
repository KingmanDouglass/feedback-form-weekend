import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Feelings from '../Feelings/Feelings.js';
import Understanding from '../Understanding/Understanding.js';
import Supported from '../Supported/Supported.js';
import Comments from '../Comments/Comments.js';
import Submit from '../Submit/Submit.js';
import Final from '../Final/Final.js';
import ThankYou from '../ThankYou/ThankYou.js';
import Admin from '../Admin/Admin.js';
import Home from '../Home/Home.js';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/feelings" component={Feelings} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/supported" component={Supported} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/final" component={Final} />
        <Route exact path="/thankyou" component={ThankYou} />
        <Route exact path="/admin" component={Admin} />
      </div>
    </Router>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
