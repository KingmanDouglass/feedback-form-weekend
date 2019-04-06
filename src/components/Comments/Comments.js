import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Comments extends Component {

    state =
        {
            comments: '',
        }

    nextPage = (event) => {
        console.log(this.props.product);
        const action = { type: 'ADD_COMMENTS', payload: this.state.comments};
        this.props.dispatch(action);
        this.props.history.push('/final')
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })

    }

    render() {
        const {classes} = this.props;
        return (
            <div className="Brad">
            <Header/>
              <h1>Got Beef or Praise? Preach?</h1>
              <h5>If It's Too Long I Won't Read</h5>
              <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="filled-url"
                label="Any Comments Fellas?"
                className={classes.textField}
                value={this.state.comments}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                />
              <br/>
              {/* <input
                type="text"
                placeholder="Comments"
                value={this.state.comments}
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
  

  export default connect(mapReduxStateToProps)(withStyles(styles)(Comments));