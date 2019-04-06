import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Supported extends Component {

    state =
        {
            supported: '',
        }

    nextPage = (event) => {
        console.log(this.props.product);
        const action = { type: 'ADD_SUPPORTED', payload: this.state.supported};
        this.props.dispatch(action);
        this.props.history.push('/comments')
    }

    handleChange = (event) => {
        this.setState({
            supported: event.target.value
        })

    }

    render() {
        const {classes} = this.props;
        return (
            <div className="Brad">
            <Header/>
              <h1>Peers Ensuring Your Chi Is Sound?</h1>
              <h5>Scale: 1 - 5</h5>
              <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="filled-url"
                label="Diggin That Support Fellas?"
                className={classes.textField}
                value={this.state.supported}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
            />
              
              <br/>
              {/* <input
                type="number"
                placeholder="Support Gauge"
                value={this.state.supported}
                onChange={this.handleChange}
                /> */}
                <Button onClick={this.nextPage} variant="outlined" className={classes.button}>
                    Next
                </Button>
                </form>
            <Footer/>
            </div>
        )
    }
}

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  

  export default connect(mapReduxStateToProps)(withStyles(styles)(Supported));