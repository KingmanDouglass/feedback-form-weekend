import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
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

class ThankYou extends Component {

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
        const { classes } = this.props;
        return (
            <div className="thankyou">
            <Header/>
              <h1>Thanks Fella! Feel Free To Spam Us With More Feedback!</h1>
              <Button onClick={this.nextPage} variant="contained" color="primary" className={classes.button}>
                Lego Back
              </Button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

  export default connect(mapReduxStateToProps)(withStyles(styles)(ThankYou));