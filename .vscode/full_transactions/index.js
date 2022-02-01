/*######################################
## CONFIGURATION ##
###################################### */

// Step 1: Set up the appropriate configuration
const Web3 = require("web3");
const EthereumTx = require('ethereumjs-tx').Transaction;
const web3 = new Web3('HTTP://127.0.0.1:7545');

// Step2: Set the sending and receiving address for the transaction
const sendingAddress = '0xc26FfE917575eCD54526c85E3f83C4222b80E021';
const receivingAddress = '0x741600490134eCD7A8BF3A9D4e183B66c3aC889f';


// Step3: Check the balances of each address
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

/*######################################
## CREATE TRANSACTION ##
###################################### */

//Step4 setup transaction usin the transaction variables as shown

const rawTransaction = {
    nonce: 1,
    to: receivingAddress,
    gasPrice: 30000000,
    gasLimit: 30000,
    value: 100,
    data: "0x",
}

/*######################################
## Sign the transaction ##
###################################### */

//Step7 Sign the transaction with the Hex value of the private key of the sender
const privateKeySender = 'ab94e9c413096aeb7d5e1d81c1418e5f6b216c5f098f887a9eb92da6b5d05b4a';
const privateKeySenderHex = Buffer.from(privateKeySender, 'hex');
const transaction = new EthereumTx(rawTransaction);
transaction.sign(privateKeySenderHex);

/*######################################
## Send the transaction to the network ##
###################################### */

// Step 8: Send the serialized signed transaction to the Ethereum network
const serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);



