  const NETWORK = ''
  const MULTISIG_ADDRESS = '0xBA5E28a2D1C8cF67Ac9E0dfc850DC8b7b21A4DE2'
  const BOX_ADDRESS = '0x4ae57798AEF4aF99eD03818f83d2d8AcA89952c7'
  const PIZZA_ADDRESS = '0xE6616436Ff001Fe827e37C7FaD100f531D0935f0'
  const BOX_ABI = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'old',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'current',
          type: 'uint256'
        }
      ],
      name: 'BTCETHPriceUpdated',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      inputs: [ ],
      name: 'getBitcoinPriceInWei',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ ],
      name: 'getPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ ],
      name: 'getPriceInWei',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ ],
      name: 'maxSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ ],
      name: 'publicSaleStart_timestampInS',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ ],
      name: 'purchase',
      outputs: [ ],
      stateMutability: 'payable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'tokenURI',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [ ],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ]
  const PIZZA_ABI = [
    {
      "name": "Approval",
      "anonymous": false,
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "approved",
          "type": "address",
          "indexed": true,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": true,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "type": "event",
      "_isFragment": true
    },
    {
      "name": "ApprovalForAll",
      "anonymous": false,
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "approved",
          "type": "bool",
          "indexed": false,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bool",
          "_isParamType": true
        }
      ],
      "type": "event",
      "_isFragment": true
    },
    {
      "name": "InternalArtworkAssigned",
      "anonymous": false,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": false,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        },
        {
          "name": "artworkURI",
          "type": "bytes32",
          "indexed": false,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bytes32",
          "_isParamType": true
        }
      ],
      "type": "event",
      "_isFragment": true
    },
    {
      "name": "OrderAPIClientUpdated",
      "anonymous": false,
      "inputs": [
        {
          "name": "previous",
          "type": "address",
          "indexed": false,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "current",
          "type": "address",
          "indexed": false,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "type": "event",
      "_isFragment": true
    },
    {
      "name": "OwnershipTransferred",
      "anonymous": false,
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "type": "event",
      "_isFragment": true
    },
    {
      "name": "RarePizzasBoxContractUpdated",
      "anonymous": false,
      "inputs": [
        {
          "name": "previous",
          "type": "address",
          "indexed": false,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "current",
          "type": "address",
          "indexed": false,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "type": "event",
      "_isFragment": true
    },
    {
      "name": "SaleActive",
      "anonymous": false,
      "inputs": [
        {
          "name": "state",
          "type": "bool",
          "indexed": false,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bool",
          "_isParamType": true
        }
      ],
      "type": "event",
      "_isFragment": true
    },
    {
      "name": "Transfer",
      "anonymous": false,
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": true,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "type": "event",
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "_uriBase",
      "constant": true,
      "inputs": [],
      "outputs": [
        {
          "name": null,
          "type": "string",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "string",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "addressOfRedeemer",
      "constant": true,
      "inputs": [
        {
          "name": "boxTokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [
        {
          "name": null,
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "approve",
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "balanceOf",
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "outputs": [
        {
          "name": null,
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "contractURI",
      "constant": true,
      "inputs": [],
      "outputs": [
        {
          "name": null,
          "type": "string",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "string",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "fulfillResponse",
      "constant": false,
      "inputs": [
        {
          "name": "request",
          "type": "bytes32",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bytes32",
          "_isParamType": true
        },
        {
          "name": "result",
          "type": "bytes32",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bytes32",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "getApproved",
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [
        {
          "name": null,
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "initialize",
      "constant": false,
      "inputs": [
        {
          "name": "rarePizzasBoxContract",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "outputs": [
        {
          "name": null,
          "type": "bool",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bool",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "isRedeemed",
      "constant": true,
      "inputs": [
        {
          "name": "boxTokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [
        {
          "name": null,
          "type": "bool",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bool",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "name",
      "constant": true,
      "inputs": [],
      "outputs": [
        {
          "name": null,
          "type": "string",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "string",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "owner",
      "constant": true,
      "inputs": [],
      "outputs": [
        {
          "name": null,
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "ownerOf",
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [
        {
          "name": null,
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "redeemRarePizzasBox",
      "constant": false,
      "inputs": [
        {
          "name": "boxTokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        },
        {
          "name": "recipeId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "constant": false,
      "inputs": [],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "to",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "to",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        },
        {
          "name": "_data",
          "type": "bytes",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bytes",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "saleIsActive",
      "constant": true,
      "inputs": [],
      "outputs": [
        {
          "name": null,
          "type": "bool",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bool",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "constant": false,
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "approved",
          "type": "bool",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bool",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "setContractURI",
      "constant": false,
      "inputs": [
        {
          "name": "URI",
          "type": "string",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "string",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "setOrderAPIClient",
      "constant": false,
      "inputs": [
        {
          "name": "orderAPIClient",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "setPizzaArtworkURI",
      "constant": false,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        },
        {
          "name": "artworkURI",
          "type": "bytes32",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bytes32",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "setRarePizzasBoxContract",
      "constant": false,
      "inputs": [
        {
          "name": "boxContract",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bytes4",
          "_isParamType": true
        }
      ],
      "outputs": [
        {
          "name": null,
          "type": "bool",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "bool",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "symbol",
      "constant": true,
      "inputs": [],
      "outputs": [
        {
          "name": null,
          "type": "string",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "string",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "toggleSaleIsActive",
      "constant": false,
      "inputs": [],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "tokenByIndex",
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [
        {
          "name": null,
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "tokenOfOwnerByIndex",
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "index",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [
        {
          "name": null,
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "tokenURI",
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [
        {
          "name": null,
          "type": "string",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "string",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "totalSupply",
      "constant": true,
      "inputs": [],
      "outputs": [
        {
          "name": null,
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "transferFrom",
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "to",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "uint256",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "indexed": null,
          "components": null,
          "arrayLength": null,
          "arrayChildren": null,
          "baseType": "address",
          "_isParamType": true
        }
      ],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    },
    {
      "type": "function",
      "name": "withdraw",
      "constant": false,
      "inputs": [],
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "gas": null,
      "_isFragment": true
    }
  ]

  let BoxInstance
  let PizzaInstance
  let maxSupply = 10000
  let totalSupply = 0
  let buyPrice = 0.08
  let walletAddress = 0
  let addresses = 0
  let ethPrice = 2045 // fallback (only used on v1 where pizza estimate were shown)
  let metamaskInstalled = false

  // Helpers
  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  const onLoadHandler = () => {

    // Loading UI components
    const walletButton = document.querySelector('#walletButton')
    const pizzasLabel = document.querySelector('#pizzasLabel')
    const selectMintQuantity = document.querySelector('#selectionMintQuantity')
    const buyButton = document.querySelector('#buyButton')
    const contractLabel = document.querySelector('#contractLabel')
    const txLabel = document.querySelector('#txLabel')
    const boxId = document.querySelector('#BoxID')
    const checkButton = document.querySelector('#checkButton')
    const disabledOrder = document.querySelector('#disabledOrder')
    const selectBox = document.querySelector('#selectBox')
    const selectRecipe = document.querySelector('#selectRecipe')
    const bakePie = document.querySelector('#bakePie')

    // Setting initial values
    pizzasLabel.innerHTML = '--'
    contractLabel.innerHTML = `Contract Address: <p> <a href='https://${NETWORK}etherscan.io/address/${BOX_ADDRESS}' target='_blank'>${BOX_ADDRESS}</a> </p>`

    // Actions
    const promptMetamask = () => {
      window.ethereum.enable()
        .then(async () => {
          walletButton.innerHTML = '<center>Disconnect</center>'
        }).catch((err) => {
          console.log(err)
        })
    }

    const triggerPurchase = () => {
      txLabel.innerHTML = 'Waiting for confirmation'

      hide(buyButton)

      const gasPrice = 145
      const gasLimit = 256 * 1000

      let txHash = 0

      BoxInstance.methods.getPrice().call()
        .then((weiValue) => {
          console.log('weiValue: ', weiValue)

          const roundAmount = parseFloat(1.2 * weiValue).toFixed(0)

          BoxInstance.methods.purchase().send({
            from: walletAddress,
            value: (roundAmount),
            gasPrice: web3.utils.toHex(gasPrice * 1e9),
            gasLimit: web3.utils.toHex(gasLimit)
          })
            .on('transactionHash', (hash) => {
              console.log('transactionHash: ', hash)

              txHash = hash
            })
            .on('receipt', (receipt) => {
              console.log('receipt: ', receipt)

              txLabel.innerHTML = `Transaction confirmed, enjoy your 🍕! <p>
                <a href='https://${NETWORK}etherscan.io/tx/${txHash}' target='_blank'> Transaction link </a> </p>`

              updateValues()
              display(buyButton)
            })
            .on('error', (err, receipt) => {
              console.log('Transaction failed: ', err, 'br/', receipt)

              if (err.code === 4001) {
                txLabel.innerHTML = 'Transaction rejected'
              } else {
                txLabel.innerHTML = 'Something went wrong, try again!'
              }
              display(buyButton)
            })
        })
        .catch((error) => {
          console.log('getPrice failed: ', error)
          txLabel.innerHTML = 'Something went wrong, try again!'
        })
    }

    const updateValues = () => {

      BoxInstance.methods.maxSupply().call()
        .then((amount) => {
          maxSupply = amount

          pizzasLabel.innerHTML = numberWithCommas(maxSupply - totalSupply - 1250)
        })
        .catch((error) => {
          console.log('maxSupply failed: ', error)
        })

      BoxInstance.methods.totalSupply().call()
        .then((amount) => {
          totalSupply = amount

          pizzasLabel.innerHTML = numberWithCommas(maxSupply - totalSupply - 1250)
        })
        .catch((error) => {
          console.log('totalSupply failed: ', error)
        })

    }

    const handleUser = () => {
      web3.eth.getAccounts()
        .then(async (accounts) => {
          addresses = accounts

          if (!accounts.length) {
            walletButton.innerHTML = '<center>Connect Wallet</center>'
          } else {
            walletButton.innerHTML = '<center>Connected</center>'
          }
        }).catch((err) => {
          console.log('Error fetching accounts: ', err)
        })
    }

    const buyButtonHandler = () => {
      console.log('Buy button pressed')

      handleUser()

      if (!addresses.length) {
        promptMetamask()
      } else {
        triggerPurchase()
      }
    }

    const walletButtonHandler = () => {
      console.log('Wallet button pressed')

      // PizzaInstance.methods.isRedeemed(19).call()
      //   .then((value) => {
      //     console.log('isRedeemed: ', value)
      //   })
      //   .catch((error) => {
      //     console.log('isRedeemed failed: ', error)
      //   })

        console.log("checkingMetamask")

      if (metamaskInstalled) {
        promptMetamask()
      } else {
        window.open('https://www.metamask.io')
      }
    }

    const hide = (element) => {
      element.style.display = 'none'
    }

    const display = (element) => {
      element.style.display = 'block'
    }

    const getEthPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const result = await response.json()
        ethPrice = result.ethereum.usd
      } catch (error) {
        console.log(error);
      }
    }

    const startApp = async () => {
      BoxInstance = new web3.eth.Contract(BOX_ABI, BOX_ADDRESS)
      PizzaInstance = new web3.eth.Contract(PIZZA_ABI, PIZZA_ADDRESS)

      BoxInstance.events.Transfer((err, e) => { console.log(e) })
        .on('data', (e) =>{
          console.log('event: ', e)
          updateValues()
        })
        .on('changed', (i) => {
          console.log('changed: ', i)
        })
        .on('error on Transfer', console.error)

      updateValues()
      handleUser()
    }

    const initWeb3 = () => {
      if (window.ethereum) {
        console.log('Window.ethereum exists')

        metamaskInstalled = true
        window.web3 = new Web3(window.ethereum)

        startApp()
      } else if (window.web3) {
        console.log('Window.web3 exists')

        metamaskInstalled = true
        window.web3 = new Web3(window.web3.currentProvider)

        startApp()
      } else if (isMobile) {
        console.log('Mobile initiated')

        metamaskInstalled = true
        startApp()
      } else {
        console.log('Non-ethereum browser detected')

        window.alert('Browser not compatible. Try Chrome and MetaMask!')

        txLabel.innerHTML = 'Try Chrome and MetaMask!'
        metamaskInstalled = false
      }
    }

    initWeb3()

    walletButton.addEventListener('click', walletButtonHandler)
    buyButton.addEventListener('click', buyButtonHandler)
  }

  window.addEventListener('load', onLoadHandler, { once: true })
