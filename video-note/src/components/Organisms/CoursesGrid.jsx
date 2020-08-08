import React from 'react'
import Courses from './Courses'

const CoursesGrid = ({courses}) => (
    <section class="conteiner main-content-page col py-5 d-flex">
        <div class="conteiner courses col col-lg-10 offset-lg-1 row row-cols-1 row-cols-lg-4 justify-content-around">
            <Courses courses={courses} />
        </div>
    </section>
)

export default CoursesGrid