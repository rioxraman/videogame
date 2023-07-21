import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'daf6103884834cf882d945a360d491a4'
    }
});
