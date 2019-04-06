import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'

class Footer extends Component {

    render() {
        return (
            <div>
            <Header/>
              <h1>THANKS BRUH</h1>
            
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

export default connect(mapReduxStateToProps)(Footer);