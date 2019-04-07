import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });


class Final extends Component {

// nextPage = (event) => {
//     this.props.history.push('/thankyou')
// }


//onClick={this.nextPage}

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
        this.props.history.push('/thankyou')  
    }).catch((error) => {
        alert(`Uh oh, someone didn't use words and/or numbers the correct way...this is why our failing education system in the country is a serious concern!`);
      } )
}


    render() {
        const { classes } = this.props;
        return (
            <div className="final">
            <Header/>
              <h1>Please Do A Final Review of Feedback</h1>
              <ul>
                  <li>Feelings: {this.props.reduxState.feelingsReducer}</li>
                  <li>Understanding: {this.props.reduxState.understandingReducer}</li>
                  <li>Supported: {this.props.reduxState.supportedReducer}</li>
                  <li>Comments: {this.props.reduxState.commentsReducer}</li>
                  <Button onClick={this.handleSubmit} variant="contained" color="primary" className={classes.button}>
                    Submit Feedback
                  </Button>
              </ul>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

  export default connect(mapReduxStateToProps)(withStyles(styles)(Final));