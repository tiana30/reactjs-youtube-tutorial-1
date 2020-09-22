import React, { Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import Axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(datajson => 
        //    this.setState({
        //        post: datajson
        //    })
        //    )

        Axios.get('http://localhost:3004/posts')
        .then((result) => 
        {
           // console.log(result.data);
            this.setState({
                post: result.data
            })
        })    
    }
    render() {
        return(
            <Fragment>
                <p className="section-header">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return  (
                        <Post key={post.id} title={post.title} desc={post.body} />
                        )
                    })
                }
               
            </Fragment>
        )
    }
}

export default BlogPost;