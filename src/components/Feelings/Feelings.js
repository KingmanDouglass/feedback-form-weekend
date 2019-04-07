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
            <section >
            <Header/>
            <div className="feelings">
              <h1>How We Vibing?</h1>
              <h5>Scale: 1 - 5</h5>
              <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="filled-url"
                label="How We Feeling Fellas?"
                style={{backgroundColor: 'white', color: 'yellow'}}
                className={classes.textField}
                value={this.state.feelings}
                onChange={this.handleChange}
                margin="normal"
                variant="filled"
          />
              
              {/* <input
                type="number"
                placeholder="Feeling"
                value={this.state.feelings}
                onChange={this.handleChange}
                /> */}
                {/* <button onClick={this.nextPage}>Next</button> */}
                <br />
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

export default connect(mapReduxStateToProps)(withStyles(styles)(Feelings));

// export default connect(mapReduxStateToProps)(Feelings);

