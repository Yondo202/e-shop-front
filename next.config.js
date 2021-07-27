const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
    const isSTaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
    
    const env = {
        serverUrl:(()=>{
            if(isDev) return 'http://localhost:1338'
            if(isProd) return 'https://28c89026ab48.ngrok.io'
            if(isSTaging) return 'https://28c89026ab48.ngrok.io'
        })(),
        frontUrl:(()=>{
            if(isDev) return 'http://localhost'
            if(isProd) return 'https://e-shop-front.vercel.app'
            if(isSTaging) return 'https://e-shop-front.vercel.app'
        })(),
        productUrl:(()=>{
            return '/product/'
        })(),
        newsUrl:(()=>{
            return '/news/'
        })(),
        cart:(()=>{
            return 'cart-items'
        })()

        //infosystem
        // serverUrl: 'http://188.166.188.164:1338',


        //huygaa ahiin
        // serverUrl: 'http://192.168.88.78:1338',

        //test
        // serverUrl: 'https://28c89026ab48.ngrok.io',
        // frontUrl: 'https://e-shop-front.vercel.app',

        // serverUrl: 'http://192.168.88.232:1338',
        // frontUrl: 'http://192.168.88.232:4000',

        // serverUrl: 'http://localhost:1338',
        // frontUrl: 'http://localhost',
        // productUrl: '/product/',
        // newsUrl: '/news/',
    }
    return{
        env,
    }
}

