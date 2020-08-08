/* import {useState, useEffect} from 'react'
import Axios from 'axios'

const useVideo = (id) => {
    const [state, setState] = useState({})

    useEffect(() => {
        Axios.get(`http://my-json-server.typicode.com/RodriC98374/json-db/videos/${id}`)
        .then(resp => setState(resp.data))
    }, [])

    return state
}

export default useVideo */