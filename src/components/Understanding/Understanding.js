import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Understanding extends Component {

    state =
        {
            understanding: '',
        }


    nextPage = (event) => {
        console.log(this.props.product);
        const action = { type: 'ADD_UNDERSTANDING', payload: this.state.understanding};
        this.props.dispatch(action);
        this.props.history.push('/supported')
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })

    }

    render() {
        const {classes} = this.props;
        return (
            <div className="Brad">
            <Header/>
              <h1>Smelling What We Stepping In?</h1>
              <h5>Scale: 1 - 5</h5>
              <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="filled-url"
                label="How You Understanding Stuff Fellas?"
                className={classes.textField}
                value={this.state.understanding}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                />
              
              <br/>
              {/* <input
                type="number"
                placeholder="Understanding"
                value={this.state.understanding}
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
  

  export default connect(mapReduxStateToProps)(withStyles(styles)(Understanding));