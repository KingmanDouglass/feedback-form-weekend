import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Home extends Component {

nextPage = (event) => {
    this.props.history.push('/feelings')
}

    render() {
        const { classes } = this.props;
        return (
            <div className="home">
             <br/>
             <br/>
             <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h2>"We don't make mistakes, just happy little accidents."</h2>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Button onClick={this.nextPage} variant="contained" color="primary" className={classes.button}>
                Knick Knack Patty Wack Let's Do Some Feedback
              </Button>
              {/* <button onClick={this.nextPage}>Let's Do This Thang</button> */}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

  export default connect(mapReduxStateToProps)(withStyles(styles)(Home));