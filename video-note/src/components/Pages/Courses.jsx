import React, { Component } from 'react'
import Axios from 'axios'
import CoursesGrid from '../Organisms/CoursesGrid'

class Courses extends Component{
    constructor(props){
        super(props)

        this.state={
            courses: []
        }
    }
    componentDidMount(){
        Axios.get('http://my-json-server.typicode.com/RodriC98374/Course-db/courses')
        .then(resp => this.setState({
            courses: resp.data
        }))
    }
    render(){
        const { courses } = this.state
        return <CoursesGrid courses={courses} />
        
    }
}

export default Courses