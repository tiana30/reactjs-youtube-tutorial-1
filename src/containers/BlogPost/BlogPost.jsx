import React, { Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import Axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }

    getPostApi = () => {
        Axios.get(`http://localhost:3004/posts/`)
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data)  => {
        
        Axios.delete(`http://localhost:3004/posts/${data}`)
        .then((result) => {
            // console.log(result);
            this.getPostApi();
        })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(datajson => 
        //    this.setState({
        //        post: datajson
        //    })
        //    )

       this.getPostApi();
    }
    render() {
        return(
            <Fragment>
                <p className="section-header">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return  (
                        <Post key={post.id} 
                        data={post}
                        onRemove ={this.handleRemove}/>
                        )
                    })
                }
               
            </Fragment>
        )
    }
}

export default BlogPost;