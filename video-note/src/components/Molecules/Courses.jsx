import React from 'react'
import { Link } from 'react-router-dom'

const Courses = ({image, title, views}) => (
    <Link to={`/videos/${materia}`} class="p-2">
        <div class="card bg-dark text-white mt-3 mx-1 course-card">
            <img src={image} alt={title} class="card-img"/>
            <div class="card-img-overlay">
                <h4 class="card-title"> {title} </h4>
                <p class="text-muted"> {views} <i class="fas fa-eye"></i></p>
            </div>
        </div>
    </Link>
)

export default Courses