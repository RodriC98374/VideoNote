import React from 'react'
import { Link } from 'react-router-dom'

const SuggestionItem = ({id, course, image, title}) => (
    <div class="row no-gutters">
        <Link to={`/materias/${course}/${id}`} class="col-md-4">
            <img src={image} class="card-img" alt={title}/>
        </Link>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title"> {title} </h5>
                <p class="card-text">This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
)

export default SuggestionItem