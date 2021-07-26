import axios from "axios";

const url = "http://locahost:5000/posts";

export const fetchPosts = () => axios.get(url);