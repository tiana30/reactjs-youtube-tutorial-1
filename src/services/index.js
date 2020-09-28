import { Get } from './Get';
import { Post } from './Post';


//Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

//Post
const postNewsBlog = (data) => Post('posts', false, data);

export const API = {
    getNewsBlog,
    getComments,
    postNewsBlog
}