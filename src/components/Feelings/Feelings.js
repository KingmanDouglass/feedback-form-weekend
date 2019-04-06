import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Feelings extends Component {

    state =
        {
            feelings: '',
        }


    nextPage = (event) => {
        console.log(this.props.product);
        const action = { type: 'ADD_FEELINGS', payload: this.state.feelings};
        this.props.dispatch(action);
        this.props.history.push('/understanding')
    }

    handleChange = (event) => {
        this.setState({
            feelings: event.target.value
        })

    }

    render() {
        const {classes} = this.props;
        return (
            <div className="Brad">
            <Header/>
              <h1>How We Vibing?</h1>
              <h5>Scale: 1 - 5</h5>
              <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="filled-url"
                label="How We Feeling Fellas?"
                className={classes.textField}
                value={this.state.feelings}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
          />
              
              {/* <input
                type="number"
                placeholder="Feeling"
                value={this.state.feelings}
                onChange={this.handleChange}
                /> */}
                {/* <button onClick={this.nextPage}>Next</button> */}
                <br />
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

export default connect(mapReduxStateToProps)(withStyles(styles)(Feelings));

// export default connect(mapReduxStateToProps)(Feelings);

