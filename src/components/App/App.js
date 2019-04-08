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
  
  //POST function
  handleSubmit = () => {
    let newFeedback = this.props.reduxState;
    //accumulate all reducers into one SUPER REDUCER!!!!!
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
        //send the SUPER REDUCER!!!!!!
        data: postFeedback,
    }).then((response)=>{
        console.log(`in post `, response);
        // this.history.push('/thankyou')  
    }).catch((error) => {
        alert(`Uh oh, someone didn't use words and/or numbers the correct way...this is why our failing education system in the country is a serious concern!`);
      } )
}

//DELETE function
deleteFeedback = (event) => {
  // event.preventDefault();
  //target based off of the values in the click
  let deleteId = event.target.value;
  console.log('delete id is ', deleteId);
  axios({
      method: 'DELETE',
      url: `/feedback/${deleteId}`
  })
      .then((response) => {
        //re-render the page upon delete
      this.getFeedback();
      })
      .catch((error) => {
      console.log(`Something bad happened deleting feedback ${deleteId}`);
      alert(`Couldn't delete the feedback, try again later`);
      })
  }

  //GET function
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
  
      //Hash routers - create paths for each page
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
