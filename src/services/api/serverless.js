import axios from 'axios';

const BASE_ENDPOINT = '/api';

export default {
    getTime() {
        return axios.get(`${BASE_ENDPOINT}/time`);
    }
}