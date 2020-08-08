import React from 'react'
import { Link } from 'react-router-dom'

const CoursesCard = ({id, name, course, images, views}) => (
    <Link to={`/materias/${course}/`} class="p-2">
        <div class="card bg-dark text-white mt-3 mx-1 course-card">
            <img src={images} alt={`${name}/${id}`}class="card-img"/>
            <div class="card-img-overlay">
                <h4 class="card-title"> {name} </h4>
                <p class="text-muted"> {views} <i class="fas fa-eye"></i></p>
            </div>
        </div>
    </Link>
)

export default CoursesCard