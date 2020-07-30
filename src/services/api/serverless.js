import axios from 'axios';

const BASE_ENDPOINT = '/api'; //TODO place here proper endpoint to serverless API

export default {
    getTime() {
        return axios.get(`${BASE_ENDPOINT}/get-time`);
    }
}