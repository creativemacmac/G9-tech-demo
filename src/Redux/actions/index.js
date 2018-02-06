import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const DELETE_POST = 'DELETE_POST';
export const AUTH_USER = 'AUTH_USER;'


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jawn';

export const authenticateUser = (loggedIn = false) => {
    return {
        type: AUTH_USER,
        payload: loggedIn
    }
}
export const fetchPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
};

export const createPost = (values, cb) => {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => cb())
    .catch(() => {
        console.warn('There hsa been an error submiting the form')
    })

    return {
        type: CREATE_POST,
        payload: request
    }
}

export const fetchSinglePost = (id) => {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_SINGLE_POST,
        payload: request
    }
}

export const deletePost = (id, cb) => {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => cb());

    return {
        type: DELETE_POST,
        payload: id
    }
}