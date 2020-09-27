import React, { Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../function-comp/Post/Post';
import Axios from 'axios';

class BlogPost extends Component {
    state ={
        post: [],
        formPost: {
            userId: 1,
            id:1,
            title:'',
            body: ''
        }
    }

    getPostApi = () => {
        Axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => 
        {
           // console.log(result.data);
            this.setState({
                post: result.data
            })
        })    
    }

    postDataToApi = () => {
        Axios.post(`http://localhost:3004/posts/`, this.state.formPost)
        .then((result) =>{
            console.log(result);
            this.getPostApi();
        }, (err) => {
            console.log("error : ", err)
        })
    }

    handleFormChange = (event) => {
        console.log('form change', event.target.value);
        let formPostNew ={...this.state.formPost}
        let timestamp = new Date().getTime();
        formPostNew['id'] = timestamp; //id di isi dengan 
        formPostNew[event.target.name] = event.target.value; //
        this.setState({
            formPost: formPostNew
        }, () => {
            console.log('value object : ', this.state.formPost)
        })
    }
    
    handleRemove = (data) => {
        console.log(data); //data berisi id yang dikirimkan
        Axios.delete(`http://localhost:3004/posts/${data}`)
        .then((result) => 
        {
            console.log(result);
            this.getPostApi();
        })
    }

    handleSubmit = () => {
        this.postDataToApi(); //memanggil fungsi
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
        
        this.getPostApi(); //memanggil get data ketika pertama loading
        
    }

   
    render(){
        return(
            <Fragment>
               <p className="section-header">Blog Post</p>
               <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" placeholder="add content" rows="10" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick = {this.handleSubmit}>Simpan</button>
                </div>

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