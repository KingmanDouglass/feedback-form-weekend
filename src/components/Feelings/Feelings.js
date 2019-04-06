import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class Feelings extends Component {

    state =
        {
            feelings: 0,
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
        return (
            <div>
            <Header/>
              <h1>How Are You Feeling Today?</h1>
              <input
                type="number"
                placeholder="Feeling"
                value={this.state.feelings}
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
  

export default connect(mapReduxStateToProps)(Feelings);