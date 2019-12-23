# Express caching middleware

## What is this?

Small express middleware package used for caching endpoints in express

## How to install?

Install using `npm install --save express-caching-middleware`

Then, import using normal import: `import cacheMiddleware from 'express-caching-middleware';`

## How to use?

After importing, use it as normal middleware. The middleware accepts 2 arguments:
1. caching object
2. options object

Caching object is a class with at least a get + set method available. 
Options object has multiple properties:
-userSpecific (default true): if set to true, middleware checks for a 'uid' property on the req object, and adds that to key. 



