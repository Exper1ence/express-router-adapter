/**
 * Created by Exper1ence on 2016/12/10.
 */
const Path = require('path');

module.exports = (route, dir, methodsDirname = '_rest') => {
    const router = require('express').Router();
    const subRouters = require('dynamic-object-generator')(dir, true);
    const restRouters = require('dynamic-object-generator')(Path.resolve(dir, methodsDirname), true);
    
    for (let restRouter of restRouters) {
        router.use(route, restRouter);
    }
    for (let subRouter of subRouters) {
        router.use(route, subRouter);
    }
    
    return router;
};