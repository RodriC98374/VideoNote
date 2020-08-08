import React, { Component } from 'react'
import Axios from 'axios'
import Welcome from '../Molecules/Welcome'
import Carousel from '../Organisms/Carousel'

class Home extends Component{
    constructor(props){
        super(props)

        this.state={
            videos: []
        }
    }

    componentDidMount(){
        Axios.get('http://my-json-server.typicode.com/RodriC98374/json-db/videos')
        .then(resp => (
            this.setState({
                videos: resp.data
            })
        ))
    }

    render(){
        const { videos } = this.state
        return(
            <>
                <Welcome />
                <Carousel videos={videos}/>
            </>

        )
    }
}

export default Home