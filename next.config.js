module.exports = {
    env: {
        serverUrl: 'http://192.168.88.78:1338',
        // serverUrl: 'http://localhost:1338',
        // serverUrl: 'http://192.168.0.105:1338',
        frontUrl: 'http://localhost',
        // frontUrl: 'https://e-shop-front.vercel.app',
        // frontUrl: 'https://e-shop-front.herokuapp.com',
        // frontUrl: 'http://188.166.188.164:4000',
        productUrl: '/product/',
        newsUrl: '/news/',
    }
}

// module.exports = {
//     compress: false,
// }

// const securityHeaders = []

// module.exports = {
//   async headers() {
//     return [
//       {
//         // Apply these headers to all routes in your application.
//         source: '/(.*)',
//         headers: securityHeaders,
//       },
//     ]
//   },
// }

// module.exports = {
//     generateEtags: false,
// }