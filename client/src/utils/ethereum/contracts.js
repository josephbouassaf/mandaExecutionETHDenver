import { web3 } from "./web3";
const fs = require('fs');
const contract = JSON.parse(fs.readFileSync('../../../build/contracts/MyToken.json', 'utf8'));
const abi = JSON.stringify(contract.abi);

// get deployed instances