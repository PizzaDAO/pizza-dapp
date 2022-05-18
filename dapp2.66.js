  // Ropsten
  const NETWORK = 'rinkeby.'
  const BOX_ADDRESS = '0x8f5AE25105C3c03Bce89aE3b5ed1E30456755fAb'
  //const BOX_ADDRESS = '0xA61Ff9D3de8E58FB8D7dF9b98922775c513361Bf'
  const PIZZA_ADDRESS = '0x034bca7eb8d705f2a52bba52b94e98161d5370d4'
  // // // Mainnet
  // const NETWORK = ''
  // const BOX_ADDRESS = '0x4ae57798aef4af99ed03818f83d2d8aca89952c7'
  // const PIZZA_ADDRESS = '0xe6616436ff001fe827e37c7fad100f531d0935f0'
  // const MULTISIG_ADDRESS = '0xBA5E28a2D1C8cF67Ac9E0dfc850DC8b7b21A4DE2'

const BOX_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"old","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"}],"name":"BTCETHPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"artworkURI","type":"uint256"}],"name":"InternalArtworkAssigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"PresaleAllowedUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"old","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"}],"name":"SaleStartTimestampUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldConsumer","type":"address"},{"indexed":false,"internalType":"address","name":"newConsumer","type":"address"}],"name":"VRFConsumerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimStarted","type":"event"},{"inputs":[],"name":"MAX_MINTABLE_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PURCHASABLE_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TOKEN_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_minted_pizza_count","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_purchased_pizza_count","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_uriBase","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"batchMintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"batchMintRandom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bitcoinPriceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimWhiteList","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"claims","outputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"random","type":"uint256"},{"internalType":"enum RarePizzasBoxV4.claimStatus","name":"status","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"completeClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finishBatchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"request","type":"bytes32"},{"internalType":"uint256","name":"random","type":"uint256"}],"name":"fulfillRandomness","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBitcoinPriceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPriceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"chainlinkBTCETHFeed","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNewPurchases","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"toPizzaiolo","type":"address"},{"internalType":"uint8","name":"count","type":"uint8"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"prePurchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"preSaleWhitelist","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleStart_timestampInS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"toPaisano","type":"address"}],"name":"purchaseTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"n","type":"uint256"}],"name":"setMaxNewPurchases","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"count","type":"uint8"},{"internalType":"address[]","name":"toPaisanos","type":"address[]"}],"name":"setPresaleAllowed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epochSeconds","type":"uint256"}],"name":"setSaleStartTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"b","type":"bytes32"}],"name":"setSaleWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"consumer","type":"address"}],"name":"setVRFConsumer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"b","type":"bytes32"}],"name":"setclaimWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"startBatchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"enum RarePizzasBoxV3Fix.batchMintStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalNewPurchases","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fallbackValue","type":"uint256"}],"name":"updateBitcoinPriceInWei","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const PIZZA_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"artworkURI","type":"bytes32"}],"name":"InternalArtworkAssigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previous","type":"address"},{"indexed":false,"internalType":"address","name":"current","type":"address"}],"name":"OrderAPIClientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previous","type":"address"},{"indexed":false,"internalType":"address","name":"current","type":"address"}],"name":"RarePizzasBoxContractUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"state","type":"bool"}],"name":"SaleActive","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_uriBase","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"}],"name":"addressOfRedeemer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"request","type":"bytes32"},{"internalType":"bytes32","name":"result","type":"bytes32"}],"name":"fulfillResponse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"rarePizzasBoxContract","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"}],"name":"isRedeemed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"},{"internalType":"uint256","name":"recipeId","type":"uint256"}],"name":"redeemRarePizzasBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"orderAPIClient","type":"address"}],"name":"setOrderAPIClient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes32","name":"artworkURI","type":"bytes32"}],"name":"setPizzaArtworkURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"boxContract","type":"address"}],"name":"setRarePizzasBoxContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleSaleIsActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

  const WHITELIST = [
      {
          "address": "0x0048D02963b97445a012Ad6D44Bd38A0239C5B88"
      },
      {
          "address": "0x00bb9D27Dc01603FAa422E31F51e642C558b9ec8"
      },
      {
          "address": "0x0112E5b880503D80887e9A8713027071117aB707"
      },
      {
          "address": "0x01bD8AaC958c6E728557bcaC756273ddD65bF19C"
      },
      {
          "address": "0x01cB023186CAB05220554EE75b4D69921DD051f1"
      },
      {
          "address": "0x041E42371BD0DdF93c0dFDeAd7e89B3CC9bD9a91"
      },
      {
          "address": "0x0459fB6Db4D1F79F4938A0B077d3aE02405e2525"
      },
      {
          "address": "0x046bBe099CfA0b6cc71d59D6E4Cd38c5d0eEF71b"
      },
      {
          "address": "0x060c8C3e672f85c9cA86d7c3d15c27730b7A6E87"
      },
      {
          "address": "0x069383C54a36be476f53395135E3a5D2864F7870"
      },
      {
          "address": "0x072f38201348Cd61e39f1C41f05295466DCf35F2"
      },
      {
          "address": "0x076a7Bcb5f6803ae24CeCDEDc1f9054E13167E71"
      },
      {
          "address": "0x07F7aD934f81be64046f5E1A792D6c26Bb60972c"
      },
      {
          "address": "0x081E9623A73F4eD41d60ACbD0EF34A66C82c8B99"
      },
      {
          "address": "0x085527735711A744A18d858696aEd46dEaf616BF"
      },
      {
          "address": "0x08971491517FA2b7ae2B7606B4820588B3EBfa98"
      },
      {
          "address": "0x096D22122236B3E62D934EC8354Ef37230F5C9E6"
      },
      {
          "address": "0x09DE262108795dB0037323B95e284825AC67516E"
      },
      {
          "address": "0x09Ee3a243463F3ad0A276db78176DE6cE28Dab0a"
      },
      {
          "address": "0x0A3Eb29Ee9dC31901F201F1a803b977d9daE7172"
      },
      {
          "address": "0x0A3f54c019EbF918CfAA12b7C5ab84956ac43458"
      },
      {
          "address": "0x0a48B91c1560F0B5723ed10BeC1eD39D6eFD78be"
      },
      {
          "address": "0x0a84069C260e28E0bB1C7f3649b8180022aDcE17"
      },
      {
          "address": "0x0B53c82AE0A5caa911AA0C787Ec973cf65D6a6fF"
      },
      {
          "address": "0x0C0265f1Fb8E226564dc130d089525ad57d315e5"
      },
      {
          "address": "0x0c1Bd9C2019e206963A886A2c1E7a0F11A0b634e"
      },
      {
          "address": "0x0c5d6982D0046E50a0eBA1040B7125ffD6DD4237"
      },
      {
          "address": "0x0d0722ad65bEd15211101C0e2191e76ADEacE9B1"
      },
      {
          "address": "0x0d2Ad2809FA12955531Bda8aC76485DD6BfE95c5"
      },
      {
          "address": "0x0dE9BE0C34634896ACc37c1a0bC7FFea1A1D2C96"
      },
      {
          "address": "0x0e2D124cBe57a2805D4ADe75061eEd5C31Ad4A7c"
      },
      {
          "address": "0x0eb92BC19020688414C577C6372cE128CFa5f02B"
      },
      {
          "address": "0x0F25809d8E83AbC5Ff0f4Ceb8A8C39c79746d0B6"
      },
      {
          "address": "0x0F398F8E611C5db4c0a60B0Db14ddd06DC0BE862"
      },
      {
          "address": "0x0f7D8238185f907D5bc98cE87fff65b92CaF0C09"
      },
      {
          "address": "0x0f907E5FB3605f0aE8e60aFE8Ca4a289A2981b43"
      },
      {
          "address": "0x0fA8DDfc7719f1385095B2484B6E4928E0A0435c"
      },
      {
          "address": "0x0fb90B14e4BF3a2e5182B9b3cBD03e8d33b5b863"
      },
      {
          "address": "0x10876eba7877613F2204C9B6e68B36e24f5A7e1e"
      },
      {
          "address": "0x10b54d8e8E7EA708E5C71915401261F92E03B376"
      },
      {
          "address": "0x10e50be810a2914ee1896311Ccfb041b6A6bb7c7"
      },
      {
          "address": "0x11EeE6CDFee403Ee838D9AA7E10f8449AD7e6402"
      },
      {
          "address": "0x121c99d11809E44F2874e4142743fA3618936040"
      },
      {
          "address": "0x128e482c59E2370d65Cb273a0cf8e2AC0629d9a1"
      },
      {
          "address": "0x147b0BF026B15a8f7fDaBc4c3CD3A42Fdbb2f6BD"
      },
      {
          "address": "0x15cDE990eD76289Aaa17464fA29876a4F881F257"
      },
      {
          "address": "0x15d51e51CAF5585a40cB965080098Bfb68AF3336"
      },
      {
          "address": "0x1660207BF5681c9cDB8AFe3A16C03A497A438753"
      },
      {
          "address": "0x16FfE3938B69132c72A5b0250708792DB72971B4"
      },
      {
          "address": "0x1b4bD7BCf2463DDe4eD9ABB38f35e2E1e7452f5E"
      },
      {
          "address": "0x1B6e29460979e09abBbBc66c1B98a184214d8C23"
      },
      {
          "address": "0x1Bcf05FBbF3dBde262bc439A3Cc4cCfb39eAc830"
      },
      {
          "address": "0x1C3046F0cabbe1D82f3B78f3B7747CA12Cc271Fc"
      },
      {
          "address": "0x1cB720f7BDf9F3CF334b3396Ee1D081638a14B4e"
      },
      {
          "address": "0x1D130d29B3906555030452f0f29CDB0B9750Fd21"
      },
      {
          "address": "0x1dBFb61Fe4ec07E4c4F4fd43dE1abEd7f7DD3DC9"
      },
      {
          "address": "0x1e8B7dEa2b3FEE688a7b693c4713021DFA3ddf08"
      },
      {
          "address": "0x1eF03c6B2d2102ef4cc3fB71723351E1f5135d0C"
      },
      {
          "address": "0x1F2839c9Cd96442C492aEE69A7F4CEA5ae1BEaEB"
      },
      {
          "address": "0x1fbe71c76320faf71177647a7b0c2da263271B89"
      },
      {
          "address": "0x20A81A3307E0847F20c42d927216638F21f9B8c1"
      },
      {
          "address": "0x20FA8F205Bc0971e699B16a01b828109356Ff76d"
      },
      {
          "address": "0x21018ca8155fE46b435D52B0a1fc90E5E629f8Bf"
      },
      {
          "address": "0x216FBB3cae4c5F7C5efD94F6C71d7F52dA7c7Be8"
      },
      {
          "address": "0x21d7a1A909620AB6aA7BbC82451A40aE74631A67"
      },
      {
          "address": "0x222348568A732B855d723E9b774cE0E15Bb7F8C7"
      },
      {
          "address": "0x22755543d172D0E7F52536520813d44d2A74C03B"
      },
      {
          "address": "0x22BAFA0694d73fB7E774290135B98D15E2486508"
      },
      {
          "address": "0x23A2Fa0E0dcC3B4E718b1a94818e5B123D89B75e"
      },
      {
          "address": "0x240F76cc1F4b36c8c1b053F716Be0e2Eb8CfdC15"
      },
      {
          "address": "0x245482FD0a5A34771F221432Ca0CC1d64587D89C"
      },
      {
          "address": "0x24E12C705D6A6FbAd19f4a84cd0B4c1c67646708"
      },
      {
          "address": "0x25031fFed42a05d7DEa7a37308819C7f02dd7C03"
      },
      {
          "address": "0x261890033FD1afb025df4e43A3e593df718443F7"
      },
      {
          "address": "0x2649Bd829e37463B27135D6B11ba75fe0fb24108"
      },
      {
          "address": "0x274433963a192F47E850E3A9c1df91728c6c7595"
      },
      {
          "address": "0x2773CB2D13C6ad6099c5f92410416809baAcde78"
      },
      {
          "address": "0x27aa9F8c0728838e7795643DB0a58C37f4a88315"
      },
      {
          "address": "0x27df2658A62E22d3e7A75FbAe3D625Cb02CC636f"
      },
      {
          "address": "0x27e121bFB21f631496Ad5b9783D049FaCbdd411E"
      },
      {
          "address": "0x28265b4188FF587E5Cfe1155606026cD2CCd243d"
      },
      {
          "address": "0x28af3356C6aaF449d20C59d2531941DDfB94d713"
      },
      {
          "address": "0x292C05A5d77e66D727629D14B1E0F334D57a9225"
      },
      {
          "address": "0x2969c63FC96a8ac4c8f658c2d1427867d3bea69f"
      },
      {
          "address": "0x2aA8C3aA07a3b6968a54749F0d770626239C0F43"
      },
      {
          "address": "0x2AC0B77652cfb7ebdE8190d7c3E1a41E18dCc66f"
      },
      {
          "address": "0x2B6247079ddD8e81B34093e911284253bd455EF6"
      },
      {
          "address": "0x2Bf034ecCEbc8CD60Dab9c249b6c2996Dcb7D8EC"
      },
      {
          "address": "0x2CdbF64c0327a731b53bDD6ce715c3aD6BA099C7"
      },
      {
          "address": "0x2CDde5499D7131a7ad3d4653f326c4cB245Bd319"
      },
      {
          "address": "0x2D66F9f52b173Eb6F64B740fe67913D0F5ee4436"
      },
      {
          "address": "0x2D948147074f046F6d1E4DFc2E2ab756BFa7431A"
      },
      {
          "address": "0x2F075618681D45458aE20E17ca3CCf1C797d6E1a"
      },
      {
          "address": "0x2F4A27D3F5ECbD350BbcF3bc4dfD4b23B34527d2"
      },
      {
          "address": "0x300da191248a500b2174aeD992d6697BF97F9139"
      },
      {
          "address": "0x324110e8A2f9D0D93ba9cba21688540b39cb79cb"
      },
      {
          "address": "0x325E0A8FcAd252f98B15E4B93A27D1389381f613"
      },
      {
          "address": "0x32B16CbCb8A2044417AC2D5b2422732015BE1301"
      },
      {
          "address": "0x3335cc8BDa40fB5a5F8Db1D0011dEc98728d81E1"
      },
      {
          "address": "0x33484678A59581100d6266d04910a7472eEF55B5"
      },
      {
          "address": "0x33b48210E5c1E6A1b214Ec3582538adA7102e103"
      },
      {
          "address": "0x33C8b8F21B44AB1805aFC93545a40dC39Fa07BC3"
      },
      {
          "address": "0x340A61C9f46b585f4430a236Be98A7021AA71703"
      },
      {
          "address": "0x3423010139f86f9FE84792A310113b438d004271"
      },
      {
          "address": "0x342Ce009ca1DCFfF7219D86875891B8B89768ebB"
      },
      {
          "address": "0x34Abde12100336C55a759852AB081401Da03dc2a"
      },
      {
          "address": "0x36168D5d7D5B5e66Be7fDd0C353D1F3Ec074339c"
      },
      {
          "address": "0x367F0e332D74F71bDA1436bd50dBDEe0503C125e"
      },
      {
          "address": "0x37b76cE4a768bF4954e787B5ee4bED550811A22A"
      },
      {
          "address": "0x37Ff6092225A5062300023514b47Ee36074feCD0"
      },
      {
          "address": "0x380A38Cca9cC898ddF8bE3B95D1B3af93707DF98"
      },
      {
          "address": "0x389654572305986F0f96D1f87B7fAe9278613411"
      },
      {
          "address": "0x38C26D3286E2a6458252D528417a1FbA84e0C2BE"
      },
      {
          "address": "0x39af86b922e466B1363FE6a04d0b2f8994a02a6E"
      },
      {
          "address": "0x3AD9e46849ac275FB8E829c7761A8B03B81dB11C"
      },
      {
          "address": "0x3b15a5f73535Dc6e27C1eff6950cBf3D03ef0979"
      },
      {
          "address": "0x3BfB159C76833Bc019E7c93708f26f318aD61504"
      },
      {
          "address": "0x3C2C1c48da5B09fCc7FCa261ad666429EC758030"
      },
      {
          "address": "0x3ca3eAdB1c7573f0Fd4Acf6679760675D07EE621"
      },
      {
          "address": "0x3CCd6131d1c5FE2bd277e0da6bbB63C4fb35547b"
      },
      {
          "address": "0x3D2198fC3907e9D095c2D973D7EC3f42B7C62Dfc"
      },
      {
          "address": "0x3d2661546781e092C69fC1154de99cC754F847f3"
      },
      {
          "address": "0x3d57EaFDD0b549DffA8318577C8525930D505997"
      },
      {
          "address": "0x3eE06850C546672C3348bc9802291138ed2A6088"
      },
      {
          "address": "0x40825400fC5B820AfD0784b402b9eD4955aDC01b"
      },
      {
          "address": "0x415df528c33B8ad580FEedF5EfA3Afc3eEEfc17b"
      },
      {
          "address": "0x4334fE21C0e760f7579b8cA027cDe2F2e69680df"
      },
      {
          "address": "0x44D89C12975F2173F38BC8F81dAFD18b5e269642"
      },
      {
          "address": "0x453a6B83ba2Dd467004f96b3Ae5dd769F3dA0995"
      },
      {
          "address": "0x4570A5C4d08720Ee82E6dfC545d6f8AE01E33E12"
      },
      {
          "address": "0x45ffADB496166a0cb634ce69C46fd57b8FED4658"
      },
      {
          "address": "0x461E722393361b28707f0D5aFf8981d127fD9d2a"
      },
      {
          "address": "0x46DD7DC34FD7326C8584EcAD84A75b2d107B018b"
      },
      {
          "address": "0x47Ff511c763ABBc477526Dd3C02bc022b7E6932d"
      },
      {
          "address": "0x48fb74F1518E99de922333fE8444f800ad37A57A"
      },
      {
          "address": "0x4906f93826a17B796b7D406Af2efaB2eaEB7723f"
      },
      {
          "address": "0x49E26982E64dE40f68714B6E90F7eF50b1C62082"
      },
      {
          "address": "0x4aD4339a2FbBbA08E0cf5A75cB68e2C1deaE25c1"
      },
      {
          "address": "0x4b05a8D347e491115B51bFC474F87406C1ced927"
      },
      {
          "address": "0x4D80e179018588178EB59b36f1f9B2110364BB6a"
      },
      {
          "address": "0x4d8B1B88499a2Ff701678A5f648bc365F5D41694"
      },
      {
          "address": "0x4E4fAb3De995F55ADf2e2c99C2b44070aeebd6BC"
      },
      {
          "address": "0x50cD0C5FC8fCFDEa09083Dc89FBA303C518cC1BC"
      },
      {
          "address": "0x51f944Af16ED28c604b8cBbC5361912050cFC845"
      },
      {
          "address": "0x5297233BbCF7B58356Acf5e3B4d4F79821491B2E"
      },
      {
          "address": "0x52f71b4185458248C0e0a777aEA130d922462a0B"
      },
      {
          "address": "0x5365b4472a6E5D8eA296E38f4117b5BFFA61a525"
      },
      {
          "address": "0x538EA2312452F8F181Ab63aB96464C364A5C3453"
      },
      {
          "address": "0x54588Aad15b92D53fC8cFB3c6876C74B52D23491"
      },
      {
          "address": "0x54Be9C677e243572aB91aDa065CEeD12B7e578Da"
      },
      {
          "address": "0x562991460b569dB7bC0E6303416e48726b0F91a5"
      },
      {
          "address": "0x5696A8ba76fF5c6F6E1e46C20925F5a056167a2b"
      },
      {
          "address": "0x56dd5543e3D0cAd9a5c9fC6410EC4b1e6028a65f"
      },
      {
          "address": "0x58beeeA024936f71F071Ca06a6E0d81c8c5d7A7E"
      },
      {
          "address": "0x58F7CdF32Be333e5A5C7FF8097742aC5535b7A65"
      },
      {
          "address": "0x59e65E3BA06Eb96154a9098DcD4a0D4b24a9c6f8"
      },
      {
          "address": "0x5B8b10D99cB26200cBfd0C65d2543361FEc0Dc5D"
      },
      {
          "address": "0x5bFeb4Ca066c9458842AC89b6e5cd983bd1a1034"
      },
      {
          "address": "0x5C1444B4602Bf8e8B6Ab332b1CF71F504f5b4C6e"
      },
      {
          "address": "0x5C99B3890b172dd750aa05E9ea8147DdD8c9Db22"
      },
      {
          "address": "0x5cc5285df83F448af9569D788Feb2CCA9Fd418D0"
      },
      {
          "address": "0x5D474c3fcCB02fCaf8446cbcC2E507A113E2ECb2"
      },
      {
          "address": "0x5D51685b39942BFC6dcAD75D1d81248B9f92D0f8"
      },
      {
          "address": "0x5dB1db464BFA7a99e8774824192E9cEd09f2a266"
      },
      {
          "address": "0x5DC61faECcc3D45B736d388c3644e5a6C0C6D919"
      },
      {
          "address": "0x5eD7f34bCdBD6d8BC0A30913988a943b823d0E58"
      },
      {
          "address": "0x5faa31Ea9a79a8E4fa391dE7cAE5adC9B4b02833"
      },
      {
          "address": "0x5FBc9D75527A10892EEa6A161e0A3B6B72718349"
      },
      {
          "address": "0x602D2a713ECe658a76989F4CED1bD6179544E7aA"
      },
      {
          "address": "0x610199Bb6FcfCB288710a51337CbAeE9489B8d39"
      },
      {
          "address": "0x6194106E25E805c13461E761A170B71eC604A036"
      },
      {
          "address": "0x625fC4878A9086b017c6Bb5CB14310Ff78c62cdE"
      },
      {
          "address": "0x62E4df75e2BAaE9bdd07270ddbD22adFc8728E22"
      },
      {
          "address": "0x62FA652a839152c19A24778eeddf391C49AD0FE5"
      },
      {
          "address": "0x63C69d9dBCDE24b3057B3E850334AAbc421369dd"
      },
      {
          "address": "0x63ea0CbC3B601b325be6618C44B94e43F16be40e"
      },
      {
          "address": "0x652D7E1B706b10DE0bFEe179C1CC41DF73D3ED34"
      },
      {
          "address": "0x65B4B33E5E76aD345623fB1f7581fB2e060Dcac3"
      },
      {
          "address": "0x67d2F9223FA307bb1dBEF672Aa0b9bd5e762C8D2"
      },
      {
          "address": "0x6C5AfF9b892d841B8Bc5De629a8c24805cEBc550"
      },
      {
          "address": "0x6cef15E37392F13d0873dc18497CA8087C681e01"
      },
      {
          "address": "0x6ed5a435495480774Dfc44cc5BC85333f1b0646A"
      },
      {
          "address": "0x6f590e5325014B9e0DA13E2dc0bBb710F8c89184"
      },
      {
          "address": "0x6f7707673417115D8D0810D3acaA4678D6D644Fd"
      },
      {
          "address": "0x6f81e8957CF63FA5Fc5f9EB6865eB50b9EBBe1FD"
      },
      {
          "address": "0x709E5c0E4ddaE6306Fc6905060DD74699A8F9EAe"
      },
      {
          "address": "0x70ee2c2600Ac7EC2Bf1eaa7F69747fA4D07c8261"
      },
      {
          "address": "0x7290d639A85e8d107a7D8e8E490788e47C49746d"
      },
      {
          "address": "0x73594B5F4B563A17C6708d0F6302Ac7061CbdeA7"
      },
      {
          "address": "0x73977b29c1EB03adC1fbeE719c7A13e66707F6B9"
      },
      {
          "address": "0x7514c98e42Ab83BC914411E18B7703f5C9699aE5"
      },
      {
          "address": "0x781714EC69cd6961621b0c0BA952F67A5E8D235B"
      },
      {
          "address": "0x79672c0123EcEec30198f3E83401156F2f4c789E"
      },
      {
          "address": "0x7a1682faF72E41E1e23a11A4Cc248C1d4444EB9f"
      },
      {
          "address": "0x7A5F9d4E83DCcd1AdbEAb3cf40Ddab1B24e39b8f"
      },
      {
          "address": "0x7A782C3A8f513621D9563e2c08c915d4fD239075"
      },
      {
          "address": "0x7aB6a4cf7C8221A1204B3B568b4b09F91bFd63De"
      },
      {
          "address": "0x7C6553933A471b43cE3a76A02245c5162C82522c"
      },
      {
          "address": "0x7C7181962654fd97149dced8b8B8b523dc5f81e5"
      },
      {
          "address": "0x7C8A9D9dDE058CFa14cCd698390252627F80eF19"
      },
      {
          "address": "0x7D2e4D645c0Acc5A6Bf596B612caB351864f4090"
      },
      {
          "address": "0x7dfdBBC4a2626D02DF1F2380f6BB9765b2B57f4A"
      },
      {
          "address": "0x7F27072b55CF22fD63eb7Ba100F44425486E471E"
      },
      {
          "address": "0x7F57b3bdE2BE9bD46dECFd27776FC9b75FC68c8B"
      },
      {
          "address": "0x808044f380ff53a236600A9bA9f515468B4604F6"
      },
      {
          "address": "0x80b5A3680d1476E7511f5111d6ff8759F5A063D8"
      },
      {
          "address": "0x828d3Fff01cf78C96495aB1bD2C1e1b1b2384A9a"
      },
      {
          "address": "0x82B1F29C5608238DF2618F996827933c0d844079"
      },
      {
          "address": "0x82B907d53Ef5d100c63921E09A7217Ce02B20903"
      },
      {
          "address": "0x8396781b7644B78611b488cfde15992e8912FfF5"
      },
      {
          "address": "0x83d709977BeD753756B82045270dEAeDa10A59C0"
      },
      {
          "address": "0x848AE001e8378A7409337453C1D8f5B779945578"
      },
      {
          "address": "0x854D7B77B762B2ca07b1Ccc21e2a19eB1ccC34C7"
      },
      {
          "address": "0x86063Ce7f0dbed7Fb21981c325389e9B980B59DA"
      },
      {
          "address": "0x86455AC5CbE7a2cE8527638Bf9691FbB4baCe7a1"
      },
      {
          "address": "0x865c529F7053ADc50aC9d3efc54D71DB7b28907C"
      },
      {
          "address": "0x86a8A293fB94048189F76552eba5EC47bc272223"
      },
      {
          "address": "0x882F9364F015637b54a2702D6448E0979DC9B449"
      },
      {
          "address": "0x887b86B6B6957F7bbeA88B8CEfD392f39236A88C"
      },
      {
          "address": "0x888bb0767cc8db41c947FdcB8254289e746d7fb7"
      },
      {
          "address": "0x88Be3Fa60edE9F532af10Aba5690dfc254DB929B"
      },
      {
          "address": "0x88e8F4d4476131A9D6CaE4c55E79c45328fecb3C"
      },
      {
          "address": "0x8953719eebD47d2eE651c69cee6717dCBfe47583"
      },
      {
          "address": "0x89e12425d3eDD174baB9A8677D3bcA8b7F34f1AB"
      },
      {
          "address": "0x8A6003f75845a896925ddA2D91d1959021c1bE33"
      },
      {
          "address": "0x8A70dffa67DA1Df3fACf5D7FC664DDe788d30A52"
      },
      {
          "address": "0x8af0A75ab18fC7055BF60eBAB7d041fc0b462D46"
      },
      {
          "address": "0x8B7b042c5ea16F64cA55aeb6B0F8315B4Bd6Fb23"
      },
      {
          "address": "0x8c2682E403B1Be886e59315c4C3c66468f2F1a10"
      },
      {
          "address": "0x8c5461D9b6992D12FAd3Ae70943066BD32f9A86C"
      },
      {
          "address": "0x8CA547a0898642C5FCB49b97FFc15e9DB667ba5F"
      },
      {
          "address": "0x8cE584fe9609fe2F0EFD1a8b9b7fc4846C32e679"
      },
      {
          "address": "0x8DD76FA2687A87B4FF6771f75f41Ba4DAb56784c"
      },
      {
          "address": "0x8E81Df3F82A10831E709899f61A84b3f7896D6E6"
      },
      {
          "address": "0x8Ed2189157E00b72D276f01DdBdbB1641b4a0118"
      },
      {
          "address": "0x8efac15412DE4a7eBdB2a40013598Fbd7f7197e8"
      },
      {
          "address": "0x8F3a3F37cd8A92e7e72E5248c56096590512C67C"
      },
      {
          "address": "0x904aF80Ed68Ce1FC54629b4cBCc9c77DF195C24C"
      },
      {
          "address": "0x90576ccf3DB979D6A61D1D4f05f4Bd96a6EDbE0e"
      },
      {
          "address": "0x9080b37411aD0826FDC869f5c94095eD6f395D0A"
      },
      {
          "address": "0x90aBCf1598ed3077861bCFb3B11EFcd1D7277223"
      },
      {
          "address": "0x90AF0d6cA9BC34940d77E33F76Cc027B24285950"
      },
      {
          "address": "0x9226beDb6BB34181A3d79088D3B2015F70826b6f"
      },
      {
          "address": "0x9293C35D6e1524609b7221a1C9A8D52DC81BA62c"
      },
      {
          "address": "0x9309453b990c46C2E8F3f9c53FC53D530e76059a"
      },
      {
          "address": "0x9316C578bd5AfFb2063F404E6e0082D394DEd8ef"
      },
      {
          "address": "0x944f2a6Ec69c2780b1148a01571ADE971957C2E4"
      },
      {
          "address": "0x9469Fe56447b3C33f8eD7Fd957ecC848ECe647F2"
      },
      {
          "address": "0x9490eb162ecD2f97df5772417e3A4cb35Deb14d8"
      },
      {
          "address": "0x94AD7f675A9B9eB70C5Fd987235d21bf7Ad73aBf"
      },
      {
          "address": "0x95270f71252AF1F92E54c777237091F9382Ca5D8"
      },
      {
          "address": "0x9576cb54B5013Da91c732071FEb4F8EB778a474C"
      },
      {
          "address": "0x95A83be2b7bEc07CC68a06fd3F4c7d9710caAFe1"
      },
      {
          "address": "0x95a858f1AfC74187827e46e5950baa850059E858"
      },
      {
          "address": "0x95c92eaee6A72e2884335F8bB37fd1BBB8E31145"
      },
      {
          "address": "0x95fc03D96396f1dac5B505c142b828d9B91F4c66"
      },
      {
          "address": "0x969ECfCf06FFa6049d7ad79dA575fC618Ed91542"
      },
      {
          "address": "0x971257beA317043f6aA786F5b88d0142e524305e"
      },
      {
          "address": "0x97A46F7F48C0bf82Aacb3C076b10C8379Ab6B4Bb"
      },
      {
          "address": "0x9848e3eaCd3725A32cF523dbcBd2E88f5f7086bb"
      },
      {
          "address": "0x986e92868A27548a31e88f7692E746CD7E86f39a"
      },
      {
          "address": "0x99602a10a1E95a2432C1ac2c865A47249dE819a5"
      },
      {
          "address": "0x9A53B419C10fAb2B4fdFE3F4B1b6264573BFF195"
      },
      {
          "address": "0x9Aa70c212C01a01900b04319Aed3b0D85bd0e06a"
      },
      {
          "address": "0x9b4a4Bf4bf8979D9B767c1d8A787eE6d61899F65"
      },
      {
          "address": "0x9b57444687077e7aA8B8c6F6e5dB93A20385b046"
      },
      {
          "address": "0x9Be6e30F2077b0DFab37FB7d7ad59B4a727ade67"
      },
      {
          "address": "0x9DDaE9B61B790E16d4Fe92A6eDE1339dA0F9e7BD"
      },
      {
          "address": "0x9ddFa8c806ACEdaE4836e5497f4EB2e69efC1b52"
      },
      {
          "address": "0x9EC5c0dee95cE7F106010f3f636c4170d6D44D81"
      },
      {
          "address": "0xA01c2AA47d6835F23284C358179e9AeF1Bf41Bd8"
      },
      {
          "address": "0xA052b52e9D3B6B5Bc7a5cF565891CD1f3dabe819"
      },
      {
          "address": "0xA0EAfF944D33a1D4656d38534621A00FfBB37648"
      },
      {
          "address": "0xa3892Dd0604358481b73e93Ee4b302a65c0B1aB2"
      },
      {
          "address": "0xa43eE0DdAC31bF684c2d0A678964402322AD7210"
      },
      {
          "address": "0xA46B29B1F8a06139c606F1912291D23B0141Ae62"
      },
      {
          "address": "0xa488bE157BE1F3b6d38f8A2E4fbeD4BCED0Abb78"
      },
      {
          "address": "0xA582aBB1a4b499f783EAdf0fF5D8C28D67806C2e"
      },
      {
          "address": "0xA58b4A80dE82b889FF40e487c58208A429c77f88"
      },
      {
          "address": "0xa5BFD95294Aee7d66CF7C5981C26C5ae21D217bc"
      },
      {
          "address": "0xA6303f0c3601139B285dE92e5D6f7f0A00979064"
      },
      {
          "address": "0xA63aC74C662604e0a510DE4c7c6b7BABECB47F5b"
      },
      {
          "address": "0xA6ddaBF6497976248fEACAd696720bfD1e8cd2b8"
      },
      {
          "address": "0xa77bcf3BeB4972fFD56E7cADA6D6f526Ab369b98"
      },
      {
          "address": "0xa7A90BDE26A3Cb6132D07AB1fB0B8845C1401aB7"
      },
      {
          "address": "0xa9f1efc2e4D79635B393cd35c5F4993A5fa36d8C"
      },
      {
          "address": "0xAa66a53e01698873D22d49C69c4829190975cc32"
      },
      {
          "address": "0xAaf06e46124f454F6249993231ffC3742418E8b7"
      },
      {
          "address": "0xaaF76872d7ABef0c30e3adb7788A1df51cc934Ff"
      },
      {
          "address": "0xAB43a7FF49943aCB0d77BbB8Bc1a2C911C473d48"
      },
      {
          "address": "0xaC3a4438737a55F792e1BCe3398bABbED88a63D1"
      },
      {
          "address": "0xaC4361f56c82Ed59D533d45129F407015D84702a"
      },
      {
          "address": "0xaD39C5Ce05E04898a53Df733C2F8045ba27f0A42"
      },
      {
          "address": "0xaD99a67ac78b80E00C0B07bB3F526Cd26B843611"
      },
      {
          "address": "0xAdD36e3C697aD0E38A4A85CbBdB4265CC5dD37B0"
      },
      {
          "address": "0xADd432C18449e38bEA3666c664ddb344132511B6"
      },
      {
          "address": "0xaE606597B2A7117E967048e33c4eBF48762875AB"
      },
      {
          "address": "0xaF4FAaa7624bD39dEE06BEE0Aee498536f8da318"
      },
      {
          "address": "0xb26fd0Ce30598058E2F056f1f390685300f0965F"
      },
      {
          "address": "0xB28663E8C526c2d3cDD944FC7b62beE19A4c4826"
      },
      {
          "address": "0xB313147594A87c08a92630dB38222DCF2BFd5219"
      },
      {
          "address": "0xb3522064694Ac9870Dbf00eEBC2712762193Bb64"
      },
      {
          "address": "0xb395cC8d01e48dc26470837c7bbC617d1cB3f9Fa"
      },
      {
          "address": "0xB4dF5FE59FEBf485Ab55AfEBB1ad4FAdE73E95dc"
      },
      {
          "address": "0xb4F95eD2765AC368C2c6414617905012F30fB03F"
      },
      {
          "address": "0xB50A20A8AD550fDD3C05508367EBC978e60dBEFD"
      },
      {
          "address": "0xB62430dA854A60D4607CCb8C7C40cc5E08c463b0"
      },
      {
          "address": "0xb68Fde50a1E6A8A67e88109b6447F48Ec1da11D8"
      },
      {
          "address": "0xB7D3A787a39f25457CA511dC3f0591b546f5e02f"
      },
      {
          "address": "0xba2039974a2E088344B4Dc804Da8EF88AE00EDD9"
      },
      {
          "address": "0xBa3E6e7918F2b767930294545988B8143257518b"
      },
      {
          "address": "0xbA9F68fBF20a0316D80287d7ABC9B1377D622121"
      },
      {
          "address": "0xbaaaBce9D8b6e0e7b26E107f33DdfC7Bd582E301"
      },
      {
          "address": "0xbAb1315f63134691634F722F9e393fBE4F12c2AD"
      },
      {
          "address": "0xbAFa0ecd146C524bF4033b2Ec04Cb5774B08F75d"
      },
      {
          "address": "0xbc13Bc5ec044E556E118605d48a378d9b6B554B6"
      },
      {
          "address": "0xBC2DcE626B7e580dE71D285F5BCe77eE59c3b9d9"
      },
      {
          "address": "0xbDEd72aDD80598aFd9E2EC3C5e5fe6Aab48b0f89"
      },
      {
          "address": "0xbeB793c9071A5CCa352B195925a364A99ae91114"
      },
      {
          "address": "0xbf16DfAeE9fbBbcFf66467964dEA940ed229bF62"
      },
      {
          "address": "0xbf36fa1f2027eDB47bd0cf3e927d6770D8aF90dE"
      },
      {
          "address": "0xBFC060893BA6C97364Dcf9f18a5EC1371df8eD28"
      },
      {
          "address": "0xbfDb50Dc66C8Df9fd9688D8fe5A0C34126427645"
      },
      {
          "address": "0xc07A18c4ccE7F95A413515d3D137De47BcFfb495"
      },
      {
          "address": "0xc0Ea231F9d8CfDcDe60B86175D1513478EBBC94e"
      },
      {
          "address": "0xc0F030eac8b588817f8dA16b9a2CDCcc6451B25c"
      },
      {
          "address": "0xc1b2DBA39C139933407e958306aF223e8c0FB1f1"
      },
      {
          "address": "0xc2ba77069899a2409440CF3Fe9fd246E1f7b75fA"
      },
      {
          "address": "0xc336d15b27f955FA85Bd35Db907eFb915b4c7ff6"
      },
      {
          "address": "0xC504BC5bb9be55C67f0FfB010BaAFD27232D0D5F"
      },
      {
          "address": "0xc5901C3cecCB6f757eaB6eb8e08DC53C24851380"
      },
      {
          "address": "0xc5C8295E649d7027916Fa9B25CD68D505cDed08f"
      },
      {
          "address": "0xc6A3EC4C5b05D826F1Fc52B5E5aA5649f570EB27"
      },
      {
          "address": "0xc7096B7F9f3B3dDFebc8e7aF518123fD494B9Ccf"
      },
      {
          "address": "0xC710c02aFee8e8e6fDCf18cf75A742F1c19D7ef7"
      },
      {
          "address": "0xc78A95019C52aD9856aA764D6908E88D5b7930eE"
      },
      {
          "address": "0xc8b0D32bc09Fb11C12C82582825C1e6b624822b8"
      },
      {
          "address": "0xc90575711Cb48b706b3c7f04EaE188A9F3c8C547"
      },
      {
          "address": "0xc9A900B5C828aC2d30bCa757aB3d5A5Dd9E74a73"
      },
      {
          "address": "0xCA35E851010b34aB47B5D713285B314340E57C39"
      },
      {
          "address": "0xcA808bF81aB2936BEc73eb6aAE5DC242E2977a8e"
      },
      {
          "address": "0xca85460d23Bfb2e0079bAb5AAC84921D9D0762a4"
      },
      {
          "address": "0xcaF6Fd54fB74C95B28F5e94952ca21B46E4071cc"
      },
      {
          "address": "0xCB4664578a6B53c29caEc0b884eEAEd55364B40B"
      },
      {
          "address": "0xcB93aE25dF9941677bC9D963db0893b44626163c"
      },
      {
          "address": "0xcd56a61fE76C08a4B5eabC53C8B0f5e8c38a1c06"
      },
      {
          "address": "0xcDa491efFa43Bc60d2F42d691d044C70a5F62E43"
      },
      {
          "address": "0xceA110CF871ba2F88262AAba1026C371DA930a51"
      },
      {
          "address": "0xcebc89688742E1A9729cCa67FB5585CF7Dd461C7"
      },
      {
          "address": "0xD07910BbCc742aB53Fc38a76BaE502205Ac0FFA1"
      },
      {
          "address": "0xD1a2BfFa66A23b657ccB4e35425D9Db6f667B29F"
      },
      {
          "address": "0xD1cAB5bb147d39408deC7cD5e350b8eef11c4102"
      },
      {
          "address": "0xD204c770572C43576De034EDe6Cb24F741E565E2"
      },
      {
          "address": "0xD3Fe5B4B0f47C2acE545Cb72b8101A77582D8953"
      },
      {
          "address": "0xD465b4453898d5BEA91680C76695A5D780c090AA"
      },
      {
          "address": "0xD651E2c626eE210Fc38676124D5007Ac822AD749"
      },
      {
          "address": "0xD6818e7e12E7cd3605617E4e9b6106c1948A8069"
      },
      {
          "address": "0xD732748071e38a48B4E9a3Ff1b2e7e87c0a39C2E"
      },
      {
          "address": "0xD75de3C85F422660ae02dE4736359a633D4433A2"
      },
      {
          "address": "0xD781a066aBb723492EAd2D844515114E3E87CA83"
      },
      {
          "address": "0xD7e93B64adE18f7108CF5D7Ab91c76937aA30116"
      },
      {
          "address": "0xd8b41B798A7CE8d30cbC87F007eCb95E1D3C876C"
      },
      {
          "address": "0xd9569448E7d38aF4C72622Ab43E9A1B57Caa1855"
      },
      {
          "address": "0xd9944161833d1E9cF162DBAb987191D6904a8dD6"
      },
      {
          "address": "0xd9b96995CAf12ed498A80ad8F8F18B58E06A04eB"
      },
      {
          "address": "0xD9fD88913de000ea7134c8Ecaa405C078C2ffdDA"
      },
      {
          "address": "0xDA681804c795Db1535Ab4f5cffbF93FAd2b0FD2c"
      },
      {
          "address": "0xDaBfCc13Eb6Cd8D8c997b62B9721f5509067bf68"
      },
      {
          "address": "0xDb5DfA07B25C2d6625ad0D06a8147a474CA3eBB9"
      },
      {
          "address": "0xdd3Efb212Cf8Ee1C8F2A6eFd10DEDDadFca65672"
      },
      {
          "address": "0xddE7B4e278d0934641374Af68c4538fa8e185339"
      },
      {
          "address": "0xdE2a649A23AFC45A55A4d68B7CFDd683279b62f6"
      },
      {
          "address": "0xde504C2a463DB1f42F91688aD2cf66325C4b019F"
      },
      {
          "address": "0xdeaD02eBe7A4F35e7A40c9031E836D463f8579e6"
      },
      {
          "address": "0xdf382F9C26028C0da7C56a84d6d6D485843BFEA7"
      },
      {
          "address": "0xDF4f2Bf9461B623DfDe4e888da2bf3cAEE50e22E"
      },
      {
          "address": "0xe0562acBbd336D44241B33fb267EA0F2E480b463"
      },
      {
          "address": "0xE066D04aD4Ca5641460B19982F827F0C58f0dC36"
      },
      {
          "address": "0xE144882127D15C1814262B81788FCeF18240c531"
      },
      {
          "address": "0xE161B46C732CE9D3a892e2751048f0fCc9449F08"
      },
      {
          "address": "0xE1ed349B22cbCCB72220A7E4D26960f5d4e3bE36"
      },
      {
          "address": "0xE2375d3759ac543f37DE8C999757F800E8299bED"
      },
      {
          "address": "0xe241bedb5a6270C5a96219a52f59c7c3690ae924"
      },
      {
          "address": "0xE26f5B7624cf6De8EeF3d93643a2A06aE8A7ef82"
      },
      {
          "address": "0xe288a00DF4b697606078876788e4D64633CD2e01"
      },
      {
          "address": "0xe3035CBBaa34A6B8b50d9262da962a0c42531dDa"
      },
      {
          "address": "0xE37468c8FA3d47b797BC99236903896D26Dcc9d8"
      },
      {
          "address": "0xe3a7De1d14a362509a75B9Ea008469Bf86e334c0"
      },
      {
          "address": "0xe3Db7fc4C8F844C7fF068cEb889693718D93145e"
      },
      {
          "address": "0xE5ab4AF22e4e49A9FDBcF821fD477b69c37085e5"
      },
      {
          "address": "0xe73395E4cea1550Ec3C1A16A03ae2890ECEccBEb"
      },
      {
          "address": "0xe74418C3aBFd2ADD3b262F8df41cB8C27e2EF05B"
      },
      {
          "address": "0xe756bE1ca7176F90799be3F9A19e2371d881aF56"
      },
      {
          "address": "0xE8bC94a354E4873285a69BD43e65531484935578"
      },
      {
          "address": "0xE92A983b1ceAC8836502016acD337980d98E6B38"
      },
      {
          "address": "0xe96DEcB942b8B5C6bd57f08F146fcA12772cb1ef"
      },
      {
          "address": "0xe9C14Aa57BA5eF9E98Bbb59C7De546D031FF06f8"
      },
      {
          "address": "0xEaC4a477C275dd968F29267CC02DE31574F6B0F9"
      },
      {
          "address": "0xEBd6432Aaba073e240Fb9147866E059756a4aa8b"
      },
      {
          "address": "0xebE790E554f30924801B48197DCb6f71de2760BC"
      },
      {
          "address": "0xEC1C5F91fF6Ca0351D0bE13C88B5d9553ebc03A6"
      },
      {
          "address": "0xEc8ce3c314814373AEb4Af1e8efe4F0A4C46226A"
      },
      {
          "address": "0xeC952ED8e7c2AA466cac36fD611D2E87Df1243D7"
      },
      {
          "address": "0xeCA848dd377f44fb158cE66414d2dCf5A6081495"
      },
      {
          "address": "0xee4B68C5F60356118a1E87d20E4c2c72fbAEeD70"
      },
      {
          "address": "0xEeeB4dC650beAa34d0b42e52B4d8Af5B01391d3C"
      },
      {
          "address": "0xf0D66765151D41015a85BA14e19a7749A94C7D2e"
      },
      {
          "address": "0xF1299faD31bfBAf693282F8c85FD8A02f237230d"
      },
      {
          "address": "0xF2f13624c73f07D685AC2d39E1a914D7d6E17911"
      },
      {
          "address": "0xF34D00cE3fcd8989A9d445fbba39FE752ed03550"
      },
      {
          "address": "0xF3D9281fa183B74F32B96E1c5244596045f4edE8"
      },
      {
          "address": "0xf3f56E4AEc96ac5551615c71250Febd7B8966B02"
      },
      {
          "address": "0xF40a4eFDfeE5C38df12D3DEaAA0BF5560c979Ab5"
      },
      {
          "address": "0xf42Ec73fCB7b32717f0Daf1e842FdA4597831521"
      },
      {
          "address": "0xF45AE6fAA62B08D7744928191d5f20892f7b0b29"
      },
      {
          "address": "0xf4A34b37e19Eae6dEeE2c150B2F25CA161B1E0F1"
      },
      {
          "address": "0xf4e69f5f8814e4A1dF6c6e89613E8fe1bE949b31"
      },
      {
          "address": "0xF5Ae101251a564C6259D2188fD4Bced9897Ee157"
      },
      {
          "address": "0xf65DB13b5ee031CB0ebBa525eF21aa6C586681b3"
      },
      {
          "address": "0xF98A854bc00eAa854894d79e11315A2114C58120"
      },
      {
          "address": "0xF9A3C9FFB7C8082685258Ca27f88602c1B85d0E9"
      },
      {
          "address": "0xf9EBE7F36fF3F9Eb99007E233C05eCc0974Dd2f5"
      },
      {
          "address": "0xfa366B7Ec198B725035dF7e551E6473c76891Db0"
      },
      {
          "address": "0xFB3e5B87fe403C5C16914e890145092c079d695C"
      },
      {
          "address": "0xfCa3997B592AdE2277be071714d0A5aD46BA959a"
      },
      {
          "address": "0xFD94034c51eAE2ba3EdA74c09F5daAF5c3Fe77Da"
      },
      {
          "address": "0xfd97B29a11086807B4583589f5dD4c2Fb0df35F8"
      },
      {
          "address": "0xFDA5EEaef6D7004f9Cf509bbaC1904458891DEf9"
      },
      {
          "address": "0xFE242365FFd2EBBeAa65d55F91EdE576FEb8A9Fa"
      },
      {
          "address": "0xFea62440CA9C4C76b6cbB57d51053Fa35fAf03E5"
      },
      {
          "address": "0xff7918f8587e5c7289dcCc51cBE3bF20057d4e45"
      },
      {
          "address": "0xFfe296bbbc86dFaC056B42c6180d9f8b4cB412aa"
      },
      {
          "address": "0x94AA50fE3c1ad32b0419004eeE4f278ca3908876"
      },
      {
          "address": "0x3F58588B59dA010031Dd8A355dCD7De229663ebf"
      },
      {
          "address": "0x6eCC35BC13c196e96Df0Ca1adeB0721Ec4DD603d"
      },
      {
          "address": "0xD44EF5Ba2F992F44dB5F43630F0d0ECC3AE6D192"
      },
      {
          "address": "0xB6329Dd8e68dED6C973d7B1d3098Cc4FaD3858Da"
      },
      {
          "address": "0x035ffe28C0c6021a7b1B9092fE05918345847269"
      },
      {
          "address": "0x72D778105b8aF2C88cbb7B1551Fbd6878B6C7D5D"
      },
      {
          "address": "0x5c217CC668b5A972f7DF0EE87229dab1024028d3"
      },
      {
          "address": "0x3982de9D0b6fb0e12c89E0512C8FD903f0D9370b"
      },
      {
          "address": "0xd3e2e76e4Ab0322614fe7aaA3be0B04beD83d0D0"
      },
      {
          "address": "0xcB3D44CF3722A0e48b5D4ECf4C9b413a4FeD5FC1"
      },
      {
          "address": "0xA01ef6858C9211c0E63519D7C38553F679A73bC0"
      },
      {
          "address": "0xB910BC25fC55b48Fb073517487DC5Ac71d90F601"
      },
      {
          "address": "0x09800064d8321571e657C507e62cA92faf5c039B"
      },
      {
          "address": "0xBA69010B5cA7C8aE0984aaf4aD7D102605ba728C"
      },
      {
          "address": "0x0219d8688f5644373FE74057F350a125aABb8DED"
      },
      {
          "address": "0x94de7E2c73529EbF3206Aa3459e699fbCdfCD49b"
      },
      {
          "address": "0x6E38571Deb4a1dCebc1717D445DAAbA35981970B"
      },
      {
          "address": "0x03C78eB8b23551783CC634aaE692c3CA2c86DBFE"
      },
      {
          "address": "0x3d9456Ad6463a77bD77123Cb4836e463030bfAb4"
      },
      {
          "address": "0x10d33D6c42DBBA8F1C95a3753C7e417653e3Be56"
      },
      {
          "address": "0x526BE867D783DA4FCE3c4c85C9d85899D287CFA4"
      },
      {
          "address": "0xd4fE3934A2948e35159a4f0F07AcAf4284155677"
      },
      {
          "address": "0x0000000000000000000000000000000000000000"
      },
      {
          "address": "0x9b180d1401E35652A82C7BB37c7a754e48310D93"
      },
      {
          "address": "0xCF181d7C42B58978073ccA1C57251DED47f4dDE1"
      },
      {
          "address": "0x16D972690c16EA81CBcef3682d9B46D0Ac0a1FE7"
      },
      {
          "address": "0x426A347B9a153dd0D27Cc63640F5B14092b2563A"
      },
      {
          "address": "0x557b61bADF238E041B8C9FeF5CD84b90d21AcfE8"
      },
      {
          "address": "0x5b7e5563cADFFA4Ec108C1461eb0e0CC43b7205F"
      },
      {
          "address": "0x7285E62913c95235ac8e5886Cd06e7A8628Af4bb"
      },
      {
          "address": "0x977E74bfCA54AECD2251a01cb13DC13471021c14"
      },
      {
          "address": "0xA110f25E275D76533A4c9c08795c72B4e5E708ac"
      },
      {
          "address": "0xB4a9f08E1aDDaa8cE1837e3c73093d2970aae7eA"
      },
      {
          "address": "0x04eCD0A2C9f3ACC5dFDe3E3Bf58a6Bd33B08d244"
      },
      {
          "address": "0x08060e56E37656deCa16753FBd13ecA305D6990d"
      },
      {
          "address": "0x0D0DdEa176f30fBb787b2D39F2C37645e3b4DD50"
      },
      {
          "address": "0x0D83f85476dd883a46C4A1b91bBa24A037Fb727A"
      },
      {
          "address": "0x12C4084C1F508eD0B4EbD6c143968273C25E789d"
      },
      {
          "address": "0x1B2965dC3B1697DD10b7126EC7393d79cdA2cF91"
      },
      {
          "address": "0x25d3563f8675028E36889453519D98E685ee1630"
      },
      {
          "address": "0x2AfA2dae85a779b6098f03466C2a29D5a86AF707"
      },
      {
          "address": "0x32988f32DD5f4436b56506778B2b61A74cf18B89"
      },
      {
          "address": "0x34993e20033cfE4280d8fAE0557cdd09042De668"
      },
      {
          "address": "0x351eE82e6E32242D860e6A54C67E68f3E3603f21"
      },
      {
          "address": "0x471eD8ab8cce42fc183d25393a1A004c89DE7c03"
      },
      {
          "address": "0x47D4f20AE83bcd350105F199F900e6e6104daB6a"
      },
      {
          "address": "0x4A5Ca322053AeB87C1adB9643Ed444B3607CBcf0"
      },
      {
          "address": "0x4c55C41Bd839B3552fb2AbecaCFdF4a5D2879Cb9"
      },
      {
          "address": "0x4F1c249294F87E8Bed08e8f6052A8698A5dc2730"
      },
      {
          "address": "0x4fC575707a61A62d6194Bf65103087930DFC2F6f"
      },
      {
          "address": "0x58d0f3dA9C97dE3c39f481e146f3568081d328a2"
      },
      {
          "address": "0x5E410258a1e5E66a8dD9eDC583593a90505b0978"
      },
      {
          "address": "0x6a12c8594c5C850d57612CA58810ABb8aeBbC04B"
      },
      {
          "address": "0x7138bf61B28f0eD9b40af7EF58E4E8a1E4018A60"
      },
      {
          "address": "0x77dDf16249d93FDC64D4467463C27972D74400Aa"
      },
      {
          "address": "0x7Af7cA67AA827F58e0659C52a641aeE55a43B535"
      },
      {
          "address": "0x7E41406DAaa50487D9255D895c89A20c002A47aa"
      },
      {
          "address": "0x7E88D4D4db361A2e044DC7bA3b86775DFC28a783"
      },
      {
          "address": "0x7E958D4FDB351bB0298a16fC070BB458b2628eBc"
      },
      {
          "address": "0x8778b3120Ba60fc831844c3Dd2c5948c3fc6bC86"
      },
      {
          "address": "0x89cc08700dCba9d4Bad5295dee2A111b90b39917"
      },
      {
          "address": "0x93C8C816Ad9Ff9E6f03534E5180F743C66AB5954"
      },
      {
          "address": "0x9AE8912ea6562957043c8d048641Aa9B450c397f"
      },
      {
          "address": "0xa12EC5E0fEf29032D3e038631a99fE879c8f759f"
      },
      {
          "address": "0xa12f07B45388fA68C7fF6B4189AeC886e5eFff60"
      },
      {
          "address": "0xa1BbB798991Ae77c7DCb9D12212672077712602C"
      },
      {
          "address": "0xa4d8907BF757d268C9D054d8cc274E2F54E7c760"
      },
      {
          "address": "0xba04aE9c3b7Df626fDF3e1db59cF7cAe57B4584A"
      },
      {
          "address": "0xC4769E537AdF26c5230aE9a596e5ae6DA8fE0f9e"
      },
      {
          "address": "0xc846ad1251406A6df0f347d24b0aabc3dabaB008"
      },
      {
          "address": "0xDf2b2c1DF64D58839320a07907d4181F336A737e"
      },
      {
          "address": "0xE06789DE104fD4b8267bd9a2067b7D6F8A82bA84"
      },
      {
          "address": "0xe5f1329ea7bD1a4814e8481e979D14Ef811029C7"
      },
      {
          "address": "0xEe851b044a71518922fA8AD8aa4768eB5C29E2c8"
      },
      {
          "address": "0xF1db8A2623193757317639d0532daA5e3C8EA20c"
      },
      {
          "address": "0xbF4697DB6B36905e3175b85c7f48Ef5BdC561Cf5"
      },
      {
          "address": "0x42102E0f9F74B702B0BcDd7D94300a159a20F0F5"
      },
      {
          "address": "0x489Cc1daD0E18986242095F50728703631B20ec9"
      },
      {
          "address": "0xab8C60e8992a8d3529AaB2812662a7fC69c70DFF"
      },
      {
          "address": "0xBc159B71c296c21a1895a8dDf0aa45969c5F17c2"
      },
      {
          "address": "0xf0D6999725115E3EAd3D927Eb3329D63AFAEC09b"
      },
      {
          "address": "0x89450074A0A7db28143067626d1C1EF45CfB9696"
      },
      {
          "address": "0x08D5Bd85e9CD8AB2D970995EB1357065fF12AE48"
      },
      {
          "address": "0xA351a4FffCeed60b6d4351e1B20C55E3A6fB5503"
      },
      {
          "address": "0x1E815a8188F1b84564577C1c998f7E6B4706B752"
      },
      {
          "address": "0xB9A7564F77dEBd0cC194442e5B05A2C786076AE4"
      },
      {
          "address": "0xbB637a937E864795cb00f6681661904836aC8a59"
      },
      {
          "address": "0xC41C64E99701A1F114547454E99b5E8DD1AEBb8D"
      },
      {
          "address": "0xE4c182d3867531f81b9C9354334714e70bB1d4F7"
      },
      {
          "address": "0x2EE92C196D63F2313A52C4Bb48F427361460636b"
      },
      {
          "address": "0x7CE4F92598C7eCAed583Ca884b8c023A19b22a0e"
      },
      {
          "address": "0xD18a0085989b67788e35Fc1f8A439707A7639D46"
      },
      {
          "address": "0xeea89C8843E8BEb56e411bb4CAc6DBc2d937eE1d"
      },
      {
          "address": "0x7dad0FfE5b5A66eF7a8793134d9c6d4dA8FDDa0D"
      },
      {
          "address": "0x8Dbbca57Ea56290Efa14D835bBfd34fAF1d89753"
      },
      {
          "address": "0x99999AeF88E62Ceed4E134de67D9E636e357F661"
      },
      {
          "address": "0x846E655Fa6dDDc8200c624608d498B9435f33e8F"
      },
      {
          "address": "0x8De62F74BBf93Fc7855304DBeDBd24dC081755c7"
      },
      {
          "address": "0xeBF02C6E12c3eE119aBBA161C40BFEEaD0A06B15"
      },
      {
          "address": "0x148e2ED011A9EAAa200795F62889D68153EEacdE"
      },
      {
          "address": "0x28c2ABb1a94648bcF3F478D1AA32D5585e7fC96b"
      },
      {
          "address": "0x3b228235aa52DD0b691777A61c5fd5a65649A75A"
      },
      {
          "address": "0x3B8DBDACC444eBcB36BE51d831CCb3A779A37c21"
      },
      {
          "address": "0x59163f35318cB0Cf2000B18425FD594D522F766C"
      },
      {
          "address": "0x6186290B28D511bFF971631c916244A9fC539cfE"
      },
      {
          "address": "0x841120FF6d1e9f29e4FFbdB50edA696bbFD98EF6"
      },
      {
          "address": "0x909A30F58D9E7abfD4F8cF8430e2c2F97783E769"
      },
      {
          "address": "0x96bF8547455bE212E6B493Da101a3f06d309BD26"
      },
      {
          "address": "0x97E9A4f24A962F68dC2c34a493811Cc215E01772"
      },
      {
          "address": "0xbbB071BA1143B73f7BD9A6e50467548C5bE02A84"
      },
      {
          "address": "0xC1eCB897553D21A2AF0B7b90f0b648CC444803C8"
      },
      {
          "address": "0xF8Cc874fe4696131725018138fc4bb44866433E0"
      },
      {
          "address": "0x04490dc0f52A97ef2d6EA0C4d9eDbCde8c8546CC"
      },
      {
          "address": "0x18d2B9B37B576B8F1A04D7d909c2Efc991bcF52e"
      },
      {
          "address": "0x20D64f7a9b31A08871A091414E1F757bf3EB47C6"
      },
      {
          "address": "0x24435205EaF97DF22b6F2A2463bA039497596Ba4"
      },
      {
          "address": "0x27A1dDB40484a20e9bD3CF2d34e8c9f1cc93a4DC"
      },
      {
          "address": "0x2B941E25a9377F56d89c33357794031eefE004c4"
      },
      {
          "address": "0x2E09e088a31481D17c0eE28eE8B40b54554A31A7"
      },
      {
          "address": "0x38E123F89a7576B2942010Ad1f468CC0EA8f9F4b"
      },
      {
          "address": "0x3a2031050362bFF4cd42Cdb5e8914a400bEfd87C"
      },
      {
          "address": "0x461e76A4fE9f27605d4097A646837c32F1ccc31c"
      },
      {
          "address": "0x4c18f6b41104179Bef6ec4eD8AD11a72c314f689"
      },
      {
          "address": "0x4f2d36525EeB0bA3354239911d6190D1d05ee62D"
      },
      {
          "address": "0x4fFe72A85f13D2f812728B52639B77aE4FCc7F77"
      },
      {
          "address": "0x6282e24BAAAF04c984e8AE7CD0C763709743Cf9d"
      },
      {
          "address": "0x64DcbEaD3B25B94c1C07158c8a6aD6517B95513E"
      },
      {
          "address": "0x677bcfA119eb60E599Ab125C1e9955A7f8f395C4"
      },
      {
          "address": "0x690246e3357eb55f4D09f7C78F342378554c8B4B"
      },
      {
          "address": "0x69eFD597a3f7018Ce35F38F53ba05D42C4F6b1c3"
      },
      {
          "address": "0x6D95392544846c0cD6CcEc0342F24534d84393e7"
      },
      {
          "address": "0x70A8CdF9bafa57AfC6C5e439A828Aa4108F95cF1"
      },
      {
          "address": "0x75448866cEe7A4680dC58FE846446aF71F9f8438"
      },
      {
          "address": "0x7B7cd9496e49fD282F6873e7Efa1FFDe52178E4a"
      },
      {
          "address": "0x825aaCDFbF62835270eefD7ED2c691aE48fEa092"
      },
      {
          "address": "0x86342Ae15926b550E6392b0f9958b4A306227a70"
      },
      {
          "address": "0x9c99facE0F1Dc9CC24a7D986111bAE031D787386"
      },
      {
          "address": "0xa2272469c824d2b34407c08c1B377f3027406feA"
      },
      {
          "address": "0xa7C9C91Bc610DDB41E864CB617E8327914270563"
      },
      {
          "address": "0xb6092F68AdB09359ff988098eF19551623Ec6993"
      },
      {
          "address": "0xC26eE5DFB0FeD783915588eB181adEfCE7997b8e"
      },
      {
          "address": "0xCa44900808C9797EC98C4f8f2a0E45FfA5012574"
      },
      {
          "address": "0xde970830397Fa350143668a2e9cbD60684Df0184"
      },
      {
          "address": "0xFC2a616D48a8681250Aaaf590404E20812e96cFa"
      },
      {
          "address": "0xfdFF5E5D5bC0BC3d4FC9c78519CC4fB91E2fAa51"
      },
      {
          "address": "0x000000000000000000000000000000000000dEaD"
      },
      {
          "address": "0x06fD7f49CA5bC7929A92B1C7B4639f049b413820"
      },
      {
          "address": "0x0cFCbe12DD9544f4462d788BdF1AfD34D7273A5B"
      },
      {
          "address": "0x14D9Af7695Ba60AF3714d21A869B27f9a3A05024"
      },
      {
          "address": "0x228dEd9e486f8e00510fD8AB64fF684D6f941250"
      },
      {
          "address": "0x292d76ef68931Cda7C2Fb2b580DF263dca3d9b9B"
      },
      {
          "address": "0x2b8c200C93C7813b792980F6245b03540F36Db72"
      },
      {
          "address": "0x3A49309413793b32F6A308769220147feDbFfa5f"
      },
      {
          "address": "0x41020c12FbF52Af637dc8e91ea4EB9D512d99A0a"
      },
      {
          "address": "0x566a6D819618390b8F5De7461669203aEa1f4533"
      },
      {
          "address": "0x5F6c1264E45A93d0d99CF83d9D1b7c3782aEBacE"
      },
      {
          "address": "0x6cF879fBb0da9445550E69A4b993142BC2066726"
      },
      {
          "address": "0x6db296A6721212B43474FcBb5CBcE4736299aCFb"
      },
      {
          "address": "0x6f8be3F685389612F59508828AE54f03b5f64cE1"
      },
      {
          "address": "0x74619cFc7EC552e5051c181f49428Ccd154256f7"
      },
      {
          "address": "0x7d9f4cB1aDc632E697d604304AF4E1E92eCd181B"
      },
      {
          "address": "0x9B921faD875b06183d3992A125026c89915D71F6"
      },
      {
          "address": "0x9fE64F6757A358eA06be1657c8EC0F9586604988"
      },
      {
          "address": "0xa4317aB9d7DF7453d8E0853415e04f7e3a78f78F"
      },
      {
          "address": "0xA46F24D23bb97D2fD127B81A6d849b66D976B8F0"
      },
      {
          "address": "0xa4911D48270DC947048f4213f238813A2C86B753"
      },
      {
          "address": "0xa50b080F064E22b990776c90D004b0aF843a4Cd5"
      },
      {
          "address": "0xA7BD745215fA1cee3E93Ef2De195C5A53B6C75bB"
      },
      {
          "address": "0xAADe429A8EA9AF8CCcc0C7c9f6AC1d7C40783550"
      },
      {
          "address": "0xaB0caC34653E32938679870BA3f6683c0F94F7bF"
      },
      {
          "address": "0xc1dc7965b9606066D9B2114b01Bee430FEaa859F"
      },
      {
          "address": "0xC2D95D30735613b4AE7eFA9801CE413190c7Bd99"
      },
      {
          "address": "0xD08c3C698C25B3cC25B6d9BB7a9224070679B04b"
      },
      {
          "address": "0xD11c68C37d2374512C5593103694C92D0F81fC4d"
      },
      {
          "address": "0xD59297f47c3039E96bC2F1E7bDF1C255C88306b2"
      },
      {
          "address": "0xd7571d439B906833aA0aB7eD781574c517f02bc5"
      },
      {
          "address": "0xD887758a36bbf3c44ba3F1ffA0d8Ff8D536Cc129"
      },
      {
          "address": "0xE204D190F76204ccD98038d55Bd30eAF39922052"
      },
      {
          "address": "0xF7678EB5d3a44525dB96Fe63fD53E46B40451CdB"
      },
      {
          "address": "0x002eE33092457900515A4249e3eC1Cd2B2Dc8C32"
      },
      {
          "address": "0x007cB716c24D4BecF3143a8F6BA7418ccC05A544"
      },
      {
          "address": "0x01Ec738293d4fA32D99374A4519B450f4DB2bA54"
      },
      {
          "address": "0x03B545A5d2D60c8DAcD8489a65FA05E002F9D143"
      },
      {
          "address": "0x04357b83aFD2639e6317E8807d4b27B6087e5763"
      },
      {
          "address": "0x05AE0683d8B39D13950c053E70538f5810737bC5"
      },
      {
          "address": "0x06A9c662ca9025670AD4F154C34ae01110498775"
      },
      {
          "address": "0x0825763863244430B73667e06C561844F035053C"
      },
      {
          "address": "0x08A5b5Aef7eb13F5c205028e8941C57Efbb94722"
      },
      {
          "address": "0x0985224a811E65c235DBF4a2C2117712AABe4e39"
      },
      {
          "address": "0x106a8e5b8E23e216b2946d68d6B52c151ef30E23"
      },
      {
          "address": "0x12849Ec7cB1a7B29FAFD3E16Dc5159b2F5D67303"
      },
      {
          "address": "0x13f5Ed344687bEDe5093bEAA91EcE7E0125B1025"
      },
      {
          "address": "0x13f6F1134D1E6db48756253F1796916962f67eb6"
      },
      {
          "address": "0x13ff6C84Ce051A8450f6De2F34B4Cc5666F17Fd4"
      },
      {
          "address": "0x14cE3E82F0B4278C2661dE9EC6f81E8D8810f65e"
      },
      {
          "address": "0x159d6f625DDae72fba5DaDaf320fb59D6168Cf9d"
      },
      {
          "address": "0x15cEca24B3A3300f0C93748F3D12C7669bD78aC3"
      },
      {
          "address": "0x16cb4898D68DF1427c90b58eCDd90002DCE3A9f2"
      },
      {
          "address": "0x16D1E71F1C1bC6B7A3d1435d5422C767dd298b92"
      },
      {
          "address": "0x16fe816fb27642AD1C8F6dfDa6039904A8B73bA3"
      },
      {
          "address": "0x175da1a2974534Fb6b87aC22Cd5b954ECA486e4d"
      },
      {
          "address": "0x17e8eaBB7f3aBaead54db09a84A1C5a3F8F53Add"
      },
      {
          "address": "0x188C30E9A6527F5F0c3f7fe59B72ac7253C62F28"
      },
      {
          "address": "0x195b8b9598904b55e9770492bD697529492034a2"
      },
      {
          "address": "0x1AC284668cC833A9d04Cc21ff16fEa7Df1CBDe75"
      },
      {
          "address": "0x1ae26F1640FF355676DB35216bEccb0dC7679cF3"
      },
      {
          "address": "0x1c8817ea11Fc884210A0Bfa67333dD914F9C0483"
      },
      {
          "address": "0x1e7a16590bF4dEb25E30358Cb1747f2fbA969A7e"
      },
      {
          "address": "0x1ea83500D1bC7001fac0A54dA1D44139B1B6A35a"
      },
      {
          "address": "0x1F1C21C33d94C7077db005a374b8ef13F4f1a72D"
      },
      {
          "address": "0x2146C5e2777034c50a8edE7e4E5B67d132175168"
      },
      {
          "address": "0x21e2fb232e9FC401201E34176CB5EEa01F28c854"
      },
      {
          "address": "0x242Dc7832cC5d57006a3A3D32e9c003E636a6c84"
      },
      {
          "address": "0x25d29eC2E2403351ddc1244088e41FCC7e3285cf"
      },
      {
          "address": "0x27844e66c051cC09C7e1075bbc242CB875Eb44f9"
      },
      {
          "address": "0x27c5121cAB797645E92Ea9F03Bd9438d82624A34"
      },
      {
          "address": "0x28FE7028375335A627B16aF0222f80bb7fdB404e"
      },
      {
          "address": "0x2A2CD7400F922085b62cA9Bd9AC0f16151f716Ab"
      },
      {
          "address": "0x2aD0f7fE1CD3d1A321060de756325298489e77ee"
      },
      {
          "address": "0x2D5bDddfA561D7E9Bf13cbA0f0D69034c4b37Bde"
      },
      {
          "address": "0x2E1B98DA24E92Ed947Ad3dFcF2776114bD84c28C"
      },
      {
          "address": "0x2E40E6C5a91A66728bAa76C717c988F170eA61Db"
      },
      {
          "address": "0x2ECBb905fE50B0A372d9060187A3c4B98f2d5254"
      },
      {
          "address": "0x2f696842a445543FeFcd9AfaCB4996E7706095a1"
      },
      {
          "address": "0x2F980B046509d8Ff974FF34333A32c305429b01E"
      },
      {
          "address": "0x2FfFB39aE6aE075814CfA3F0A66f0830A7E856d7"
      },
      {
          "address": "0x308Bff328370FC4a9683aB9fCd79A21be6dC5eE4"
      },
      {
          "address": "0x30FE9e1972A79f7351749602c5E3253DE6310BA1"
      },
      {
          "address": "0x32Af25467b00aAe516505B3331cfEc52092ea5BA"
      },
      {
          "address": "0x334CE923420ff1aA4f272e92BF68013D092aE7B4"
      },
      {
          "address": "0x33777F307A66f0D0DD5d5bB1D9fD4194f71E16c2"
      },
      {
          "address": "0x34ec176d4BeD3644C7A58aB57a9d7493A12e5535"
      },
      {
          "address": "0x3576f178a658A948742F1074E484259FFf8869Ed"
      },
      {
          "address": "0x37240ff28720B1D4fEF64259Fa388e1f0Cf47bf7"
      },
      {
          "address": "0x378F1B3C40D270FDe4ac3C7A1fe3407b15Ed1aA0"
      },
      {
          "address": "0x399e0Ae23663F27181Ebb4e66Ec504b3AAB25541"
      },
      {
          "address": "0x3B3ac88fdFd33d8Eb95D62D884ac552e46894887"
      },
      {
          "address": "0x3b485Db96b4d995862Ba0173E7D90E21CEA1f687"
      },
      {
          "address": "0x3C9A28263B5Becf6b0773BF9736b9d0D5F08Cb06"
      },
      {
          "address": "0x3d0576fadc008EdE206eDF3506d3D7A94351a5a6"
      },
      {
          "address": "0x3Dc72d6358d6D71A0B9568E539D54d31434775E1"
      },
      {
          "address": "0x40E37a375E66E19D358b181de175bd2b78A91acB"
      },
      {
          "address": "0x4278D3E39f25D690B2d060c119AB2478fa09AFf5"
      },
      {
          "address": "0x434e8971592E898316dc8b7a39D6f9Be03ed5f66"
      },
      {
          "address": "0x442DCCEe68425828C106A3662014B4F131e3BD9b"
      },
      {
          "address": "0x465DCa9995D6c2a81A9Be80fBCeD5a770dEE3daE"
      },
      {
          "address": "0x46Df44d4f7189278Ff6f5D8c6155025A20f39E62"
      },
      {
          "address": "0x47b2EFa18736C6C211505aEFd321bEC3AC3E8779"
      },
      {
          "address": "0x47fE0C316373474d96Eb77c16F810036e287f40F"
      },
      {
          "address": "0x4945B1aCA2f85b6C7Db9aAB30fc4F730F5b63Ac3"
      },
      {
          "address": "0x4981c8Ab52cb38D747753997fe8c08Df2106D892"
      },
      {
          "address": "0x4B3d3b57B86B03614f78D5d8Fe27A2d85e4C8fA2"
      },
      {
          "address": "0x4c61d468c05089A409bE97cb060cAa47Bd8249e7"
      },
      {
          "address": "0x4D9339dd97db55e3B9bCBE65dE39fF9c04d1C2cd"
      },
      {
          "address": "0x4D9541033C7cAf795672D9e479e10bb505e52995"
      },
      {
          "address": "0x4df5530cc261F1980a085DCd784B29b22BC3e705"
      },
      {
          "address": "0x4ed08Edd10eC1e2f137189B03801c2037166FDcD"
      },
      {
          "address": "0x4F11F218f5fC748CCCa2d3Da9c2EB7BBde8bba36"
      },
      {
          "address": "0x4F4FE31dA7b4EF670CDA9baC141b01844dec5612"
      },
      {
          "address": "0x4Ff05543D3A53Ce52Da701fbA2Af11255f0a066C"
      },
      {
          "address": "0x50e0f561Dd634c2cbfAb98D4a2689103Ae1f6fB3"
      },
      {
          "address": "0x54BeCc7560a7Be76d72ED76a1f5fee6C5a2A7Ab6"
      },
      {
          "address": "0x55B9f53b58af04807d658bB8F883C10624C4AD7a"
      },
      {
          "address": "0x56A65D2dCef3AD7739bd296FFa18e8f2Ef8aDC42"
      },
      {
          "address": "0x57503Fa42086300CdA9fCEe6FA95915F5bb04680"
      },
      {
          "address": "0x57e5f230F1A87d6276c2D9dbFd2C0C4a5beCa4Bf"
      },
      {
          "address": "0x58015a72209437C9347222552e9ad331A5F3bfcB"
      },
      {
          "address": "0x58fA6d14cf86c7b5B5f283BacdBa529eE79a32BD"
      },
      {
          "address": "0x5A07BBf23bb873A2C6C927b891cf5F879e8a91f7"
      },
      {
          "address": "0x5AE7A9E5D756Fc416495e82a59b399DFCa9b46E1"
      },
      {
          "address": "0x5be10f3434bC1aC6C0A34f86Da39Ea0095392f21"
      },
      {
          "address": "0x63F69C262122fAc7fa4a1BF4eb599F63d7cB6506"
      },
      {
          "address": "0x6584750d2d65c4abf8c2EC879c41E1B511241778"
      },
      {
          "address": "0x65d86DcBFE2580ef3e54C109094A1C86850d24Be"
      },
      {
          "address": "0x66D32B026E721C73F283AB708E4407B0A9ed0599"
      },
      {
          "address": "0x67D8C8b467081De46241EC17b7e3b9f64c4147cB"
      },
      {
          "address": "0x6880ACDc9b0eF1bBfaE9aab3646f19859c4a69B3"
      },
      {
          "address": "0x6Ad60E4047a113AAe4E0A1Cc8F74Cf557931172A"
      },
      {
          "address": "0x6b30a93c60Cb3d6F95EDD1c16213269c036a22bE"
      },
      {
          "address": "0x6B5b81eD8a2d8512b56b3AB5601979085520e554"
      },
      {
          "address": "0x6E02e27F03Ae982a3De019BCdB01AeF3CA8a91e0"
      },
      {
          "address": "0x6e0306113e2fa3c2821B3992298D95ee13436E87"
      },
      {
          "address": "0x6E9cbD42688832157A9fA3Afa013e034fA7a8EAf"
      },
      {
          "address": "0x6eD2b7e7Dcd5C941c7792b9889D5b0B79F4F4410"
      },
      {
          "address": "0x6F3E3Cacff69AaB557B810FE5844570C23426dF9"
      },
      {
          "address": "0x702f5B4DbCb07a22993a1Ba7Ab877E2947b0c9EF"
      },
      {
          "address": "0x70e7A6621F4cB3c3E073D0539899F49fC88424C0"
      },
      {
          "address": "0x72913a8B68E1D50b1f068B0C99Eb463380C4dFbc"
      },
      {
          "address": "0x742b5a90fC0905B92E8b478561263d6D1d809A7a"
      },
      {
          "address": "0x7485ac6d8534691993348D51ab0F131a19FfF763"
      },
      {
          "address": "0x749B28D1Ae23Cf7444AC6A37A80FE4A22C61601d"
      },
      {
          "address": "0x7539B1455F9258994d41B737cf3E15225D2c141a"
      },
      {
          "address": "0x760AAfc261881f1BB0587Ef76F0dB9c592F7337e"
      },
      {
          "address": "0x784b45146Dde2232ceB7fb4007D07AAc78f8Acb6"
      },
      {
          "address": "0x78FB3D569650ea743fb7876312CB5ff7505Dd602"
      },
      {
          "address": "0x790F717Af667f91B87fBe7063034565542fd3929"
      },
      {
          "address": "0x79eA9f830D8CCe712e455D165dD48895Ed055dE6"
      },
      {
          "address": "0x7a387F96257462c260a1D4aFb8a05feA9258198D"
      },
      {
          "address": "0x7aa69b5EE49C4D3170e037960ca6c83F61241395"
      },
      {
          "address": "0x7c07181DDB5744823B651cE0d3A25943CEb03c79"
      },
      {
          "address": "0x7c3e9355AC1297beBc0aD103f2106fBD00D1d912"
      },
      {
          "address": "0x8062E69aF89430d0749697ceDE9614Cda80325e0"
      },
      {
          "address": "0x80dEdf478Df0f8F89aD085799dF5A0aadCB56664"
      },
      {
          "address": "0x80F0b99Cf421e4e04170e35bCb89d462C68bD7F2"
      },
      {
          "address": "0x81Cc3256C3b45693A11861960636f3b9697Eb72B"
      },
      {
          "address": "0x839395e20bbB182fa440d08F850E6c7A8f6F0780"
      },
      {
          "address": "0x84572C31ACdd30c03982e27b809D30b1eFbCD8f2"
      },
      {
          "address": "0x867B7CB8C8342A6124104836d2D10E08C7B286db"
      },
      {
          "address": "0x87D61Ba0F22202249e816A9E474d4933bA32E0E3"
      },
      {
          "address": "0x87F3dF4936A9e1c63685996C4C7e66e86EeA9a00"
      },
      {
          "address": "0x8852924b6b2e2eD94aaC75A0249B55De44f46bFa"
      },
      {
          "address": "0x886478D3cf9581B624CB35b5446693Fc8A58B787"
      },
      {
          "address": "0x88FB646c1eEA8aBbBfB9A8bAcfB28a952b376998"
      },
      {
          "address": "0x8A559Bc81aEC5B46d5ee3D7EEa14FF473B8E693e"
      },
      {
          "address": "0x8A7BA27DF5e23690aC42E22Fee5eD9206E3543Ff"
      },
      {
          "address": "0x8A7f7C5b556B1298a74c0e89df46Eba117A2F6c1"
      },
      {
          "address": "0x8AebeBf863078e21965C3B97Ee19283d57cb4Da3"
      },
      {
          "address": "0x8b5B9497e096ee6FfD6041D1Db37a2ac2b41AB0d"
      },
      {
          "address": "0x8bEAfBfF6272d10C8c834E1014f1d6cc24336b30"
      },
      {
          "address": "0x8C8024bf5f90a06CCeD7D32BAbcCB934942c82f6"
      },
      {
          "address": "0x8E2f7cd16224ebE91b33cE53bcbE9bc313f422F7"
      },
      {
          "address": "0x8E63E4376dDE62cb82f5a91C4bCE4156457dEdB1"
      },
      {
          "address": "0x8f5e97E1E3d47A2f223a67e06de21F067B7779Db"
      },
      {
          "address": "0x90c19feA1eF7BEBA9274217431F148094795B074"
      },
      {
          "address": "0x91327093D3183D10e2bFecA36B7b7DfEc6f7763F"
      },
      {
          "address": "0x91d20927BfFEcb05D603Eaba287CcC5D8F96DF41"
      },
      {
          "address": "0x91dCCAA260CC4616E1a6e6b693DB7207C5E42937"
      },
      {
          "address": "0x930965092ABeDFD65253691087BD4d778962C6eC"
      },
      {
          "address": "0x949E31161D711BE691E4177466DC8bE04530240b"
      },
      {
          "address": "0x95C276dC9867e3417d0B032C0FC7D6ac6e8111CD"
      },
      {
          "address": "0x9619d3FA1F29c1de8fcFaCEDC07321637c1f0C3B"
      },
      {
          "address": "0x96a62A6631d07DBfBD300D6b55B162B4631Df106"
      },
      {
          "address": "0x96A97C532E5c1848f9aE506f036f13104C6F4a8A"
      },
      {
          "address": "0x96C64Bc042026eB1f131Aa56a4DBBC7aBAC50Ae1"
      },
      {
          "address": "0x975FcAc1B4030ef5b5c319F972634ea6fE757998"
      },
      {
          "address": "0x983110309620D911731Ac0932219af06091b6744"
      },
      {
          "address": "0x986E7F524b2833D21713346040721873BE1EB459"
      },
      {
          "address": "0x99216D07099604c76F57EDfE2B34f7b292f4331b"
      },
      {
          "address": "0x99816Dd8bDB30EC841e992D3cbA5ff6D5dc92D60"
      },
      {
          "address": "0x9Cee1B1D787Bc70d8E4c00d14E25088Ef66Deb97"
      },
      {
          "address": "0x9e0149f7CC28c93A3B5F76AB3e8A2a22d14435b5"
      },
      {
          "address": "0x9eBF1a68A5ad612378BDE3f50f7F734398244353"
      },
      {
          "address": "0x9f171208547C9bBb70BAfF03a2dA9F312316a9F2"
      },
      {
          "address": "0xa061fBfa7dC7Ee9f838a717e8B55Fbc34641Bf6e"
      },
      {
          "address": "0xA0a0e4c41eAC834d12F83120e298cd24fd6DE1aA"
      },
      {
          "address": "0xA136A3AbC184Bf70De3614822b2A6E6D8Df018e5"
      },
      {
          "address": "0xa13fC94b0dd2F72E889e2b07470538977ef21200"
      },
      {
          "address": "0xA186727FDAF90cD7d9972572E32C618Ce04206f8"
      },
      {
          "address": "0xa2DF601D3CA31B8484d8B862Ae61eEfc91c3dd2F"
      },
      {
          "address": "0xA36541C62493Da8441A31F96ecD072FCDDfe2C42"
      },
      {
          "address": "0xA3C277b8f35881CBdb017E52bcC376B3ce8F21dA"
      },
      {
          "address": "0xa52D69AD9a268a37bB1aC8DC945b6A57Fc15B5d4"
      },
      {
          "address": "0xA663A1AFA3cceB9E6Cf5d0e612b80D2bAD85E6d2"
      },
      {
          "address": "0xa6a8b32Ef1fffAD3120a1D1CFDC8A769372a95FD"
      },
      {
          "address": "0xA711C018CF6274Cc38FEfb4042A65732C8096dAf"
      },
      {
          "address": "0xA7D7Ac8Fe7e8693B5599C69cC7d4F6226677845B"
      },
      {
          "address": "0xa900a2364eec10ecBE862C1f11D89AA9583E8F86"
      },
      {
          "address": "0xab31Ea5ab64539516d4a690c05075C191f2626cE"
      },
      {
          "address": "0xab3fbD90666D57eD746662d1a3D4CbF75824D7Be"
      },
      {
          "address": "0xaED094D187CDaA45E3c7Ccb51144032276B14173"
      },
      {
          "address": "0xB18c8e0a2Da9B167b96382fB1304e5158286F4EC"
      },
      {
          "address": "0xB1aF13b2E4Be55cA69829A23C09a1f5663Adf8D0"
      },
      {
          "address": "0xb1C3015A546b698c85aC7DeDb427461aeA522E6A"
      },
      {
          "address": "0xB24404358687aFF86E7475d3a6b124a18Ac9aD34"
      },
      {
          "address": "0xb2ECAE34e529e04456A5EE3D3c80427669841f9E"
      },
      {
          "address": "0xb359c431652918DC7639748272aB71eC0A50A997"
      },
      {
          "address": "0xb432005e1010492fa315b9737881e5E18925204c"
      },
      {
          "address": "0xB44996b12b76fd6a73678805c8F7E9BBed7aBb15"
      },
      {
          "address": "0xB57537d47F88c09E6e585D539d5915fedF2259cE"
      },
      {
          "address": "0xB57EFbA074966fc499835996746acdE35d7aD38e"
      },
      {
          "address": "0xb60211811a4977b5F4B65a1D2D27a2591D73d1Ac"
      },
      {
          "address": "0xB8602E8148B7DE11EcE569867cBC0f41997B9184"
      },
      {
          "address": "0xbBB27C2D5a27AbE68bdC4e47EF8A822f164Ee72B"
      },
      {
          "address": "0xBbbEc054d75b9f75a96AeD0BB3bfFA310777ac95"
      },
      {
          "address": "0xBC3C244e5Ca78DA784cD9FEb31C3A602D90d6fF2"
      },
      {
          "address": "0xc013d0A3474C0851aA15A76d5897cD8ce6E56F5d"
      },
      {
          "address": "0xc0548825bD34b96448B487Ed7028cf6b532228F9"
      },
      {
          "address": "0xc1694183Ac7178558682d12C68Cd09462f1Da884"
      },
      {
          "address": "0xC169a4554647fF28565E8a04DE602aA965Bc2c9b"
      },
      {
          "address": "0xC1a02308d3870A319ee18a9E7b4aF06f5712382a"
      },
      {
          "address": "0xC20062216b646f0670a37d7602c22B7786d92939"
      },
      {
          "address": "0xc230225bF14836ca1840aB9EBEA8b7A872f45AF4"
      },
      {
          "address": "0xC23274347e8Aa82d363140d3cefb71Ff588EfFed"
      },
      {
          "address": "0xC2458e55e8021C484b468F6a4AC858F6Eb0E644B"
      },
      {
          "address": "0xc5Da6fA89CfBECb0310b413E05dC98CA2F875864"
      },
      {
          "address": "0xC5fdA9b6258b392f120dB67202C605BF22c29853"
      },
      {
          "address": "0xC6Fe543A3f3bb66A091a56d7aFcE56D24917252A"
      },
      {
          "address": "0xc97BAeE84347477BBC75E52E830820116cDA6b45"
      },
      {
          "address": "0xCA1146C1D1b26Ca782F7388096462189fB09113f"
      },
      {
          "address": "0xCb0ed153B4689a1aBC9769FA47600350b1e56A1F"
      },
      {
          "address": "0xcb1A0F26c89fbC1BCb14fE1Ee9a2785BAE419e81"
      },
      {
          "address": "0xcB7c05fab273A79e1c380931B7540552C5E4AEE3"
      },
      {
          "address": "0xcC138070c04C8559d45FEe9EE1A0877340F90632"
      },
      {
          "address": "0xCc47fCBfdd6e558fB39CF5Ef4d92e59890476b86"
      },
      {
          "address": "0xcC8c9557a1E78f51A7E6550e71918E8bE49B1843"
      },
      {
          "address": "0xccDB4D73628EA8403Ce76EF7DA8700f77dc54ea5"
      },
      {
          "address": "0xce470C2a40E41233D250aB6BE0A8f4dbf966308A"
      },
      {
          "address": "0xCeD9Cb86754c9190A832ebbE92fB62c7Fd8C1fBb"
      },
      {
          "address": "0xCfd7396E8690265894357fCC1996A40FC0879BAD"
      },
      {
          "address": "0xD017AA7d4D054a673092AC9E14C82D3e73D8f040"
      },
      {
          "address": "0xd0285d2DCB47C8dA3DC4fcFbbe024277EC2609c6"
      },
      {
          "address": "0xd1380A4e089950ee3a23d818E24ccBbEf003a432"
      },
      {
          "address": "0xD1E561F1C03797c65075912B2cb5F9214949beE8"
      },
      {
          "address": "0xD1FC6C2c64268A854a766196cdAb99bc04Bf4e44"
      },
      {
          "address": "0xd340e01ae68e27f2e50ED8191aDb71C2094FC274"
      },
      {
          "address": "0xD3AF455c69dcC9fe070EE602F768c16a02655952"
      },
      {
          "address": "0xd64C6d86B93ecc73b85bb97BB01fC3D9Fa20D672"
      },
      {
          "address": "0xd6b070156BEF7652aA8776708822CCDe7173361d"
      },
      {
          "address": "0xd6B09a68dEF89329dd82b4605a7234641FA41113"
      },
      {
          "address": "0xd934CC70B1b06256581527a534285f5bd6A7eDc7"
      },
      {
          "address": "0xD9F0834E7Ca9B9262Df3189b850eBf9514027e82"
      },
      {
          "address": "0xDe0e14E314eC13caBC21272f9dD27dEc0C92B504"
      },
      {
          "address": "0xdEaAa9840C8403FBA1F75b59bAd6F974D3b7C964"
      },
      {
          "address": "0xDf9c28cD756DD94564f007f5a38311c8229094D3"
      },
      {
          "address": "0xdFcc413bC451c09B5D344C6dcd73569DCC05426a"
      },
      {
          "address": "0xe0Fe475102F3D80Ef84C26A0c7092Cb5960d0454"
      },
      {
          "address": "0xE10f4085fa27A96e7E5Cd1cbE78a0bd7bDed1300"
      },
      {
          "address": "0xE120ed22A0cD12d5De6122aa7D5b6D93Ac218b49"
      },
      {
          "address": "0xE1a4471E8b7670539Bd98F82508e775823F5A84B"
      },
      {
          "address": "0xE1FF19610020D72930aEe1b9c047e35B7fD0080e"
      },
      {
          "address": "0xE21C09ACB02831edea9f0778eFD3b9d18e576D73"
      },
      {
          "address": "0xE341737D8905a3e3C0017df63B6d64db88168ABD"
      },
      {
          "address": "0xE4643CB3745d0714677a58790Ff2E88eDe37626D"
      },
      {
          "address": "0xe5A8654631B3729F73ca3503bA09a5d3e11b46da"
      },
      {
          "address": "0xe642AEAc03B34565c624D6101550FB91a83c1Ef3"
      },
      {
          "address": "0xE700dA8459A5CCb19657e4C8Bf0A7Ae95C9B076e"
      },
      {
          "address": "0xE8E76b5AA6CE492c57465060DaA949bf3DE4a3D9"
      },
      {
          "address": "0xe957B0829C6Ae6ac461d7365b7927E1Ff604114b"
      },
      {
          "address": "0xEDEdb6D882CfBF5DEA7803cf0013Cef9C2bAc06F"
      },
      {
          "address": "0xeE0f9973B2159229AaA0b5E90a704F9da72A8Da1"
      },
      {
          "address": "0xeEb47425f10D216AfA6254eC8fCfE389837991aa"
      },
      {
          "address": "0xEf58304E292fBAeacFdeC25b67b3438031FdE313"
      },
      {
          "address": "0xEFCC4C68e1dDFaA4f0FA3a7479F0fB082f96A56b"
      },
      {
          "address": "0xefef50EbACd8DA3c13932ac204361B704Eb8292C"
      },
      {
          "address": "0xF013164f85D9a0576D5A791D80f18db5b85dCc68"
      },
      {
          "address": "0xf1221A4cB7d88d09B5F1b68Ff02b36EF81Fa37fb"
      },
      {
          "address": "0xf1265e58144bE258af7Aeb9956C370A6D43396E9"
      },
      {
          "address": "0xF22F00D0B95B1b728078066E5f4410F6B2Be8faE"
      },
      {
          "address": "0xF2C16ae7887450CE0018CDbAd26cfDbab183Ffee"
      },
      {
          "address": "0xF41a98D4F2E52aa1ccB48F0b6539e955707b8F7a"
      },
      {
          "address": "0xf478a902d6b87E4038d2500d34901afCf99A004d"
      },
      {
          "address": "0xF503c4CAc2b5A27f68eeE197eFB94e6fDeAa48d1"
      },
      {
          "address": "0xF5C5e9c858fF33f22aF310Ae7c4C5a15387A5042"
      },
      {
          "address": "0xF6E895F7993a831dA655400fE4e00B8D2Cac7349"
      },
      {
          "address": "0xf894FeA045ECCB2927e2E0CB15C12debEE9f2BE8"
      },
      {
          "address": "0xF94aBF1327DA4C4d2C69afdDD634697ea496035E"
      },
      {
          "address": "0xF9F56b6dc4c297b0d942B0e03F7E67D6dD0ed7BE"
      },
      {
          "address": "0xfA367003c00DD2b74d4F50c9623e1c35728DE1f9"
      },
      {
          "address": "0xfAb9a3D37999E12252b47468D2FFD4BE15936012"
      },
      {
          "address": "0xfbA2C2bBF977eDA19Ad819Bb46787F4C91d1fFaD"
      },
      {
          "address": "0xFC199e896bB4A153046Bacb8B3C3170079190705"
      },
      {
          "address": "0xFCEE120094854fBfdc98cE8a80b8057BDEb928a7"
      },
      {
          "address": "0xfDfC7e74045E1497136FE6FAce2871Cb2951c140"
      },
      {
          "address": "0xFf18298382948028F9D93c4E32be1382204022c8"
      },
      {
          "address": "0xFF30180Fe01AfE6633e70075D9B877E5B24DE23f"
      },
      {
          "address": "0xfF9A34E8Fb6c941F53DC151dFfAc736cFB20b925"
      },
      {
          "address": "0xA3C40c0C6673e0a39368Eb0A7273Ce17AE58Afeb"
      }
  ]

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
        let proof = getPresaleProof(WHITELIST,walletAddress)
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

      // Checking total supplies
      BoxInstance.methods.totalSupply().call()
        .then((amount) => {
          console.log("BoxInstance.totalSupply: ", amount)
          boxesLabel.innerHTML = numberWithCommas(10000 - 824 - amount)
        })
        .catch((error) => {
          console.log('box totalSupply failed: ', error)
        })

      PizzaInstance.methods.totalSupply().call()
        .then((amount) => {
          console.log("PizzaInstance.totalSupply: ", amount)
          pizzasLabel.innerHTML = numberWithCommas(amount)
        })
        .catch((error) => {
          console.log('pizza totalSupply failed: ', error)
        })
    // 
      // BoxInstance.methods.totalNewPurchases().call()
      //   .then((amount) => {
      //     boxesLabel.innerHTML = numberWithCommas(maxNewPurchases - amount)
      //   })
      //   .catch((error) => {
      //     console.log('box totalNewPurchases failed: ', error)
      //   })

      if (walletAddress != 0) {
        // Check number of boxes
        console.log("walletAddress: ", walletAddress)
        BoxInstance.methods.balanceOf(walletAddress).call()
          .then((balance) => {
            console.log(walletAddress, " owns ", balance, "boxes")
            pizzasToRedeem = 0
            for (let i = balance; i > 0; i--) {

              // Check address owned ids
              console.log("Trying tokenOfOwnerByIndex for wallet: ", walletAddress)
              console.log("and tokenIndex: ", balance-i)

               BoxInstance.methods.tokenOfOwnerByIndex(walletAddress, web3.utils.toBN(balance-i)).call()
                 .then((boxId) => {
                   console.log("Owner of boxId: ", boxId)
              
                   // Check if it was redeemed
                   PizzaInstance.methods.isRedeemed(boxId).call()
                     .then((value) => {
                       console.log('isRedeemed: ', value)
                       if (value) {
                         console.log("Box already opened: ", boxId)
                         boxCheckLabel.innerHTML = 'Box was already opened!'
                       } else {
                         console.log("Box still closed: ", boxId)
                         boxCheckLabel.innerHTML = 'Box is still closed!'
                         // Add option to bake pie selector
                         var opt = document.createElement('option');
                         console.log("box value",boxId)
                         opt.value = boxId;
                         opt.innerHTML = boxId;
                         selectBox.add(opt)
                         console.log("selectBox",selectBox)
                         pizzasToRedeem++
                       }
                     })
                     .catch((error) => {
                       boxCheckLabel.innerHTML = 'Error: ' + error
                       console.log('isRedeemed failed: ', error)
                     })
                 })
                 .catch((error) => {
                   console.log('Failed to get boxId for index: ', i, ' with error: ', error)
                 })
            }
          })
          .catch((error) => {
            console.log('box balanceOf failed: ', error)
          })

        PizzaInstance.methods.balanceOf(walletAddress).call()
          .then((balance) => {
            console.log(walletAddress, " owns ", balance, "pizzas")
          })
          .catch((error) => {
            console.log('pizza balanceOf failed: ', error)
          })
      }

    }

    const handleUser = async () => {
      console.log("handling user")

      await web3.eth.getAccounts()
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

    const buyButtonHandler = async () => {
      console.log('Buy button pressed')

      await handleUser()

      if (!addresses.length) {
        console.log("prompting metamask")
        promptMetamask()
      } else {
        console.log("triggering purchase")
        triggerPurchase()
      }
    }

    const testPurchaseHandler = async () => {
      console.log('Testing purchase')

      await handleUser()

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

    const bakePieHandler = async () => {
      console.log('Bake pie button pressed')
      console.log("pizzasToRedeem: ", pizzasToRedeem)  
      if (pizzasToRedeem > 0) {

        await handleUser()

        if (!addresses.length) {
          console.log("prompting metamask")
          promptMetamask()
        } else {
          console.log("Trying to bake")
          console.log("parseFloat boxId",parseFloat(selectBox.value))
          PizzaInstance.methods.redeemRarePizzasBox(parseFloat(selectBox.value), parseFloat(selectRecipe.value)).send({from:walletAddress})
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
        if (boxIdField.value < 0 || boxIdField.value > 9999) {
          boxCheckLabel.innerHTML = 'Box does not exist!'
        }
        else {
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
      // not using this right now, test function
    const createPrePurchaseProof = (indexOfUser) => {
      // Trying to follow Rhiz's frontend example:
      // https://github.com/PizzaDAO/pizza-dapp/blob/a0c6a8dd7aafd9e01b5bf3f54635715e2fc5ef70/dapp.html#L1378
     const claimListHashes = WHITELIST.map((item) =>
         web3.utils.soliditySha3(item.address.toLowerCase())
     );
     const claimListMerkleTree = new MerkleTree(claimListHashes, keccak256.keccak256, { sort: true });
     let proof = claimListMerkleTree.getProof(claimListHashes[indexOfUser]);
     proof = proof.map((item) => '0x' + item.data.toString('hex'));
     return proof
    }
      // not using this right now, test function
    const getMerkleRoot = (claimList) => {
      // Trying to follow Rhiz's generatePreSaleProof
      // https://github.com/PizzaDAO/pizza-smartcontract/blob/v4/scripts/generatePreSaleProof.js
      const leaves = []
      const data = []
      console.log('claimList', claimList)
      claimList.forEach((item) => {
        if (!data.includes(item.address.toLowerCase())) {
          data.push(item.address.toLowerCase())

          leaves.push(ethers.utils.solidityKeccak256(['address'], [item.address.toLowerCase()]))
        }
      })
      const claimListMerkleTree = new MerkleTree(leaves, keccak256, { sort: true })
      console.log('root', claimListMerkleTree.getHexRoot())
      return { tree: claimListMerkleTree, root: '0x' + claimListMerkleTree.getHexRoot(), data: data }
    }
      // This is the current proof function that is being called. This is where our bug is.
    const getPresaleProof = (claimList,walletAddress) => {
      // Latest version on call with Rhiz
      const leaves = []
      const data = []

      claimList.forEach((item) => {
        if (!data.includes(item.address.toLowerCase())) {
          data.push(item.address.toLowerCase())

          leaves.push(ethers.utils.solidityKeccak256(['address'], [item.address.toLowerCase()]))
        }
      })
      const claimListMerkleTree = new MerkleTree(leaves, keccak256, { sort: true })

      return claimListMerkleTree.getHexProof(ethers.utils.solidityKeccak256(['address'], [walletAddress]))
      //return { tree: claimListMerkleTree, leaves: leaves, root: '0x' + claimListMerkleTree.getHexRoot(), data: data }
      //result.tree.getHexProof(ethers.utils.solidityKeccak256(['address'], ['0x0048d02963b97445a012ad6d44bd38a0239c5b88']))
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

      await handleUser()
      updateValues()
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

    // detect account change
    window.ethereum.on('accountsChanged', function (accounts) {
      console.log('accountsChanges',accounts);
    });

     // detect network change
    window.ethereum.on('chainChanged', function(chainId){
      console.log('chainChanged',chainId);
    });

  }

  window.addEventListener('load', onLoadHandler, { once: true })
