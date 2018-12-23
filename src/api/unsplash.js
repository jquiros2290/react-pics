import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fe13b617291e9e56b65171b978fa31e893d2b507c513a34e1cf9c782c7039b11'
    }
});

