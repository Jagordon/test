
const axios = require('axios');
const { apiKey, apiEndpoint } = require('../config');


const api = async (postcode) => {
    try {
        const response = await axios.get(apiEndpoint, {
            params: {
                key: apiKey,
                postcode,
            }
        })
        console.log(JSON.stringify(response.data, null, 2));
        return response;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
}

module.exports = api;
