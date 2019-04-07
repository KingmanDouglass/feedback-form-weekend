import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'

class Footer extends Component {

// state = 
//     {
//         "feeling": '',
//         "understanding": '',
//         "support": '',
//         "comments": '',
//     }


nextPage = (event) => {
    // const action = { type: 'CLEAR_INPUTS', payload: this.state};
    // this.props.dispatch(action);
    this.props.history.push('/')
}

    render() {
        return (
            <div className="thankyou">
            <Header/>
              <h1>THANKS BRUH</h1>
              <button onClick={this.nextPage}>Spam Us With More Feedback</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

export default connect(mapReduxStateToProps)(Footer);