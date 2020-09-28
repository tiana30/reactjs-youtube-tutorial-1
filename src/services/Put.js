import Axios from 'axios';
import{GlobalPath, OnlinePath} from './Path';

export const Put = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.put(`${root ? OnlinePath: GlobalPath}/${path}`, data)
        .then((result) => {
            resolve(result);
           
            }, (err) => {
                reject(err);
        })
    })
    return promise;
}