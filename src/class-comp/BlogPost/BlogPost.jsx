import React, { Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../function-comp/Post/Post';
import Axios from 'axios';

class BlogPost extends Component {
    state ={
        post: []
    }

    getPostApi = () => {
        Axios.get('http://localhost:3004/posts')
        .then((result) => 
        {
           // console.log(result.data);
            this.setState({
                post: result.data
            })
        })    
    }
    
    handleRemove = (data) => {
        console.log(data);
        Axios.delete(`http://localhost:3004/posts/${data}`)
        .then((result) => 
        {
            console.log(result);
            this.getPostApi();
        })
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
        
        this.getPostApi();
        
    }

   
    render(){
        return(
            <Fragment>
               <p className="section-header">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return  (
                        <Post key={post.id} 
                        data = {post} //title dan body sudah dibungkus dengan props bernama data
                        OnRemove = {this.handleRemove}
                        />
                        )
                    })
                } 
            </Fragment>
        )
    }
}

export default BlogPost;