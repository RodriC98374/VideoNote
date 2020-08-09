import React from 'react'
import { Link } from 'react-router-dom'


const VideoCourses= ({id, title, course, image}) => (
    <div class="media-video mt-3">
        <Link to={`/materias/${course}/${id}`} className="card">
        <img src={image} class="img-fluid" alt={title} />
        </Link>
        <p class="card-text text-center text-dark"> {title} </p>
    </div>
)

export default VideoCourses