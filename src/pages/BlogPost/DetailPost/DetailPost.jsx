import React, {Component} from 'react';
import Axios from 'axios';
import './DetailPost.css';
class DetailPost extends Component {
    state = {
        post: {
            title:'',
            body:''
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id; //menangkap props id dari Post 
        //cek id console.log(id);
        Axios.get(`http://localhost:3004/posts/${id}`)
        .then((result)=> {
            let post = result.data;
            console.log(post);
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }

        render() {
            return(
                <div>
                <p className="section"> Detail Post </p>
                <div className="detail">
                    <p className="detail-title">{this.state.post.title}</p>
                    <p className="detail-body">{this.state.post.body}</p>
                </div>
    
                </div>
            )
        }
    
}

export default DetailPost;
