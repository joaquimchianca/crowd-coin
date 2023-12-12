const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
'defense post boss auto depend antenna invite simple defense flavor enemy meadow',
  'https://sepolia.infura.io/v3/e1e0a8a1a9e04bddb72b6f40ef3cf3bc'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    compiledFactory.abi
  )
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: '3000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};

deploy();
