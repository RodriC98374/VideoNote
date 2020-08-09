import React, { Component } from 'react'
import Axios from 'axios'
import SuggestionCard from '../Molecules/SuggestionCard'

class Suggestions extends Component{
    constructor(props){
        super(props)
        this.state={
            suggestion: []
        }
    }
    componentDidMount(){
        Axios.get('http://my-json-server.typicode.com/RodriC98374/json-db/videos')
        .then(resp =>(
            this.setState({
                suggestion: resp.data
            })))
    }
    render(){
        const {suggestion} = this.state
        return(
            <div class="another-videos col col-lg-4">
                <SuggestionCard suggestions={suggestion}/>
            </div>
        )
    }
}

export default Suggestions