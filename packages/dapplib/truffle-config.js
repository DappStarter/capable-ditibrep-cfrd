require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note museum company harvest bean off thrive'; 
let testAccounts = [
"0x7ba59f5c59b02b0f3fc7accc96db5ffbef2264e51139df3aa0e7613b7fc0a474",
"0x0f81ce73abc2577ec289d9ecea6167e689341fe603a298069b144e8fdb2ae41a",
"0xcadb31c639d91002c99d8210ce382016ca1e80affcb86cd3f81579220a92f26c",
"0xa8b3f3b40e02a7e8aa4baad3639142d1b232bda5b53d73f8988e0034a1d5bf8c",
"0x89013a3689e42d284f4507dcedef7ee3512578bb2cd691c3fdd3a110494a79f6",
"0xb6b90c1ad7c5dd0908468532f5ac390a4d3b9dc4e98825d6e507af6629b0b98b",
"0x014b6415d1c5d8c15c7c810c415bc8ae090d71f0c6240237636fc1f2687994f2",
"0x04b4e1dbe25a2652c6002cf40e54ce019db1146ad743cfc6fefb5e4d45e443e4",
"0xb5d3040febadf7f8baa4120cc26304e937107d2d413954c5321485947b27cc54",
"0x22d38924500152c08b971aea386acf5af8c5c89e9671a40c5bd423519e06dcb6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

