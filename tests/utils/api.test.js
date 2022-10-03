const api = require('../../utils/api');
const axios = require('axios');
jest.mock('axios');

test('the data is peanut butter', async () => {
    axios.get.mockImplementation(() => Promise.reject(undefined));
    const data = await api();
    expect(data).toBe(undefined);
  });

  test('the data is what', async () => {
    const returnedData = { data: {} }
    axios.get.mockImplementation(() => Promise.resolve(returnedData));
    const data = await api('NE3');
    expect(data).toBe(returnedData);
  });