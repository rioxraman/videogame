import axios from 'axios';

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api',
        key: 'daf6103884834cf882d945a360d491a4'
    }
});
