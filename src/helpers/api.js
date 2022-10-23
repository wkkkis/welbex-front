import axios from "axios";

//Так же здесь можно написать interceptors, headers (parser, hashes и тд)
export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
