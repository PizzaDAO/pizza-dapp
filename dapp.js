  const NETWORK = 'ropsten'
  const MULTISIG_ADDRESS = '0xBA5E28a2D1C8cF67Ac9E0dfc850DC8b7b21A4DE2'
  const BOX_ADDRESS = '0xd2cc31bd3fbcba9c891d440fb96727ba1eeb53f4'
  const PIZZA_ADDRESS = '0xE6616436Ff001Fe827e37C7FaD100f531D0935f0'
  const BOX_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"old","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"}],"name":"BTCETHPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"artworkURI","type":"uint256"}],"name":"InternalArtworkAssigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"PresaleAllowedUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"old","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"}],"name":"SaleStartTimestampUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldConsumer","type":"address"},{"indexed":false,"internalType":"address","name":"newConsumer","type":"address"}],"name":"VRFConsumerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimStarted","type":"event"},{"inputs":[],"name":"MAX_MINTABLE_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PURCHASABLE_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TOKEN_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_minted_pizza_count","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_purchased_pizza_count","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_uriBase","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"batchMintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"batchMintRandom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bitcoinPriceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimWhiteList","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"claims","outputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"random","type":"uint256"},{"internalType":"enum RarePizzasBoxV4.claimStatus","name":"status","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"completeClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finishBatchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"request","type":"bytes32"},{"internalType":"uint256","name":"random","type":"uint256"}],"name":"fulfillRandomness","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBitcoinPriceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPriceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"chainlinkBTCETHFeed","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"toPizzaiolo","type":"address"},{"internalType":"uint8","name":"count","type":"uint8"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"prePurchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"preSaleWhitelist","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleStart_timestampInS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"toPaisano","type":"address"}],"name":"purchaseTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"count","type":"uint8"},{"internalType":"address[]","name":"toPaisanos","type":"address[]"}],"name":"setPresaleAllowed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epochSeconds","type":"uint256"}],"name":"setSaleStartTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"b","type":"bytes32"}],"name":"setSaleWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"consumer","type":"address"}],"name":"setVRFConsumer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"b","type":"bytes32"}],"name":"setclaimWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"startBatchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"enum RarePizzasBoxV3Fix.batchMintStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fallbackValue","type":"uint256"}],"name":"updateBitcoinPriceInWei","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  const PIZZA_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"artworkURI","type":"bytes32"}],"name":"InternalArtworkAssigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previous","type":"address"},{"indexed":false,"internalType":"address","name":"current","type":"address"}],"name":"OrderAPIClientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previous","type":"address"},{"indexed":false,"internalType":"address","name":"current","type":"address"}],"name":"RarePizzasBoxContractUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"state","type":"bool"}],"name":"SaleActive","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_uriBase","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"}],"name":"addressOfRedeemer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"request","type":"bytes32"},{"internalType":"bytes32","name":"result","type":"bytes32"}],"name":"fulfillResponse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"rarePizzasBoxContract","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"}],"name":"isRedeemed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"},{"internalType":"uint256","name":"recipeId","type":"uint256"}],"name":"redeemRarePizzasBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"orderAPIClient","type":"address"}],"name":"setOrderAPIClient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes32","name":"artworkURI","type":"bytes32"}],"name":"setPizzaArtworkURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"boxContract","type":"address"}],"name":"setRarePizzasBoxContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleSaleIsActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

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
    //const contractLabel = document.querySelector('#contractLabel')
    const txLabel = document.querySelector('#txLabel')
    const boxId = document.querySelector('#BoxID')
    const checkButton = document.querySelector('#checkButton')
    const disabledOrder = document.querySelector('#disabledOrder')
    const selectBox = document.querySelector('#selectBox')
    const selectRecipe = document.querySelector('#selectRecipe')
    const bakePie = document.querySelector('#bakePie')

    // Setting initial values
    pizzasLabel.innerHTML = '--'
    //contractLabel.innerHTML = `Contract Address: <p> <a href='https://${NETWORK}etherscan.io/address/${BOX_ADDRESS}' target='_blank'>${BOX_ADDRESS}</a> </p>`

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
      console.log("handling user")

      // testing web3.isconnected
      window.web3.eth.net.isListening()
       .then(() => console.log('is connected'))
       .catch(e => console.log('Wow. Something went wrong: '+ e))

      web3.eth.getAccounts()
        .then(async (accounts) => {
          addresses = accounts

          if (!accounts.length) {
            walletAddress = 0
            walletButton.innerHTML = '<center>Connect Wallet</center>'
          } else {
            walletAddress = accounts[0]
            walletButton.innerHTML = '<center>Disconnect</center>'
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

    const walletButtonHandler = () => {
      console.log('Wallet button pressed')

      PizzaInstance.methods.isRedeemed(19).call()
        .then((value) => {
          console.log('isRedeemed: ', value)
        })
        .catch((error) => {
          console.log('isRedeemed failed: ', error)
        })

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
