const createProxyMiddleware = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/data', {
            target: "http://localhost:8000/data",
            changeOrigin: true
        })
    );
};