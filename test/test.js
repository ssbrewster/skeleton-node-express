var nock = require('nock'),
    should = require('should');

// An example test case with nock
describe('testApi', () => {
  const BASE_URL = '/base/url/';

    it('should retrieve a list of the most popular films', () => {
      nock(BASE_URL)
        .get('/url/to/resource')
        .reply(200);

      // write your assertions here
    });
  });

