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


        //install json-server yarn add json-server
        //buat file baru di root dengan nama db.json
        //isi db.json dengan data posts yang ada di jsonplaceholder.typicode.com/posts
        //Buka dahulu json server dengan cara buka terminal baru di folder app
        //kemudian jalankan perintah json-server --watch db.json --port 3004

        Axios.get('http://localhost:3004/posts')
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