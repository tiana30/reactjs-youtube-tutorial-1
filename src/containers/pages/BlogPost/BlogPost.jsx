import React, { Component, Fragment} from 'react';
import './BlogPost.css';
import Post from './Post/Post';
import Axios from 'axios';
import { API } from '../../../services';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            userId: 1,
            id: '',
            title: '',
            body: ''
        },
        isUpdate: false,
        comments: []
    }

    getPostApi = () => {
       API.getNewsBlog().then(result => {
           this.setState({
               post: result
           })
       })
       API.getComments().then(result => {
        this.setState({
            comments: result
        })
    })
    }

    postDatatoApi = () => {
        API.postNewsBlog(this.state.formBlogPost)  
        .then((res) => {
            console.log(res);
            this.getPostApi();
            this.setState({
                formBlogPost: {
                    userId: 1,
                    id: '',
                    title: '',
                    body: ''
                }
            })
        }, (err) => {
            console.log("error :", err)
        }
        )
    }

    putDataToApi = () => {
        API.updateNewsBlog(this.state.formBlogPost)
        .then((result)=> {
        this.getPostApi();
        this.setState({
            isUpdate: false,
            formBlogPost: {
                userId: 1,
                id: '',
                title: '',
                body: ''
            }
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

    handleFormChange = (event) => {
        console.log('form change', event.target.value);
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
       
        if(!this.state.isUpdate){
             formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
                console.log('value object : ', this.state.formBlogPost)
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToApi();
        }else{  
            this.postDatatoApi();
        }
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
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
            <hr />
                <p>BlogPost Component</p>
            <hr />
                <p className="section-header">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" 
                    name="title" 
                    placeholder="add title" 
                    value={this.state.formBlogPost.title}
                    onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" 
                    id="body" 
                    cols="30" 
                    rows="10" 
                    value = {this.state.formBlogPost.body}
                    onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {this.state.comments.map (comment => {
                    return <p>{comment.name} = {comment.email}</p>
                })} */}

                {
                    this.state.post.map(post => {
                        return  (
                        <Post key={post.id} 
                        data={post}
                        onUpdate = {this.handleUpdate}
                        onRemove ={this.handleRemove}
                        goDetail = {this.handleDetail}
                        />
                        )
                    })
                }
               
            </Fragment>
        )
    }
}

export default BlogPost;