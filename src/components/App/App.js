import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Feelings from '../Feelings/Feelings.js';
import Understanding from '../Understanding/Understanding.js';
import Supported from '../Supported/Supported.js';
import Comments from '../Comments/Comments.js';
import Final from '../Final/Final.js';
import ThankYou from '../ThankYou/ThankYou.js';
import Admin from '../Admin/Admin.js';
import Home from '../Home/Home.js';
import axios from 'axios';

class App extends Component {
  
  handleSubmit = () => {
    let newFeedback = this.props.reduxState;
    let postFeedback =
    {
        "feeling": `${newFeedback.feelingsReducer}`,
        "understanding": `${newFeedback.understandingReducer}`,
        "support": `${newFeedback.supportedReducer}`,
        "comments": `${newFeedback.commentsReducer}`,
    };


    console.log(`handleSu7bmit before post `, postFeedback);
    
    axios({
        method: 'POST',
        url: '/feedback',
        data: postFeedback,
    }).then((response)=>{
        console.log(`in post `, response);
        // this.history.push('/thankyou')  
    }).catch((error) => {
        alert(`Uh oh, someone didn't use words and/or numbers the correct way...this is why our failing education system in the country is a serious concern!`);
      } )
}

deleteFeedback = (event) => {
  // event.preventDefault();
  let deleteId = event.target.value;
  console.log('delete id is ', deleteId);
  axios({
      method: 'DELETE',
      url: `/feedback/${deleteId}`
  })
      .then((response) => {
      this.getFeedback();
      })
      .catch((error) => {
      console.log(`Something bad happened deleting feedback ${deleteId}`);
      alert(`Couldn't delete the feedback, try again later`);
      })
  }

  getFeedback = () => {
    axios({
        method: 'GET',
        url: '/feedback',
    })
        .then((response) => {
        console.log('feedback data', response.data);
        const action = { type: 'DISPLAY_FEEDBACK', payload: response.data };
        this.props.dispatch(action);
        })
        .catch((error) => {
        console.log('Error getting feedback data', error);
        alert('Sorry, could not get the feedback. Try again later.');
        })
    }

  
  render() {
    return (
  
      
      <Router>
        <div>
        <Route exact path="/" component={Home} />
        <Route path="/feelings" component={Feelings} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/supported" component={Supported} />
        <Route path="/comments" component={Comments} />
        <Route path="/final" render = {(props) => <Final {...props} handleSubmit={this.handleSubmit}/>}/>
        <Route path="/thankyou" component={ThankYou} />
        <Route path="/admin" render = {(props) => <Admin {...props} deleteFeedback={this.deleteFeedback} getFeedback={this.getFeedback}/>}/>
      </div>
    </Router>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
