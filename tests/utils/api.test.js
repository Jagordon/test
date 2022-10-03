const api = require('../../utils/api');
const axios = require('axios');
jest.mock('axios');

test('the api throws an error', async () => {
    axios.get.mockImplementation(() => Promise.reject({message: 'error thrown'}));
    const data = await api().catch((error) => {
        expect(error.message).toBe('error thrown');
    });
  });

  test('the data is good', async () => {
    const returnedData = { data: {} }
    axios.get.mockImplementation(() => Promise.resolve(returnedData));
    const data = await api('NE3');
    expect(data).toBe(returnedData);
  });