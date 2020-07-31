import axios from "axios";
import {getSessionCookie} from "./Sessions";

const session = getSessionCookie();
let token="";
console.log(session);
if(Object.keys(session).length!==0){
    token="Bearer "+session.token;
}
export const axiosInstance = axios.create({
    baseURL: 'https://peaceful-oasis-94766.herokuapp.com/',
    headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
    }
});
// axiosInstance.defaults.headers.common['Authorization'] = AUTH_TOKEN;