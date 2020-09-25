import {Get} from './Get';
import{ Post} from './Post';

//Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

//Post 
const postNewsBlog = (data) => Post('post', false, data);


console.log(getComments);
export const API = {
    getNewsBlog,
    getComments,
    postNewsBlog
}