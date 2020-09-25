import Axios from 'axios';

const GlobalPath = 'http://localhost:3004';
const OnlinePath = 'https://jsonplaceholder.typicode.com';

const Get = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        Axios.get(`${root ? OnlinePath: GlobalPath}/${path}`)
        .then((result) => {
            resolve(result.data);
            console.log(result.data);
            }, (err) => {
                reject(err);
            })
            
    })
    return promise;
}

const POst = (path, root, data) => {
    const promise = new Promise((result, reject)=> {
        Axios.post(`${root ? OnlinePath: GlobalPath}/${path}`, data)
        .then((result) => {
            resolve(result);
           
            }, (err) => {
                reject(err);
        })
            
    }) 
    return promise;
}

//Get
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);

//Post 
const postNewsBlog = (data) => ('post', false, data);


console.log(getComments);
export const API = {
    getNewsBlog,
    getComments,
    postNewsBlog
}