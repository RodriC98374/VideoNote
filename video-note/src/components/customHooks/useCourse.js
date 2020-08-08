/* import {useState, useEffect} from 'react'
import Axios from 'axios'

const useCourse = (id) => {
    const [course, setState] = useState({})

    useEffect(() => {
        Axios.get(`http://my-json-server.typicode.com/RodriC98374/Course-db/courses/${id}`)
        .then(resp => setState(resp.data))
    }, [])

    return course
}

export default useCourse */