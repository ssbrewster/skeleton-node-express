/* jslint node: true */
'use strict';
var router = require('express').Router(),
    request = require('request-promise'),
    logger = require('./utils/logger.js'),
    moment = require('moment'),
    timestamp = moment().format('DD-MM-YYYY HH:mm:ss');

module.exports = router;

router.get('/get-some-resource', getSomeResource);

function getSomeResource(req, res) {
  const requestOptions = {
    method: 'GET',
    uri: '/url/to/resource',
    json: true
  };

  request((options), (response) => {
    logger.info(timestamp + ' ' + requestOptions.method + ' ' + requestOptions.uri);
    res.send(response);
  }, (error) => {
    logger.error(timestamp + ' ' + requestOptions.method + ' ' + requestOptions.uri + ' ' + 
        JSON.stringify(error));
    res.send(error); 
  });
}
