
const axios = require('axios');
const { apiKey, apiEndpoint } = require('../config');


const api = async (postcode) => {
    return await axios.get(apiEndpoint, {
        params: {
            key: apiKey,
            postcode,
        }
    }).then((response) => {
        console.log(JSON.stringify(response.data, null, 2));
        return response;
    }).catch((error) => {
        console.log(error);
        return error;
    });
}

module.exports = api;
