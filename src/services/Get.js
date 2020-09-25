import Axios from 'axios';
import{GlobalPath, OnlinePath} from './Config';

export const Get = (path, root) => {
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