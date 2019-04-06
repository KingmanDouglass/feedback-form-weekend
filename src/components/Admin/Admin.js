import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import axios from 'axios';

class Admin extends Component {


getFeedback = () => {
    axios({
        method: 'GET',
        url: '/feedback',
    })
        .then((response) => {
        console.log('feedback data', response.data);
        const action = { type: 'DISPLAY_FEEDBACK', payload: response.data };
        this.props.dispatch(action);
        })
        .catch((error) => {
        console.log('Error getting feedback data', error);
        alert('Sorry, could not get the feedback. Try again later.');
        })
    }
    
    componentDidMount() {
        console.log('in componentDidMount...')
        this.getFeedback();
      }

    render() {
        return (
            <table align="center">
                <thead>
                    <tr>
                        <th>
                            Feeling
                        </th>
                        <th>
                            Comprehension
                        </th>
                        <th>
                            Support
                        </th>
                        <th>
                            Comments
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxState.adminReducer.map(admin =>
                        <tr>
                            <td>
                                {admin.feeling}
                            </td>
                            <td>
                                {admin.understanding} 
                            </td>
                            <td>
                                {admin.support}
                            </td>
                            <td>
                                {admin.comments}
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
  });
  

export default connect(mapReduxStateToProps)(Admin);