import React, { Component } from 'react';
import { connect } from 'react-redux';

//get rid of bulletpoints with css LIST-STYLE: NONE
class Footer extends Component {

    render() {
        return (
            <div>
              <h1>Review Your Feeback</h1>
              <ul>
                  <li>Feelings: {this.props.reduxState.feelingsReducer}</li>
                  <li>Understanding: {this.props.reduxState.understandingReducer}</li>
                  <li>Supported: {this.props.reduxState.supportedReducer}</li>
                  <li>Comments: {this.props.reduxState.commentsReducer}</li>
              </ul>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

export default connect(mapReduxStateToProps)(Footer);