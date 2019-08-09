import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

export default axios.create({
    baseURL: 'htttp://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults: 5,
        key: process.env.API_KEY
    }
})