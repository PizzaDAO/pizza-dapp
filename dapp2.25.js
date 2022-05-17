  // // Ropsten
  // const NETWORK = 'ropsten.'
  // const BOX_ADDRESS = '0x49700447bd9ea896f2f999c1bf20eb630d2c65e4'
  // const PIZZA_ADDRESS = '0x034bca7eb8d705f2a52bba52b94e98161d5370d4'
  // // Mainnet
  const NETWORK = ''
  const BOX_ADDRESS = '0x8f5AE25105C3c03Bce89aE3b5ed1E30456755fAb'
  const PIZZA_ADDRESS = '0x4ae57798AEF4aF99eD03818f83d2d8AcA89952c7'
  const MULTISIG_ADDRESS = '0xBA5E28a2D1C8cF67Ac9E0dfc850DC8b7b21A4DE2'

  const BOX_ABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        }
      ],
      "name": "prePurchase",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "purchase",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalNewPurchases",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const PIZZA_ABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "boxTokenId",
          "type": "uint256"
        }
      ],
      "name": "isRedeemed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "boxTokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "recipeId",
          "type": "uint256"
        }
      ],
      "name": "redeemRarePizzasBox",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  const WHITELIST = []

  let BoxInstance
  let PizzaInstance
  let maxNewPurchases = 6000
  let priceInWei = 80000000000000000
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
    const boxesLabel = document.querySelector('#boxesLabel')
    const pizzasLabel = document.querySelector('#pizzasLabel')
    const selectMintQuantity = document.querySelector('#selectionMintQuantity')
    const buyButton = document.querySelector('#buyButton')
    const txLabel = document.querySelector('#txLabel')
    const boxIdField = document.querySelector('#BoxID')
    const checkButton = document.querySelector('#checkButton')
    const boxCheckLabel = document.querySelector('#boxCheckLabel')
    const disabledOrder = document.querySelector('#disabledOrder')
    const selectBox = document.querySelector('#selectBox')
    const selectRecipe = document.querySelector('#selectRecipe')
    const bakePie = document.querySelector('#bakePie')
    const pizzaWarning = document.querySelector('#pizzaWarning')
    const testPurchase = document.querySelector('#testPurchase')
    //const contractLabel = document.querySelector('#contractLabel')
    //contractLabel.innerHTML = `Contract Address: <p> <a href='https://${NETWORK}etherscan.io/address/${BOX_ADDRESS}' target='_blank'>${BOX_ADDRESS}</a> </p>`

    // Actions
    const promptMetamask = () => {
      window.ethereum.enable()
        .then(async () => {
          walletButton.innerHTML = '<center>Connected</center>'
        }).catch((err) => {
          console.log(err)
        })
    }

    const triggerPurchase = () => {
      txLabel.innerHTML = 'Waiting for confirmation'

      hide(buyButton)

      let txHash = 0
      let addressIndex = WHITELIST.indexOf(walletAddress)

      console.log("walletAddress: ", walletAddress)
      console.log("addressIndex: ", addressIndex)

      // if (addressIndex === -1) {
      //   console.log("Not on whitelist")
      // } else {
        console.log("Generating proof")
        //let proof = createPrePurchaseProof(addressIndex)
        let proof = generatePresaleProof(WHITELIST)
        //let proof = proofmtjs(WHITELIST)

        console.log("proof: ", proof)
        console.log("Trying to buy box - presale")
        BoxInstance.methods.prePurchase(proof).send({
          from: walletAddress,
          value: priceInWei
        })
          .on('transactionHash', (hash) => {
            console.log('transactionHash: ', hash)

            txHash = hash
            display(buyButton)
          })
          .on('receipt', (receipt) => {
            console.log('receipt: ', receipt)
            txLabel.innerHTML = `Transaction confirmed, enjoy your 🍕! <p>
              <a href='https://${NETWORK}etherscan.io/tx/${txHash}' target='_blank'> Transaction link </a> </p>`
            updateValues()
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
      //}

    }

    const updateValues = () => {

      // BoxInstance.methods.totalSupply().call()
      //   .then((amount) => {
      //     boxesLabel.innerHTML = numberWithCommas(10000 - 824 - amount)
      //   })
      //   .catch((error) => {
      //     console.log('box totalSupply failed: ', error)
      //   })

      BoxInstance.methods.totalNewPurchases().call()
        .then((amount) => {
          boxesLabel.innerHTML = numberWithCommas(maxNewPurchases - amount)
        })
        .catch((error) => {
          console.log('box totalNewPurchases failed: ', error)
        })

      // // Check number of boxes
      // BoxInstance.methods.balanceOf(walletAddress).call()
      //   .then((balance) => {
      //     pizzasToRedeem = 0
      //     for (let i = 0; i < balance; i++) {
      //
      //       // Check address owned ids
      //       BoxInstance.methods.tokenOfOwnerByIndex(walletAddress, i).call()
      //         .then((boxId) => {
      //           console.log("Owner of boxId: ", boxId)
      //
      //           // Check if it was redeemed
      //           PizzaInstance.methods.isRedeemed(boxIdField.value).call()
      //             .then((value) => {
      //               console.log('isRedeemed: ', value)
      //               if (value) {
      //                 console.log("Box already opened: ", boxId)
      //                 boxCheckLabel.innerHTML = 'Box was already opened!'
      //               } else {
      //                 console.log("Box still closed: ", boxId)
      //                 boxCheckLabel.innerHTML = 'Box is still closed!'
      //                 // Add option to bake pie selector
      //                 var opt = document.createElement('option');
      //                 opt.value = i;
      //                 opt.innerHTML = i;
      //                 selectBox.appendChild(opt)
      //                 pizzasToRedeem++
      //               }
      //             })
      //             .catch((error) => {
      //               boxCheckLabel.innerHTML = 'Error: ' + error
      //               console.log('isRedeemed failed: ', error)
      //             })
      //         })
      //         .catch((error) => {
      //           console.log('Failed to get boxId for index: ', i, ' with error: ', error)
      //         })
      //     }
      //   })
      //   .catch((error) => {
      //     console.log('box totalNewPurchases failed: ', error)
      //   })
      //
      // PizzaInstance.methods.balanceOf(walletAddress).call()
      //   .then((balance) => {
      //     console.log(walletAddress, " owns ", balance, "pizzas")
      //   })
      //   .catch((error) => {
      //     console.log('pizza balanceOf failed: ', error)
      //   })

    }

    const handleUser = () => {
      console.log("handling user")

      web3.eth.getAccounts()
        .then(async (accounts) => {
          addresses = accounts

          if (!accounts.length) {
            walletAddress = 0
            walletButton.innerHTML = '<center>Connect Wallet</center>'
          } else {
            walletAddress = accounts[0]
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
        console.log("prompting metamask")
        promptMetamask()
      } else {
        console.log("triggering purchase")
        triggerPurchase()
      }
    }

    const testPurchaseHandler = () => {
      console.log('Testing purchase')

      handleUser()

      if (!addresses.length) {
        console.log("prompting metamask")
        promptMetamask()
      } else {
        console.log("Trying to purchase")
        BoxInstance.methods.purchase().send({
          from: walletAddress,
          value: priceInWei
        })
          .on('transactionHash', (hash) => {
            console.log('transactionHash: ', hash)

            txHash = hash
            display(buyButton)
          })
          .on('receipt', (receipt) => {
            console.log('receipt: ', receipt)

            txLabel.innerHTML = `Transaction confirmed, enjoy your 🍕! <p>
              <a href='https://${NETWORK}etherscan.io/tx/${txHash}' target='_blank'> Transaction link </a> </p>`

            updateValues()
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
      }
    }

    const bakePieHandler = () => {
      console.log('Bake pie button pressed')

      if (pizzasToRedeem > 0) {

        handleUser()

        if (!addresses.length) {
          console.log("prompting metamask")
          promptMetamask()
        } else {
          console.log("Trying to bake")
          PizzaInstance.methods.redeemRarePizzasBox(parseFloat(selectBox.value), parseFloat(selectRecipe.value)).send()
            .on('transactionHash', (hash) => {
              console.log('transactionHash: ', hash)

              txHash = hash
              display(buyButton)
            })
            .on('receipt', (receipt) => {
              console.log('receipt: ', receipt)

              pizzaWarning.innerHTML = `Transaction confirmed, enjoy your 🍕! <p>
                <a href='https://${NETWORK}etherscan.io/tx/${txHash}' target='_blank'> Transaction link </a> </p>`

              updateValues()
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
        }

      }

    }

    const checkButtonHandler = () => {
      console.log('Check button pressed')

      if (!addresses.length) {
        console.log("prompting metamask")
        promptMetamask()
      } else {
        console.log("checking redeemed: ", boxIdField.value)
        PizzaInstance.methods.isRedeemed(boxIdField.value).call()
          .then((value) => {
            console.log('isRedeemed: ', value)
            if (value) {
              boxCheckLabel.innerHTML = 'Box was already opened!'
            } else {
              boxCheckLabel.innerHTML = 'Box is still closed!'
            }
          })
          .catch((error) => {
            boxCheckLabel.innerHTML = 'Error: ' + error
            console.log('isRedeemed failed: ', error)
          })
      }
    }

    const walletButtonHandler = () => {
      console.log('Wallet button pressed')

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

    const createPrePurchaseProof = (indexOfUser) => {
      // Trying to follow Rhiz's frontend example:
      // https://github.com/PizzaDAO/pizza-dapp/blob/a0c6a8dd7aafd9e01b5bf3f54635715e2fc5ef70/dapp.html#L1378
     const claimListHashes = WHITELIST.map((item) =>
         web3.utils.soliditySha3(item.toLowerCase())
     );
     const claimListMerkleTree = new MerkleTree(claimListHashes, keccak256.keccak256, { sort: true });
     let proof = claimListMerkleTree.getProof(claimListHashes[indexOfUser]);
     proof = proof.map((item) => '0x' + item.data.toString('hex'));
     return proof
    }

    const generatePresaleProof = (claimList) => {
      // Trying to follow Rhiz's generatePreSaleProof
      // https://github.com/PizzaDAO/pizza-smartcontract/blob/v4/scripts/generatePreSaleProof.js
      const leaves = []
      const data = []

      claimList.forEach((item) => {
        if (!data.includes(item.address.toLowerCase())) {
          data.push(item.address.toLowerCase())

          leaves.push(ethers.utils.solidityKeccak256(['address'], [item.address.toLowerCase()]))
        }
      })
      const claimListMerkleTree = new MerkleTree(leaves, keccak256, { sort: true })
      return { tree: claimListMerkleTree, root: '0x' + claimListMerkleTree.getHexRoot(), data: data }
    }

    const proofmtjs = (claimList) => {
      // Trying to follow official example from https://www.npmjs.com/package/merkletreejs
      const leaves = (claimList).map(x => ethers.utils.solidityKeccak256(x.toLowerCase()))
      const tree = new MerkleTree(leaves, keccak256)
      const leaf = ethers.utils.solidityKeccak256(walletAddress.toLowerCase())
      const proof = tree.getProof(leaf)
      return proof
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
    checkButton.addEventListener('click', checkButtonHandler)
    bakePie.addEventListener('click', bakePieHandler)
    testPurchase.addEventListener('click', testPurchaseHandler)
  }

  window.addEventListener('load', onLoadHandler, { once: true })
