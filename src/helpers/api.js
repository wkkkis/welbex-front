import axios from "axios";

//Constants
import { DEFAULT_URL } from "../utils/constants";

//Так же здесь можно написать interceptors, headers (parser, hashes и тд)
export const instance = axios.create({
    baseURL: DEFAULT_URL,
});
