import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import axios from 'axios';

class Footer extends Component {

// nextPage = (event) => {
//     this.props.history.push('/thankyou')
// }


//onClick={this.nextPage}

handleSubmit = () => {

    let feedback = [];
    
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
        url: '/feeback',
        data: postFeedback,
    }).then((response)=>{
        console.log(`in post `, response);
        this.props.history.push('/thankyou')
        
    })
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
                  <button onClick={this.handleCheckout}>FUCK YEA</button>
              </ul>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

export default connect(mapReduxStateToProps)(Footer);