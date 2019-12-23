type cacheMiddlewareOptions = {
    userSpecific?: boolean;
};

// eslint-disable-next-line
const cacheMiddleware = (cache, options?: cacheMiddlewareOptions) => async (req, res, next) => {
    if (!options) {
        options = {};
    }
    let key = req.originalUrl || req.url;
    if (options.userSpecific) key = req.uid + '_' + key;
    const cachedata = await cache.get(key);
    if (cachedata) {
        return res.send(cachedata);
    } else {
        res.sendResponse = res.send;
        res.send = (body): void => {
            cache.set(key, body);
            res.sendResponse(body);
        };
        next();
    }
};

export default cacheMiddleware;
