import React, { useState, useEffect } from 'react'
import Frame from '../Atoms/Frame'
import Axios from 'axios'
import Suggestions from '../Organisms/Suggestions'

const Video = ({ match }) => {
    const [vid, setState] = useState( {} )
    useEffect( () => {
        Axios.get(`http://my-json-server.typicode.com/RodriC98374/json-db/videos/${match.params.id}`)
        .then( resp => setState(resp.data) )
    })
    return(
        <section class="conteiner-fluid main-content-page col py-5 d-flex">
            <div class="play-video col col-lg-12 d-flex p-0">
                <Frame url={vid.url} tittle={vid.tittle}/>
                <Suggestions />
            </div>
        </section>
    )
}

export default Video