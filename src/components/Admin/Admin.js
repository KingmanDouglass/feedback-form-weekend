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

deleteFeedback = (event) => {
    event.preventDefault();
    let deleteId = event.target.value;
    console.log('delete id is ', deleteId);
    axios({
        method: 'DELETE',
        url: `/feedback/${deleteId}`
    })
        .then((response) => {
        this.getFeedback();
        })
        .catch((error) => {
        console.log(`Something bad happened deleting feedback ${deleteId}`);
        alert(`Couldn't delete the feedback, try again later`);
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
                        <tr key={admin.id}>
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
                                <button onClick={this.deleteFeedback} value={admin.id}>Delete</button>
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