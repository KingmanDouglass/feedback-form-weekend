import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class Supported extends Component {

    state = [
        {
            supported: 0,
        }
    ]

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