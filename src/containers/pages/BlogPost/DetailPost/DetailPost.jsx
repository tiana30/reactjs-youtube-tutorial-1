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
        let id = this.props.match.params.id;
        //console.log(id);
        Axios.get(`http://localhost:3004/posts/${id}`)
        .then((result) => {
            let post = (result.data);
           console.log(result);
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
            <hr />
            <p> Detail Post </p>
            <hr />
            <div className="detail">
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </div>

            </div>
        )
    }
}

export default DetailPost;