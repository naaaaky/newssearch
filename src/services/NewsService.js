import axios from 'axios';
import { NEWS_API_URL, NEWS_API_KEY } from '../constants';

const getNews = queryString => {
  return new Promise((resolve, reject) => {
    axios.get(`${NEWS_API_URL}?apiKey=${NEWS_API_KEY}&q=${queryString}`).then(resolve).catch(reject);
  });
};

const NewsService = {
  getNews,
};

export default NewsService;
