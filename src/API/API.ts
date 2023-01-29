import axios from 'axios'

const BASE_URL = 'https://api.spaceflightnewsapi.net';

export const getAllArticles = () => {
  return axios(`${BASE_URL}/v3/articles`)
    .then(data => data.data)
    .catch(e => console.log(e));
};

export const getArticlesById = (param : number) => {
  return axios(`${BASE_URL}/v3/articles/${param}`)
    .then(data => data.data)
    .catch(e => console.log(e));
};

export const getAllBlogs = () => {
  return axios(`${BASE_URL}/v3/blogs`)
    .then(data => data.data)
    .catch(e => console.log(e));
};

export const getBlogsById = (param : number) => {
  return axios(`${BASE_URL}/v3/blogs/${param}`)
    .then(data => data.data)
    .catch(e => console.log(e));
};