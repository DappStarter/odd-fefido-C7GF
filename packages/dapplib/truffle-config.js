require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area smoke filter cruise museum toward coral light army gate'; 
let testAccounts = [
"0x6508bb605a5f530e81f5b20ecdb6c0b74313e78db229573e2d0274af002c665c",
"0x979e2c2fe557916e40b0edffb2e5535075592e93fd3687788471743e12ffc9f8",
"0x27ef9b1e4973c5e64e2c5a1c56b5da74a1da4cfc28da49feb559603baa1fa7f8",
"0x9632a14b80ceff5d08ff8c04c4ca51c7a4cafd6908269ff31ec3e50ec90b5198",
"0x91ccf7087ee1597e932f0a7e5187b2736e5f19ac19412a636e324e18dcdda1f2",
"0xa2ef54af02ab1f91b17cbc359875876ddb78e062de4541f567d143137f813d35",
"0x060f5237ba732ae0a752b179cc8285e2bc007bef25c0ecfdbd24e9c26f8118b6",
"0xe5906f60103c27b3f38a53b458d562c28421b791c01ef4f86022bb955b20d2b0",
"0xb5cb3c51732646ac0f2f894fa8a2dca7c7511c965d2aab51f0117f234356d750",
"0x4cb400fc61d9b6080f1a78a60ad24530cfbe785e9a7225a94eecb4749960091d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


