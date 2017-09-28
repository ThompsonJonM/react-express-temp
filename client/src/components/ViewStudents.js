// Dependencies
import React, { Component } from 'react';
import axios from 'axios';

export default class ViewStudents extends React.Component {
    render() {
        return (
            <h3> View All Students </ h3>
        );
    }

    componentWillMount() {
        console.log('This is before the render');
        axios('/api/students/all').then(response => {
            // console.log(response);

            this.setState({
                students: response
            });
        });
    }
}

// Need to get list of students from server