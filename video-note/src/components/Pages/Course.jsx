import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import SideBar from '../Organisms/SideBar'
import VideoCoursesGrid from '../Organisms/VideosCoursesGrid'

const Course = ({ match }) => {
    const [media, setState] = useState([])
    useEffect( () => {
        Axios.get('http://my-json-server.typicode.com/RodriC98374/json-db/videos')
        .then(resp => setState(resp.data))
    }, [])
    const inCourse = media.filter(e => e.course === match.params.course )
    console.log(inCourse)
    return(
        <section class="conteiner main-content-page col py-5 d-flex">
            <SideBar />
            <VideoCoursesGrid inCourse={inCourse}/>
        </section>
    )
}

export default Course