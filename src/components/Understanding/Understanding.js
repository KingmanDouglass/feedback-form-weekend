import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class Understanding extends Component {

    state = [
        {
            understanding: 0,
        }
    ]


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
        return (
            <div>
            <Header/>
              <h1>How Are You Understanding The Content Today?</h1>
              <input
                type="number"
                placeholder="Undertsanding Level"
                value={this.state.understanding}
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
  

export default connect(mapReduxStateToProps)(Understanding);