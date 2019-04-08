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

//handleSubmit is called here but also calls the HANDLESUBMIT in app which within the funciton is being passed as props
handleSubmit = () => {
  this.props.history.push('/thankyou')
  this.props.handleSubmit();
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