import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {
    
    //what is called upon load
    componentDidMount() {
        console.log('in componentDidMount...')
        this.props.getFeedback();
      }
      // set up table and map through the info gotten from reducer to display
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
                            <button value={admin.id} onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.props.deleteFeedback(e) } }>
                                Delete
                            </button>
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