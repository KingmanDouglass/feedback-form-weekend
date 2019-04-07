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
        <Route path="/feelings" component={Feelings} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/supported" component={Supported} />
        <Route path="/comments" component={Comments} />
        <Route path="/submit" component={Submit} />
        <Route path="/final" component={Final} />
        <Route path="/thankyou" component={ThankYou} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
