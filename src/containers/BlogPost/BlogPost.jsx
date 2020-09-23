import React, { Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import Axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
        }
    }

    getPostApi = () => {
        Axios.get(`http://localhost:3004/posts?_sort=id&_order=desc`)
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    postDatatoApi = () => {
        Axios.post(`http://localhost:3004/posts/`, this.state.formBlogPost)
        .then((res) => 
        {
            console.log(res);
            this.getPostApi();
            
        }, (err) => {
            console.log("error :", err)
        }
        
        )
       
    }

    handleRemove = (data)  => {
        
        Axios.delete(`http://localhost:3004/posts/${data}`)
        .then((result) => {
            // console.log(result);
            this.getPostApi();
        })
    }

    handleFormChange = (event) => {
        console.log('form change', event.target.value);
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        formBlogPostNew['id'] = timestamp;
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
                console.log('value object : ', this.state.formBlogPost)
        })
    }

    handleSubmit = () => {
       this.postDatatoApi();
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
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
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