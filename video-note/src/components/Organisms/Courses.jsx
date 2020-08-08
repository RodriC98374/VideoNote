import React, { Component } from 'react'
import Axios from 'axios'
import CoursesGrid from './CoursesGrid'

class Courses extends Component{
    constructor(props){
        super(props)

        this.state={
            materias: []
        }
    }
    componentDidMount(){
        Axios.get('http://my-json-server.typicode.com/RodriC98374/json-db/videos')
        .then(resp => this.setState({
            materias: resp.data
        }))
    }
    render(){
        const {courses} = this.state
        return <CoursesGrid courses={courses} />
        
    }
}

export default Courses