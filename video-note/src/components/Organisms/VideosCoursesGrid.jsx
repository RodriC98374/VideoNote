import React from 'react'
import VideoCourses from '../Atoms/VideoCourses'

const VideoCoursesGrid = ({inCourse = []}) => (
    <div class="conteiner col-lg-8 media-conteiner p-0 mx-3 card-deck row-cols-1 row-cols-lg-3 justify-content-around">
        {
            inCourse.map( iC => (
                <VideoCourses 
                    id={iC.id}
                    title={iC.title}
                    course={iC.course}
                    image={iC.image}
                />
            ))
        }
    </div>
)

export default VideoCoursesGrid