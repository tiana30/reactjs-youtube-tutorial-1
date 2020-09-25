import {Get} from './Get';
import{ Post} from './Post';
import {Put} from './Put';
import { Delete } from './Delete';

//Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

//Post 
const postNewsBlog = (data) => Post('posts', false, data);

//Put
const updateNewsBlog = (id) => Put(`posts/${id}`, false)

//Delete
const deleteNews = (id) => Delete(`posts/${id}`,false)

console.log(getComments);
export const API = {
    getNewsBlog,
    getComments,
    postNewsBlog,
    updateNewsBlog,
    deleteNews
}