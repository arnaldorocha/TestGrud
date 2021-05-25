const express = require('express');
const route = express.Router()

const services = require('../services/render');

/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description Register
 * @method GET/ Register
 */
route.post('/register', services.register);
route.get('/register_two', services.register_two);
route.get('/register_three', services.register_three);
route.get('/register_two', services.register_two);
route.get('/user', services.user);
route.get('/interview', services.interview);
route.get('/interviewRegister', services.interviewRegister);
route.get('/interviewLogs', services.interviewLogs);
route.get('/knowledge', services.knowledge);
route.get('/portfolio', services.portfolio);
route.get('/contacts', services.contacts);



/**
 * @description Update
 * @method GET/ Update
 */
route.get('/update_user', services.update_user);

module.exports = route;