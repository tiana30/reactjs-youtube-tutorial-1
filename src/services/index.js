import { Get } from './Get';


//Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

export const API = {
    getNewsBlog,
    getComments
}