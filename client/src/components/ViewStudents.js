// Dependencies
import React, { Component } from 'react';

export default class ViewStudents extends React.Component {
    render() {
        return (
            <h3> View All Students </ h3>
        );
    }

    componentWillMount() {
        console.log('This is before the render');
    }
}

// Need to get list of students from server