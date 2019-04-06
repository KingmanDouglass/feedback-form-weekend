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
        return (
            <div>
            <Header/>
              <h1>How Well Are You Being Supported?</h1>
              <h3>Please Rate On A Scale of 1 (poor) to 5 (excellent)</h3>
              <input
                type="number"
                placeholder="Support Gauge"
                value={this.state.supported}
                onChange={this.handleChange}
                />
                <button onClick={this.nextPage}>Next</button>
            <Footer/>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  

export default connect(mapReduxStateToProps)(Supported);