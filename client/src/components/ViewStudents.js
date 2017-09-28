// Dependencies
import React, { Component } from 'react';
import axios from 'axios';

export default class ViewStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
    }

    render() {
        const studentsMap = this.state.students.map((student => <div>{student.name} </ div>))

        return (
            <div>
                <h3> View All Students </ h3>
                <div> {studentsMap} </ div>
            </ div>
        );
    }

    componentWillMount() {
        console.log('This is before the render');
        axios('/api/students/all').then(response => {
            // console.log(response);

            this.setState({
                students: response.data
            });
        });
    }
}

// Need to get list of students from server