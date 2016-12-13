/**
 * Created by Exper1ence on 2016/12/10.
 */
const Path = require('path');

module.exports = (route, dir) => {
    const router = require('express').Router();
    const subRouters = require('dynamic-object-generator')(dir, true);
    
    for (let subRouter of subRouters) {
        router.use(route, subRouter);
    }
    
    return router;
};