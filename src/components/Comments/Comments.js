import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class Comments extends Component {

    state = [
        {
            comments: 0,
        }
    ]

    nextPage = (event) => {
        console.log(this.props.product);
        const action = { type: 'ADD_COMMENTS', payload: this.state.comments};
        this.props.dispatch(action);
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })

    }

    render() {
        return (
            <div>
            <Header/>
              <h1>Any Comments You Want To Leave?</h1>
              <input
                type="text"
                placeholder="Comments"
                value={this.state.comments}
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
  

export default connect(mapReduxStateToProps)(Comments);