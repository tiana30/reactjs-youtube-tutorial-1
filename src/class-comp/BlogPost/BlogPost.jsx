import React, { Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../function-comp/Post/Post';
import Axios from 'axios';

class BlogPost extends Component {
    state ={
        post: []
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(resultjson =>
        //     this.setState({
        //         post: resultjson
        //     })
        // )

        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => 
        {
           // console.log(result.data);
            this.setState({
                post: result.data
            })
        })    
    }

    render(){
        return(
            <Fragment>
               <p className="section-title">Blog Post</p>
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