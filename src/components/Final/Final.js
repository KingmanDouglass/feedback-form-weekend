import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'

class Footer extends Component {

nextPage = (event) => {
    this.props.history.push('/thankyou')
}

    render() {
        return (
            <div>
            <Header/>
              <h1>Please Do A Final Review of Feedback</h1>
              <ul>
                  <li>Feelings: {this.props.reduxState.feelingsReducer}</li>
                  <li>Understanding: {this.props.reduxState.understandingReducer}</li>
                  <li>Supported: {this.props.reduxState.supportedReducer}</li>
                  <li>Comments: {this.props.reduxState.commentsReducer}</li>
                  <button onClick={this.nextPage}>FUCK YEA</button>
              </ul>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

export default connect(mapReduxStateToProps)(Footer);