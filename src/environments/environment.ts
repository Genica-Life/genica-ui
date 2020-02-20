// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const chain = '5edba2817f22e78659b946bb040f57306b9046fa8724f9dfd4c9615e4389a9d1';
export const environment = {
    production: false,
    appName: 'EOSweb',
    network: {
        blockchain: 'eos',
        host: '192.168.10.230',
        port: 8888,
        protocol: 'http',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'http://192.168.10.230:8888',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'GNC',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'GNC',
       convertToUSD: true,
       customBalance: false,
       logo: '/assets/images/eosweb.png',
       name: {
          big: 'gnc',
          small: 'web'
       },
       nets: [{ name: 'Mainnet', url: 'https://eosweb.net', active: true },
              { name: 'Jungle', url: 'https://jungle.eosweb.net', active: false },
              { name: 'Europechain', url: 'https://xec.eosweb.net', active: false },
              { name: 'WAX', url: 'https://wax.eosweb.net', active: false }],
       disableNets: false,
       voteDonationAcc: 'eoswebnetbp1',
       disableVoteDonation: false,
       version: '2.2.8',
       producers: 1000,
       social: [
         { link: '', icon: 'fa-github' },
         { link: '', icon: 'fa-facebook' },
         { link: '', icon: 'fa-reddit-alien' },
         { link: 'https://medium.com/europechain', icon: 'fa-medium' },
         { link: 'https://twitter.com/europechain_', icon: 'fa-twitter' },
         { link: 'https://t.me/europechain', icon: 'fa-telegram-plane' }
       ],
       liveTXenable: true
    }
};

/*const chain = '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4';
export const environment = {
    production: true,
    appName: 'WAXweb',
    network: {
        blockchain: 'eos',
        host: 'wax.cryptolions.io',
        port: 443,
        protocol: 'https',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'https://wax.cryptolions.io',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'WAX',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'WAX',
       convertToUSD: true,
       customBalance: false,
       logo: '/assets/images/wax.png',
       name: {
          big: 'wax',
          small: 'web'
       },
       nets: [{ name: 'Mainnet', url: 'https://eosweb.net', active: false },
              { name: 'Jungle', url: 'https://jungle.eosweb.net', active: false },
              { name: 'Europechain', url: 'https://xec.eosweb.net', active: false },
              { name: 'WAX', url: 'https://wax.eosweb.net', active: true },
              { name: 'LYNX', url: 'https://lynx.eosweb.net', active: false }],
       disableNets: false,
       voteDonationAcc: 'cryptolions1',
       disableVoteDonation: false,
       version: '1.0.0',
       producers: 1000,
       social: [
         { link: 'https://github.com/orange1337/eosweb', icon: 'fa-github' },
         { link: 'https://www.facebook.com/EOSwebnet-199076424068961', icon: 'fa-facebook' },
         { link: 'https://www.reddit.com/user/eosweb', icon: 'fa-reddit-alien' },
         { link: 'https://medium.com/@EoswebN', icon: 'fa-medium' },
         { link: 'https://twitter.com/EoswebN', icon: 'fa-twitter' },
         { link: 'https://t.me/eoswebdevchat', icon: 'fa-telegram-plane' }
       ],
       liveTXenable: true
    }
};*/
