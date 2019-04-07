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
            <section>
            <Header/>
            <div className="support">
              <h1>Peers Ensuring Your Chi Is Sound?</h1>
              <h5>Scale: 1 - 5</h5>
              <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="filled-url"
                label="Diggin That Support Fellas?"
                style={{backgroundColor: 'white', color: 'yellow'}}
                className={classes.textField}
                value={this.state.supported}
                onChange={this.handleChange}
                margin="normal"
                variant="filled"
            />
              
              <br/>
              {/* <input
                type="number"
                placeholder="Support Gauge"
                value={this.state.supported}
                onChange={this.handleChange}
                /> */}
                <Button onClick={this.nextPage} variant="contained" color="primary" className={classes.button}>
                    Next
                </Button>
                </form>
            </div>
            <Footer/>
            </section>
        )
    }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    backgroundColor: '#FFFFFF'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    backgroundcolor: '#FFFFFF'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  multilineColor:{
    backgroundcolor: '#FFFFFF'
}
});
  

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  

  export default connect(mapReduxStateToProps)(withStyles(styles)(Supported));