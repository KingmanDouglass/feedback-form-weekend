import React, { Component } from 'react';
import { connect } from 'react-redux';

class Submit extends Component {



    render() {
        return (
            <div>
              <h1>Submit</h1>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  

export default connect(mapReduxStateToProps)(Submit);