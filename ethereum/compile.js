const path = require('path');
const fs = require('fs');
const solc = require('solc');


const contractPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol': { 
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'], 
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Campaign.sol'];


const buildPath = path.resolve(__dirname, 'build');
fs.mkdirSync(buildPath, { recursive: true });


for (let contract in output) {
    fs.writeFileSync(
        path.resolve(buildPath, contract + '.json'),
        JSON.stringify(output[contract], null, 2) 
    );
}
