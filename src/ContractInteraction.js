import Web3 from 'web3';

const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // Replace with the actual address of your deployed smart contract
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "registrationNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"name": "AccidentReported",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_registrationNumber",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "addMaintenanceRecord",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "registrationNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "expirationTimestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "provider",
				"type": "string"
			}
		],
		"name": "InsuranceInfoUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "registrationNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"name": "MaintenanceRecordAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_registrationNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_make",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_model",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_manufactureYear",
				"type": "uint256"
			}
		],
		"name": "registerVehicle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_registrationNumber",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "reportAccident",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_registrationNumber",
				"type": "string"
			}
		],
		"name": "reportTheft",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "registrationNumber",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "reporter",
				"type": "address"
			}
		],
		"name": "TheftReported",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_registrationNumber",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_expirationTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_provider",
				"type": "string"
			}
		],
		"name": "updateInsuranceInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "registrationNumber",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "VehicleRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "accidentReports",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_registrationNumber",
				"type": "string"
			}
		],
		"name": "getAccidentReports",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					}
				],
				"internalType": "struct VehicleRegistration.AccidentReport[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_registrationNumber",
				"type": "string"
			}
		],
		"name": "getInsuranceInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "expirationTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "provider",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_registrationNumber",
				"type": "string"
			}
		],
		"name": "getMaintenanceRecords",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					}
				],
				"internalType": "struct VehicleRegistration.MaintenanceRecord[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_registrationNumber",
				"type": "string"
			}
		],
		"name": "getVehicleDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "make",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "model",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "manufactureYear",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isRegistered",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "insuranceInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "expirationTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "provider",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "maintenanceRecords",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "vehicles",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "registrationNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "make",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "model",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "manufactureYear",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isRegistered",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];// Replace with the ABI of your smart contract

// Initialize Web3.js
const web3 = new Web3(window.ethereum);


// Get the contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to register a vehicle
export const registerVehicle = async (registrationNumber, make, model, manufactureYear) => {
  const accounts = await web3.eth.getAccounts();

  // Call the 'registerVehicle' function of the smart contract
  await contract.methods.registerVehicle(registrationNumber, make, model, manufactureYear).send({
    from: accounts[0],
  });
};

// Function to report theft
export const reportTheft = async (registrationNumber) => {
  const accounts = await web3.eth.getAccounts();

  // Call the 'reportTheft' function of the smart contract
  await contract.methods.reportTheft(registrationNumber).send({
    from: accounts[0],
  });
};

// Function to add a maintenance record
export const addMaintenanceRecord = async (registrationNumber, timestamp, description) => {
  const accounts = await web3.eth.getAccounts();

  // Call the 'addMaintenanceRecord' function of the smart contract
  await contract.methods.addMaintenanceRecord(registrationNumber, timestamp, description).send({
    from: accounts[0],
  });
};

// Function to report an accident
export const reportAccident = async (registrationNumber, timestamp, description) => {
  const accounts = await web3.eth.getAccounts();

  // Call the 'reportAccident' function of the smart contract
  await contract.methods.reportAccident(registrationNumber, timestamp, description).send({
    from: accounts[0],
  });
};

// Function to get vehicle details
export const getVehicleDetails = async (registrationNumber) => {
  // Call the 'getVehicleDetails' function of the smart contract
  return contract.methods.getVehicleDetails(registrationNumber).call();
};

// Function to get maintenance records
export const getMaintenanceRecords = async (registrationNumber) => {
  // Call the 'getMaintenanceRecords' function of the smart contract
  return contract.methods.getMaintenanceRecords(registrationNumber).call();
};

// Function to get accident reports
export const getAccidentReports = async (registrationNumber) => {
  // Call the 'getAccidentReports' function of the smart contract
  return contract.methods.getAccidentReports(registrationNumber).call();
};

// Import Web3 and the contract instance (if not already imported)

// Function to update insurance information
export const updateInsuranceInfo = async (registrationNumber, expirationTimestamp, provider) => {
	const accounts = await web3.eth.getAccounts();
  
	// Call the 'updateInsuranceInfo' function of the smart contract
	await contract.methods.updateInsuranceInfo(registrationNumber, expirationTimestamp, provider).send({
	  from: accounts[0],
	});
  };
  
