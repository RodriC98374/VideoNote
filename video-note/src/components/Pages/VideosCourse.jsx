import React, { Component } from 'react'
import SideBar from '../Organisms/SideBar'
import VideosCoursesGrid from '../Organisms/VideosCoursesGrid'
import Axios from 'axios'

class VideoCourse extends Component{
    constructor(props){
        super(props)
        this.state={
            nameCourse: "",
            videosCouses: []
        }
    }
    componentDidMount(){
        Axios.get('http://my-json-server.typicode.com/RodriC98374/Course-db/courses')
        .then( resp => (
            this.setState({
                videosCouses: resp.data
        })))

        Axios.get('http://my-json-server.typicode.com/RodriC98374/json-db/videos')
        .then(resp2 => (
            this.setState({
                nameCourse: resp2.course
        })))

        
    }
    render(){
        const {videosOwn} = this.state.videosCouses
        const nameCourse = this.state.nameCourse
        return(
            <section class="conteiner main-content-page col py-5 d-flex">
                <SideBar />
                <VideosCoursesGrid videosOwn={videosOwn} nameCourse={nameCourse}/>
            </section>
        )
    }
}

export default VideoCourse