  // Ropsten
  const NETWORK = 'ropsten.'
  const BOX_ADDRESS = '0x49700447bd9ea896f2f999c1bf20eb630d2c65e4'
  //const BOX_ADDRESS = '0xA61Ff9D3de8E58FB8D7dF9b98922775c513361Bf'
  const PIZZA_ADDRESS = '0x034bca7eb8d705f2a52bba52b94e98161d5370d4'
  // // // Mainnet
  // const NETWORK = ''
  // const BOX_ADDRESS = '0x4ae57798aef4af99ed03818f83d2d8aca89952c7'
  // const PIZZA_ADDRESS = '0xe6616436ff001fe827e37c7fad100f531d0935f0'
  // const MULTISIG_ADDRESS = '0xBA5E28a2D1C8cF67Ac9E0dfc850DC8b7b21A4DE2'

  const BOX_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"old","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"}],"name":"BTCETHPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"artworkURI","type":"uint256"}],"name":"InternalArtworkAssigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"PresaleAllowedUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"old","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"current","type":"uint256"}],"name":"SaleStartTimestampUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldConsumer","type":"address"},{"indexed":false,"internalType":"address","name":"newConsumer","type":"address"}],"name":"VRFConsumerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimStarted","type":"event"},{"inputs":[],"name":"MAX_MINTABLE_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PURCHASABLE_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TOKEN_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_minted_pizza_count","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_purchased_pizza_count","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_uriBase","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"batchMintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"batchMintRandom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bitcoinPriceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimWhiteList","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"claims","outputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"random","type":"uint256"},{"internalType":"enum RarePizzasBoxV4.claimStatus","name":"status","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_id","type":"bytes32"}],"name":"completeClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finishBatchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"request","type":"bytes32"},{"internalType":"uint256","name":"random","type":"uint256"}],"name":"fulfillRandomness","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBitcoinPriceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPriceInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"chainlinkBTCETHFeed","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNewPurchases","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"toPizzaiolo","type":"address"},{"internalType":"uint8","name":"count","type":"uint8"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"prePurchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"preSaleWhitelist","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleStart_timestampInS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"toPaisano","type":"address"}],"name":"purchaseTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"n","type":"uint256"}],"name":"setMaxNewPurchases","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"count","type":"uint8"},{"internalType":"address[]","name":"toPaisanos","type":"address[]"}],"name":"setPresaleAllowed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epochSeconds","type":"uint256"}],"name":"setSaleStartTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"b","type":"bytes32"}],"name":"setSaleWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"consumer","type":"address"}],"name":"setVRFConsumer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"b","type":"bytes32"}],"name":"setclaimWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"startBatchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"enum RarePizzasBoxV3Fix.batchMintStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalNewPurchases","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fallbackValue","type":"uint256"}],"name":"updateBitcoinPriceInWei","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

  const PIZZA_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"artworkURI","type":"bytes32"}],"name":"InternalArtworkAssigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previous","type":"address"},{"indexed":false,"internalType":"address","name":"current","type":"address"}],"name":"OrderAPIClientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previous","type":"address"},{"indexed":false,"internalType":"address","name":"current","type":"address"}],"name":"RarePizzasBoxContractUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"state","type":"bool"}],"name":"SaleActive","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_uriBase","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"}],"name":"addressOfRedeemer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"request","type":"bytes32"},{"internalType":"bytes32","name":"result","type":"bytes32"}],"name":"fulfillResponse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"rarePizzasBoxContract","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"}],"name":"isRedeemed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"},{"internalType":"uint256","name":"recipeId","type":"uint256"}],"name":"redeemRarePizzasBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"orderAPIClient","type":"address"}],"name":"setOrderAPIClient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes32","name":"artworkURI","type":"bytes32"}],"name":"setPizzaArtworkURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"boxContract","type":"address"}],"name":"setRarePizzasBoxContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleSaleIsActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

  const WHITELIST = [{
    "Address": "0x0048D02963b97445a012Ad6D44Bd38A0239C5B88"
  },
  {
    "Address": "0x00bb9D27Dc01603FAa422E31F51e642C558b9ec8"
  },
  {
    "Address": "0x0112e5b880503d80887e9a8713027071117ab707"
  },
  {
    "Address": "0x01bd8aac958c6e728557bcac756273ddd65bf19c"
  },
  {
    "Address": "0x01cB023186CAB05220554EE75b4D69921DD051f1"
  },
  {
    "Address": "0x041E42371BD0DdF93c0dFDeAd7e89B3CC9bD9a91"
  },
  {
    "Address": "0x0459fB6Db4D1F79F4938A0B077d3aE02405e2525"
  },
  {
    "Address": "0x046bBe099CfA0b6cc71d59D6E4Cd38c5d0eEF71b"
  },
  {
    "Address": "0x060c8C3e672f85c9cA86d7c3d15c27730b7A6E87"
  },
  {
    "Address": "0x069383C54a36be476f53395135E3a5D2864F7870"
  },
  {
    "Address": "0x072f38201348Cd61e39f1C41f05295466DCf35F2"
  },
  {
    "Address": "0x076a7Bcb5f6803ae24CeCDEDc1f9054E13167E71"
  },
  {
    "Address": "0x07F7aD934f81be64046f5E1A792D6c26Bb60972c"
  },
  {
    "Address": "0x081E9623A73F4eD41d60ACbD0EF34A66C82c8B99"
  },
  {
    "Address": "0x085527735711A744A18d858696aEd46dEaf616BF"
  },
  {
    "Address": "0x08971491517fa2b7ae2b7606b4820588b3ebfa98"
  },
  {
    "Address": "0x096D22122236B3E62D934EC8354Ef37230F5C9E6"
  },
  {
    "Address": "0x09DE262108795dB0037323B95e284825AC67516E"
  },
  {
    "Address": "0x09ee3a243463f3ad0a276db78176de6ce28dab0a"
  },
  {
    "Address": "0x0a3eb29ee9dc31901f201f1a803b977d9dae7172"
  },
  {
    "Address": "0x0A3f54c019EbF918CfAA12b7C5ab84956ac43458"
  },
  {
    "Address": "0x0a48B91c1560F0B5723ed10BeC1eD39D6eFD78be"
  },
  {
    "Address": "0x0a84069C260e28E0bB1C7f3649b8180022aDcE17"
  },
  {
    "Address": "0x0B53c82AE0A5caa911AA0C787Ec973cf65D6a6fF"
  },
  {
    "Address": "0x0c0265f1fb8e226564dc130d089525ad57d315e5"
  },
  {
    "Address": "0x0c1Bd9C2019e206963A886A2c1E7a0F11A0b634e"
  },
  {
    "Address": "0x0c5d6982D0046E50a0eBA1040B7125ffD6DD4237"
  },
  {
    "Address": "0x0d0722ad65bEd15211101C0e2191e76ADEacE9B1"
  },
  {
    "Address": "0x0d2Ad2809FA12955531Bda8aC76485DD6BfE95c5"
  },
  {
    "Address": "0x0dE9BE0C34634896ACc37c1a0bC7FFea1A1D2C96"
  },
  {
    "Address": "0x0e2D124cBe57a2805D4ADe75061eEd5C31Ad4A7c"
  },
  {
    "Address": "0x0eb92BC19020688414C577C6372cE128CFa5f02B"
  },
  {
    "Address": "0x0F25809d8E83AbC5Ff0f4Ceb8A8C39c79746d0B6"
  },
  {
    "Address": "0x0F398F8E611C5db4c0a60B0Db14ddd06DC0BE862"
  },
  {
    "Address": "0x0f7D8238185f907D5bc98cE87fff65b92CaF0C09"
  },
  {
    "Address": "0x0f907E5FB3605f0aE8e60aFE8Ca4a289A2981b43"
  },
  {
    "Address": "0x0fa8ddfc7719f1385095b2484b6e4928e0a0435c"
  },
  {
    "Address": "0x0fb90B14e4BF3a2e5182B9b3cBD03e8d33b5b863"
  },
  {
    "Address": "0x10876eba7877613F2204C9B6e68B36e24f5A7e1e"
  },
  {
    "Address": "0x10b54d8e8E7EA708E5C71915401261F92E03B376"
  },
  {
    "Address": "0x10e50be810a2914ee1896311Ccfb041b6A6bb7c7"
  },
  {
    "Address": "0x11EeE6CDFee403Ee838D9AA7E10f8449AD7e6402"
  },
  {
    "Address": "0x121c99d11809E44F2874e4142743fA3618936040"
  },
  {
    "Address": "0x128e482c59E2370d65Cb273a0cf8e2AC0629d9a1"
  },
  {
    "Address": "0x147b0BF026B15a8f7fDaBc4c3CD3A42Fdbb2f6BD"
  },
  {
    "Address": "0x15cDE990eD76289Aaa17464fA29876a4F881F257"
  },
  {
    "Address": "0x15d51e51CAF5585a40cB965080098Bfb68AF3336"
  },
  {
    "Address": "0x1660207BF5681c9cDB8AFe3A16C03A497A438753"
  },
  {
    "Address": "0x16ffe3938b69132c72a5b0250708792db72971b4"
  },
  {
    "Address": "0x1b4bD7BCf2463DDe4eD9ABB38f35e2E1e7452f5E"
  },
  {
    "Address": "0x1b6e29460979e09abbbbc66c1b98a184214d8c23"
  },
  {
    "Address": "0x1Bcf05FBbF3dBde262bc439A3Cc4cCfb39eAc830"
  },
  {
    "Address": "0x1C3046F0cabbe1D82f3B78f3B7747CA12Cc271Fc"
  },
  {
    "Address": "0x1cB720f7BDf9F3CF334b3396Ee1D081638a14B4e"
  },
  {
    "Address": "0x1d130d29b3906555030452f0f29cdb0b9750fd21"
  },
  {
    "Address": "0x1dBFb61Fe4ec07E4c4F4fd43dE1abEd7f7DD3DC9"
  },
  {
    "Address": "0x1e8b7dea2b3fee688a7b693c4713021dfa3ddf08"
  },
  {
    "Address": "0x1eF03c6B2d2102ef4cc3fB71723351E1f5135d0C"
  },
  {
    "Address": "0x1F2839c9Cd96442C492aEE69A7F4CEA5ae1BEaEB"
  },
  {
    "Address": "0x1fbe71c76320faf71177647a7b0c2da263271B89"
  },
  {
    "Address": "0x20A81A3307E0847F20c42d927216638F21f9B8c1"
  },
  {
    "Address": "0x20FA8F205Bc0971e699B16a01b828109356Ff76d"
  },
  {
    "Address": "0x21018ca8155fE46b435D52B0a1fc90E5E629f8Bf"
  },
  {
    "Address": "0x216FBB3cae4c5F7C5efD94F6C71d7F52dA7c7Be8"
  },
  {
    "Address": "0x21d7a1A909620AB6aA7BbC82451A40aE74631A67"
  },
  {
    "Address": "0x222348568A732B855d723E9b774cE0E15Bb7F8C7"
  },
  {
    "Address": "0x22755543d172D0E7F52536520813d44d2A74C03B"
  },
  {
    "Address": "0x22BAFA0694d73fB7E774290135B98D15E2486508"
  },
  {
    "Address": "0x23A2Fa0E0dcC3B4E718b1a94818e5B123D89B75e"
  },
  {
    "Address": "0x240f76cc1f4b36c8c1b053f716be0e2eb8cfdc15"
  },
  {
    "Address": "0x245482FD0a5A34771F221432Ca0CC1d64587D89C"
  },
  {
    "Address": "0x24E12C705D6A6FbAd19f4a84cd0B4c1c67646708"
  },
  {
    "Address": "0x25031fFed42a05d7DEa7a37308819C7f02dd7C03"
  },
  {
    "Address": "0x261890033FD1afb025df4e43A3e593df718443F7"
  },
  {
    "Address": "0x2649Bd829e37463B27135D6B11ba75fe0fb24108"
  },
  {
    "Address": "0x274433963a192F47E850E3A9c1df91728c6c7595"
  },
  {
    "Address": "0x2773cb2d13c6ad6099c5f92410416809baacde78"
  },
  {
    "Address": "0x27aa9F8c0728838e7795643DB0a58C37f4a88315"
  },
  {
    "Address": "0x27df2658A62E22d3e7A75FbAe3D625Cb02CC636f"
  },
  {
    "Address": "0x27e121bFB21f631496Ad5b9783D049FaCbdd411E"
  },
  {
    "Address": "0x28265b4188ff587e5cfe1155606026cd2ccd243d"
  },
  {
    "Address": "0x28af3356C6aaF449d20C59d2531941DDfB94d713"
  },
  {
    "Address": "0x292C05A5d77e66D727629D14B1E0F334D57a9225"
  },
  {
    "Address": "0x2969c63fc96a8ac4c8f658c2d1427867d3bea69f"
  },
  {
    "Address": "0x2aA8C3aA07a3b6968a54749F0d770626239C0F43"
  },
  {
    "Address": "0x2AC0B77652cfb7ebdE8190d7c3E1a41E18dCc66f"
  },
  {
    "Address": "0x2B6247079ddD8e81B34093e911284253bd455EF6"
  },
  {
    "Address": "0x2Bf034ecCEbc8CD60Dab9c249b6c2996Dcb7D8EC"
  },
  {
    "Address": "0x2CdbF64c0327a731b53bDD6ce715c3aD6BA099C7"
  },
  {
    "Address": "0x2CDde5499D7131a7ad3d4653f326c4cB245Bd319"
  },
  {
    "Address": "0x2D66F9f52b173Eb6F64B740fe67913D0F5ee4436"
  },
  {
    "Address": "0x2D948147074f046F6d1E4DFc2E2ab756BFa7431A"
  },
  {
    "Address": "0x2F075618681D45458aE20E17ca3CCf1C797d6E1a"
  },
  {
    "Address": "0x2F4A27D3F5ECbD350BbcF3bc4dfD4b23B34527d2"
  },
  {
    "Address": "0x300da191248a500b2174aeD992d6697BF97F9139"
  },
  {
    "Address": "0x324110e8A2f9D0D93ba9cba21688540b39cb79cb"
  },
  {
    "Address": "0x325E0A8FcAd252f98B15E4B93A27D1389381f613"
  },
  {
    "Address": "0x32B16CbCb8A2044417AC2D5b2422732015BE1301"
  },
  {
    "Address": "0x3335cc8bda40fb5a5f8db1d0011dec98728d81e1"
  },
  {
    "Address": "0x33484678A59581100d6266d04910a7472eEF55B5"
  },
  {
    "Address": "0x33b48210E5c1E6A1b214Ec3582538adA7102e103"
  },
  {
    "Address": "0x33C8b8F21B44AB1805aFC93545a40dC39Fa07BC3"
  },
  {
    "Address": "0x340A61C9f46b585f4430a236Be98A7021AA71703"
  },
  {
    "Address": "0x3423010139f86f9FE84792A310113b438d004271"
  },
  {
    "Address": "0x342Ce009ca1DCFfF7219D86875891B8B89768ebB"
  },
  {
    "Address": "0x34Abde12100336C55a759852AB081401Da03dc2a"
  },
  {
    "Address": "0x36168D5d7D5B5e66Be7fDd0C353D1F3Ec074339c"
  },
  {
    "Address": "0x367F0e332D74F71bDA1436bd50dBDEe0503C125e"
  },
  {
    "Address": "0x37b76cE4a768bF4954e787B5ee4bED550811A22A"
  },
  {
    "Address": "0x37ff6092225a5062300023514b47ee36074fecd0"
  },
  {
    "Address": "0x380A38Cca9cC898ddF8bE3B95D1B3af93707DF98"
  },
  {
    "Address": "0x389654572305986F0f96D1f87B7fAe9278613411"
  },
  {
    "Address": "0x38C26D3286E2a6458252D528417a1FbA84e0C2BE"
  },
  {
    "Address": "0x39af86b922e466B1363FE6a04d0b2f8994a02a6E"
  },
  {
    "Address": "0x3AD9e46849ac275FB8E829c7761A8B03B81dB11C"
  },
  {
    "Address": "0x3b15a5f73535Dc6e27C1eff6950cBf3D03ef0979"
  },
  {
    "Address": "0x3BfB159C76833Bc019E7c93708f26f318aD61504"
  },
  {
    "Address": "0x3C2C1c48da5B09fCc7FCa261ad666429EC758030"
  },
  {
    "Address": "0x3ca3eAdB1c7573f0Fd4Acf6679760675D07EE621"
  },
  {
    "Address": "0x3CCd6131d1c5FE2bd277e0da6bbB63C4fb35547b"
  },
  {
    "Address": "0x3D2198fC3907e9D095c2D973D7EC3f42B7C62Dfc"
  },
  {
    "Address": "0x3d2661546781e092c69fc1154de99cc754f847f3"
  },
  {
    "Address": "0x3d57eafdd0b549dffa8318577c8525930d505997"
  },
  {
    "Address": "0x3eE06850C546672C3348bc9802291138ed2A6088"
  },
  {
    "Address": "0x40825400fC5B820AfD0784b402b9eD4955aDC01b"
  },
  {
    "Address": "0x415df528c33B8ad580FEedF5EfA3Afc3eEEfc17b"
  },
  {
    "Address": "0x4334fE21C0e760f7579b8cA027cDe2F2e69680df"
  },
  {
    "Address": "0x44D89C12975F2173F38BC8F81dAFD18b5e269642"
  },
  {
    "Address": "0x453a6b83ba2dd467004f96b3ae5dd769f3da0995"
  },
  {
    "Address": "0x4570A5C4d08720Ee82E6dfC545d6f8AE01E33E12"
  },
  {
    "Address": "0x45ffADB496166a0cb634ce69C46fd57b8FED4658"
  },
  {
    "Address": "0x461E722393361b28707f0D5aFf8981d127fD9d2a"
  },
  {
    "Address": "0x46DD7DC34FD7326C8584EcAD84A75b2d107B018b"
  },
  {
    "Address": "0x47ff511c763abbc477526dd3c02bc022b7e6932d"
  },
  {
    "Address": "0x48fb74F1518E99de922333fE8444f800ad37A57A"
  },
  {
    "Address": "0x4906f93826a17B796b7D406Af2efaB2eaEB7723f"
  },
  {
    "Address": "0x49E26982E64dE40f68714B6E90F7eF50b1C62082"
  },
  {
    "Address": "0x4aD4339a2FbBbA08E0cf5A75cB68e2C1deaE25c1"
  },
  {
    "Address": "0x4b05a8D347e491115B51bFC474F87406C1ced927"
  },
  {
    "Address": "0x4D80e179018588178EB59b36f1f9B2110364BB6a"
  },
  {
    "Address": "0x4d8B1B88499a2Ff701678A5f648bc365F5D41694"
  },
  {
    "Address": "0x4E4fAb3De995F55ADf2e2c99C2b44070aeebd6BC"
  },
  {
    "Address": "0x50cd0c5fc8fcfdea09083dc89fba303c518cc1bc"
  },
  {
    "Address": "0x51f944Af16ED28c604b8cBbC5361912050cFC845"
  },
  {
    "Address": "0x5297233BbCF7B58356Acf5e3B4d4F79821491B2E"
  },
  {
    "Address": "0x52f71b4185458248C0e0a777aEA130d922462a0B"
  },
  {
    "Address": "0x5365b4472a6E5D8eA296E38f4117b5BFFA61a525"
  },
  {
    "Address": "0x538EA2312452F8F181Ab63aB96464C364A5C3453"
  },
  {
    "Address": "0x54588Aad15b92D53fC8cFB3c6876C74B52D23491"
  },
  {
    "Address": "0x54be9c677e243572ab91ada065ceed12b7e578da"
  },
  {
    "Address": "0x562991460b569dB7bC0E6303416e48726b0F91a5"
  },
  {
    "Address": "0x5696A8ba76fF5c6F6E1e46C20925F5a056167a2b"
  },
  {
    "Address": "0x56dd5543e3D0cAd9a5c9fC6410EC4b1e6028a65f"
  },
  {
    "Address": "0x58beeeA024936f71F071Ca06a6E0d81c8c5d7A7E"
  },
  {
    "Address": "0x58F7CdF32Be333e5A5C7FF8097742aC5535b7A65"
  },
  {
    "Address": "0x59e65e3ba06eb96154a9098dcd4a0d4b24a9c6f8"
  },
  {
    "Address": "0x5B8b10D99cB26200cBfd0C65d2543361FEc0Dc5D"
  },
  {
    "Address": "0x5bFeb4Ca066c9458842AC89b6e5cd983bd1a1034"
  },
  {
    "Address": "0x5C1444B4602Bf8e8B6Ab332b1CF71F504f5b4C6e"
  },
  {
    "Address": "0x5C99B3890b172dd750aa05E9ea8147DdD8c9Db22"
  },
  {
    "Address": "0x5cc5285df83F448af9569D788Feb2CCA9Fd418D0"
  },
  {
    "Address": "0x5D474c3fcCB02fCaf8446cbcC2E507A113E2ECb2"
  },
  {
    "Address": "0x5D51685b39942BFC6dcAD75D1d81248B9f92D0f8"
  },
  {
    "Address": "0x5dB1db464BFA7a99e8774824192E9cEd09f2a266"
  },
  {
    "Address": "0x5dc61faeccc3d45b736d388c3644e5a6c0c6d919"
  },
  {
    "Address": "0x5eD7f34bCdBD6d8BC0A30913988a943b823d0E58"
  },
  {
    "Address": "0x5faa31Ea9a79a8E4fa391dE7cAE5adC9B4b02833"
  },
  {
    "Address": "0x5FBc9D75527A10892EEa6A161e0A3B6B72718349"
  },
  {
    "Address": "0x602D2a713ECe658a76989F4CED1bD6179544E7aA"
  },
  {
    "Address": "0x610199Bb6FcfCB288710a51337CbAeE9489B8d39"
  },
  {
    "Address": "0x6194106E25E805c13461E761A170B71eC604A036"
  },
  {
    "Address": "0x625fC4878A9086b017c6Bb5CB14310Ff78c62cdE"
  },
  {
    "Address": "0x62E4df75e2BAaE9bdd07270ddbD22adFc8728E22"
  },
  {
    "Address": "0x62FA652a839152c19A24778eeddf391C49AD0FE5"
  },
  {
    "Address": "0x63C69d9dBCDE24b3057B3E850334AAbc421369dd"
  },
  {
    "Address": "0x63ea0CbC3B601b325be6618C44B94e43F16be40e"
  },
  {
    "Address": "0x652D7E1B706b10DE0bFEe179C1CC41DF73D3ED34"
  },
  {
    "Address": "0x65B4B33E5E76aD345623fB1f7581fB2e060Dcac3"
  },
  {
    "Address": "0x67d2f9223fa307bb1dbef672aa0b9bd5e762c8d2"
  },
  {
    "Address": "0x6C5AfF9b892d841B8Bc5De629a8c24805cEBc550"
  },
  {
    "Address": "0x6cef15E37392F13d0873dc18497CA8087C681e01"
  },
  {
    "Address": "0x6ed5a435495480774Dfc44cc5BC85333f1b0646A"
  },
  {
    "Address": "0x6f590e5325014B9e0DA13E2dc0bBb710F8c89184"
  },
  {
    "Address": "0x6f7707673417115D8D0810D3acaA4678D6D644Fd"
  },
  {
    "Address": "0x6f81e8957CF63FA5Fc5f9EB6865eB50b9EBBe1FD"
  },
  {
    "Address": "0x709e5c0e4ddae6306fc6905060dd74699a8f9eae"
  },
  {
    "Address": "0x70ee2c2600Ac7EC2Bf1eaa7F69747fA4D07c8261"
  },
  {
    "Address": "0x7290d639A85e8d107a7D8e8E490788e47C49746d"
  },
  {
    "Address": "0x73594B5F4B563A17C6708d0F6302Ac7061CbdeA7"
  },
  {
    "Address": "0x73977b29c1EB03adC1fbeE719c7A13e66707F6B9"
  },
  {
    "Address": "0x7514c98e42Ab83BC914411E18B7703f5C9699aE5"
  },
  {
    "Address": "0x781714EC69cd6961621b0c0BA952F67A5E8D235B"
  },
  {
    "Address": "0x79672c0123EcEec30198f3E83401156F2f4c789E"
  },
  {
    "Address": "0x7a1682faf72e41e1e23a11a4cc248c1d4444eb9f"
  },
  {
    "Address": "0x7A5F9d4E83DCcd1AdbEAb3cf40Ddab1B24e39b8f"
  },
  {
    "Address": "0x7A782C3A8f513621D9563e2c08c915d4fD239075"
  },
  {
    "Address": "0x7ab6a4cf7c8221a1204b3b568b4b09f91bfd63de"
  },
  {
    "Address": "0x7C6553933A471b43cE3a76A02245c5162C82522c"
  },
  {
    "Address": "0x7C7181962654fd97149dced8b8B8b523dc5f81e5"
  },
  {
    "Address": "0x7C8A9D9dDE058CFa14cCd698390252627F80eF19"
  },
  {
    "Address": "0x7D2e4D645c0Acc5A6Bf596B612caB351864f4090"
  },
  {
    "Address": "0x7dfdBBC4a2626D02DF1F2380f6BB9765b2B57f4A"
  },
  {
    "Address": "0x7F27072b55CF22fD63eb7Ba100F44425486E471E"
  },
  {
    "Address": "0x7F57b3bdE2BE9bD46dECFd27776FC9b75FC68c8B"
  },
  {
    "Address": "0x808044f380ff53a236600a9ba9f515468b4604f6"
  },
  {
    "Address": "0x80b5A3680d1476E7511f5111d6ff8759F5A063D8"
  },
  {
    "Address": "0x828d3Fff01cf78C96495aB1bD2C1e1b1b2384A9a"
  },
  {
    "Address": "0x82B1F29C5608238DF2618F996827933c0d844079"
  },
  {
    "Address": "0x82B907d53Ef5d100c63921E09A7217Ce02B20903"
  },
  {
    "Address": "0x8396781b7644B78611b488cfde15992e8912FfF5"
  },
  {
    "Address": "0x83d709977BeD753756B82045270dEAeDa10A59C0"
  },
  {
    "Address": "0x848AE001e8378A7409337453C1D8f5B779945578"
  },
  {
    "Address": "0x854D7B77B762B2ca07b1Ccc21e2a19eB1ccC34C7"
  },
  {
    "Address": "0x86063ce7f0dbed7fb21981c325389e9b980b59da"
  },
  {
    "Address": "0x86455ac5cbe7a2ce8527638bf9691fbb4bace7a1"
  },
  {
    "Address": "0x865c529F7053ADc50aC9d3efc54D71DB7b28907C"
  },
  {
    "Address": "0x86a8A293fB94048189F76552eba5EC47bc272223"
  },
  {
    "Address": "0x882F9364F015637b54a2702D6448E0979DC9B449"
  },
  {
    "Address": "0x887b86b6b6957f7bbea88b8cefd392f39236a88c"
  },
  {
    "Address": "0x888bb0767cc8db41c947FdcB8254289e746d7fb7"
  },
  {
    "Address": "0x88be3fa60ede9f532af10aba5690dfc254db929b"
  },
  {
    "Address": "0x88e8F4d4476131A9D6CaE4c55E79c45328fecb3C"
  },
  {
    "Address": "0x8953719eebD47d2eE651c69cee6717dCBfe47583"
  },
  {
    "Address": "0x89e12425d3eDD174baB9A8677D3bcA8b7F34f1AB"
  },
  {
    "Address": "0x8A6003f75845a896925ddA2D91d1959021c1bE33"
  },
  {
    "Address": "0x8A70dffa67DA1Df3fACf5D7FC664DDe788d30A52"
  },
  {
    "Address": "0x8af0A75ab18fC7055BF60eBAB7d041fc0b462D46"
  },
  {
    "Address": "0x8B7b042c5ea16F64cA55aeb6B0F8315B4Bd6Fb23"
  },
  {
    "Address": "0x8c2682E403B1Be886e59315c4C3c66468f2F1a10"
  },
  {
    "Address": "0x8c5461D9b6992D12FAd3Ae70943066BD32f9A86C"
  },
  {
    "Address": "0x8CA547a0898642C5FCB49b97FFc15e9DB667ba5F"
  },
  {
    "Address": "0x8cE584fe9609fe2F0EFD1a8b9b7fc4846C32e679"
  },
  {
    "Address": "0x8DD76FA2687A87B4FF6771f75f41Ba4DAb56784c"
  },
  {
    "Address": "0x8E81Df3F82A10831E709899f61A84b3f7896D6E6"
  },
  {
    "Address": "0x8Ed2189157E00b72D276f01DdBdbB1641b4a0118"
  },
  {
    "Address": "0x8efac15412de4a7ebdb2a40013598fbd7f7197e8"
  },
  {
    "Address": "0x8F3a3F37cd8A92e7e72E5248c56096590512C67C"
  },
  {
    "Address": "0x904aF80Ed68Ce1FC54629b4cBCc9c77DF195C24C"
  },
  {
    "Address": "0x90576ccf3db979d6a61d1d4f05f4bd96a6edbe0e"
  },
  {
    "Address": "0x9080b37411aD0826FDC869f5c94095eD6f395D0A"
  },
  {
    "Address": "0x90abcf1598ed3077861bcfb3b11efcd1d7277223"
  },
  {
    "Address": "0x90AF0d6cA9BC34940d77E33F76Cc027B24285950"
  },
  {
    "Address": "0x9226beDb6BB34181A3d79088D3B2015F70826b6f"
  },
  {
    "Address": "0x9293C35D6e1524609b7221a1C9A8D52DC81BA62c"
  },
  {
    "Address": "0x9309453b990c46C2E8F3f9c53FC53D530e76059a"
  },
  {
    "Address": "0x9316C578bd5AfFb2063F404E6e0082D394DEd8ef"
  },
  {
    "Address": "0x944f2a6Ec69c2780b1148a01571ADE971957C2E4"
  },
  {
    "Address": "0x9469Fe56447b3C33f8eD7Fd957ecC848ECe647F2"
  },
  {
    "Address": "0x9490eb162ecd2f97df5772417e3a4cb35deb14d8"
  },
  {
    "Address": "0x94AD7f675A9B9eB70C5Fd987235d21bf7Ad73aBf"
  },
  {
    "Address": "0x95270f71252AF1F92E54c777237091F9382Ca5D8"
  },
  {
    "Address": "0x9576cb54B5013Da91c732071FEb4F8EB778a474C"
  },
  {
    "Address": "0x95A83be2b7bEc07CC68a06fd3F4c7d9710caAFe1"
  },
  {
    "Address": "0x95a858f1AfC74187827e46e5950baa850059E858"
  },
  {
    "Address": "0x95c92eaee6A72e2884335F8bB37fd1BBB8E31145"
  },
  {
    "Address": "0x95fc03D96396f1dac5B505c142b828d9B91F4c66"
  },
  {
    "Address": "0x969ECfCf06FFa6049d7ad79dA575fC618Ed91542"
  },
  {
    "Address": "0x971257beA317043f6aA786F5b88d0142e524305e"
  },
  {
    "Address": "0x97A46F7F48C0bf82Aacb3C076b10C8379Ab6B4Bb"
  },
  {
    "Address": "0x9848e3eaCd3725A32cF523dbcBd2E88f5f7086bb"
  },
  {
    "Address": "0x986e92868A27548a31e88f7692E746CD7E86f39a"
  },
  {
    "Address": "0x99602a10a1E95a2432C1ac2c865A47249dE819a5"
  },
  {
    "Address": "0x9A53B419C10fAb2B4fdFE3F4B1b6264573BFF195"
  },
  {
    "Address": "0x9aa70c212c01a01900b04319aed3b0d85bd0e06a"
  },
  {
    "Address": "0x9b4a4Bf4bf8979D9B767c1d8A787eE6d61899F65"
  },
  {
    "Address": "0x9b57444687077e7aA8B8c6F6e5dB93A20385b046"
  },
  {
    "Address": "0x9Be6e30F2077b0DFab37FB7d7ad59B4a727ade67"
  },
  {
    "Address": "0x9DDaE9B61B790E16d4Fe92A6eDE1339dA0F9e7BD"
  },
  {
    "Address": "0x9ddFa8c806ACEdaE4836e5497f4EB2e69efC1b52"
  },
  {
    "Address": "0x9EC5c0dee95cE7F106010f3f636c4170d6D44D81"
  },
  {
    "Address": "0xA01c2AA47d6835F23284C358179e9AeF1Bf41Bd8"
  },
  {
    "Address": "0xA052b52e9D3B6B5Bc7a5cF565891CD1f3dabe819"
  },
  {
    "Address": "0xA0EAfF944D33a1D4656d38534621A00FfBB37648"
  },
  {
    "Address": "0xa3892Dd0604358481b73e93Ee4b302a65c0B1aB2"
  },
  {
    "Address": "0xa43eE0DdAC31bF684c2d0A678964402322AD7210"
  },
  {
    "Address": "0xA46B29B1F8a06139c606F1912291D23B0141Ae62"
  },
  {
    "Address": "0xa488bE157BE1F3b6d38f8A2E4fbeD4BCED0Abb78"
  },
  {
    "Address": "0xA582aBB1a4b499f783EAdf0fF5D8C28D67806C2e"
  },
  {
    "Address": "0xA58b4A80dE82b889FF40e487c58208A429c77f88"
  },
  {
    "Address": "0xa5BFD95294Aee7d66CF7C5981C26C5ae21D217bc"
  },
  {
    "Address": "0xA6303f0c3601139B285dE92e5D6f7f0A00979064"
  },
  {
    "Address": "0xA63aC74C662604e0a510DE4c7c6b7BABECB47F5b"
  },
  {
    "Address": "0xA6ddaBF6497976248fEACAd696720bfD1e8cd2b8"
  },
  {
    "Address": "0xa77bcf3BeB4972fFD56E7cADA6D6f526Ab369b98"
  },
  {
    "Address": "0xa7A90BDE26A3Cb6132D07AB1fB0B8845C1401aB7"
  },
  {
    "Address": "0xa9f1efc2e4D79635B393cd35c5F4993A5fa36d8C"
  },
  {
    "Address": "0xAa66a53e01698873D22d49C69c4829190975cc32"
  },
  {
    "Address": "0xAaf06e46124f454F6249993231ffC3742418E8b7"
  },
  {
    "Address": "0xaaF76872d7ABef0c30e3adb7788A1df51cc934Ff"
  },
  {
    "Address": "0xAB43a7FF49943aCB0d77BbB8Bc1a2C911C473d48"
  },
  {
    "Address": "0xaC3a4438737a55F792e1BCe3398bABbED88a63D1"
  },
  {
    "Address": "0xaC4361f56c82Ed59D533d45129F407015D84702a"
  },
  {
    "Address": "0xaD39C5Ce05E04898a53Df733C2F8045ba27f0A42"
  },
  {
    "Address": "0xad99a67ac78b80e00c0b07bb3f526cd26b843611"
  },
  {
    "Address": "0xAdD36e3C697aD0E38A4A85CbBdB4265CC5dD37B0"
  },
  {
    "Address": "0xADd432C18449e38bEA3666c664ddb344132511B6"
  },
  {
    "Address": "0xaE606597B2A7117E967048e33c4eBF48762875AB"
  },
  {
    "Address": "0xaF4FAaa7624bD39dEE06BEE0Aee498536f8da318"
  },
  {
    "Address": "0xb26fd0Ce30598058E2F056f1f390685300f0965F"
  },
  {
    "Address": "0xB28663E8C526c2d3cDD944FC7b62beE19A4c4826"
  },
  {
    "Address": "0xB313147594A87c08a92630dB38222DCF2BFd5219"
  },
  {
    "Address": "0xb3522064694ac9870dbf00eebc2712762193bb64"
  },
  {
    "Address": "0xb395cC8d01e48dc26470837c7bbC617d1cB3f9Fa"
  },
  {
    "Address": "0xB4dF5FE59FEBf485Ab55AfEBB1ad4FAdE73E95dc"
  },
  {
    "Address": "0xb4F95eD2765AC368C2c6414617905012F30fB03F"
  },
  {
    "Address": "0xB50A20A8AD550fDD3C05508367EBC978e60dBEFD"
  },
  {
    "Address": "0xB62430dA854A60D4607CCb8C7C40cc5E08c463b0"
  },
  {
    "Address": "0xb68Fde50a1E6A8A67e88109b6447F48Ec1da11D8"
  },
  {
    "Address": "0xb7d3a787a39f25457ca511dc3f0591b546f5e02f"
  },
  {
    "Address": "0xba2039974a2E088344B4Dc804Da8EF88AE00EDD9"
  },
  {
    "Address": "0xBa3E6e7918F2b767930294545988B8143257518b"
  },
  {
    "Address": "0xbA9F68fBF20a0316D80287d7ABC9B1377D622121"
  },
  {
    "Address": "0xbaaaBce9D8b6e0e7b26E107f33DdfC7Bd582E301"
  },
  {
    "Address": "0xbAb1315f63134691634F722F9e393fBE4F12c2AD"
  },
  {
    "Address": "0xbAFa0ecd146C524bF4033b2Ec04Cb5774B08F75d"
  },
  {
    "Address": "0xbc13Bc5ec044E556E118605d48a378d9b6B554B6"
  },
  {
    "Address": "0xBC2DcE626B7e580dE71D285F5BCe77eE59c3b9d9"
  },
  {
    "Address": "0xbDEd72aDD80598aFd9E2EC3C5e5fe6Aab48b0f89"
  },
  {
    "Address": "0xbeb793c9071a5cca352b195925a364a99ae91114"
  },
  {
    "Address": "0xbf16DfAeE9fbBbcFf66467964dEA940ed229bF62"
  },
  {
    "Address": "0xbf36fa1f2027eDB47bd0cf3e927d6770D8aF90dE"
  },
  {
    "Address": "0xBFC060893BA6C97364Dcf9f18a5EC1371df8eD28"
  },
  {
    "Address": "0xbfDb50Dc66C8Df9fd9688D8fe5A0C34126427645"
  },
  {
    "Address": "0xc07A18c4ccE7F95A413515d3D137De47BcFfb495"
  },
  {
    "Address": "0xc0Ea231F9d8CfDcDe60B86175D1513478EBBC94e"
  },
  {
    "Address": "0xc0F030eac8b588817f8dA16b9a2CDCcc6451B25c"
  },
  {
    "Address": "0xc1b2DBA39C139933407e958306aF223e8c0FB1f1"
  },
  {
    "Address": "0xc2ba77069899a2409440CF3Fe9fd246E1f7b75fA"
  },
  {
    "Address": "0xc336d15b27f955FA85Bd35Db907eFb915b4c7ff6"
  },
  {
    "Address": "0xC504BC5bb9be55C67f0FfB010BaAFD27232D0D5F"
  },
  {
    "Address": "0xc5901C3cecCB6f757eaB6eb8e08DC53C24851380"
  },
  {
    "Address": "0xc5C8295E649d7027916Fa9B25CD68D505cDed08f"
  },
  {
    "Address": "0xc6A3EC4C5b05D826F1Fc52B5E5aA5649f570EB27"
  },
  {
    "Address": "0xc7096B7F9f3B3dDFebc8e7aF518123fD494B9Ccf"
  },
  {
    "Address": "0xC710c02aFee8e8e6fDCf18cf75A742F1c19D7ef7"
  },
  {
    "Address": "0xc78A95019C52aD9856aA764D6908E88D5b7930eE"
  },
  {
    "Address": "0xc8b0d32bc09fb11c12c82582825c1e6b624822b8"
  },
  {
    "Address": "0xc90575711Cb48b706b3c7f04EaE188A9F3c8C547"
  },
  {
    "Address": "0xc9A900B5C828aC2d30bCa757aB3d5A5Dd9E74a73"
  },
  {
    "Address": "0xca35e851010b34ab47b5d713285b314340e57c39"
  },
  {
    "Address": "0xcA808bF81aB2936BEc73eb6aAE5DC242E2977a8e"
  },
  {
    "Address": "0xca85460d23Bfb2e0079bAb5AAC84921D9D0762a4"
  },
  {
    "Address": "0xcaF6Fd54fB74C95B28F5e94952ca21B46E4071cc"
  },
  {
    "Address": "0xCB4664578a6B53c29caEc0b884eEAEd55364B40B"
  },
  {
    "Address": "0xcB93aE25dF9941677bC9D963db0893b44626163c"
  },
  {
    "Address": "0xcd56a61fE76C08a4B5eabC53C8B0f5e8c38a1c06"
  },
  {
    "Address": "0xcDa491efFa43Bc60d2F42d691d044C70a5F62E43"
  },
  {
    "Address": "0xceA110CF871ba2F88262AAba1026C371DA930a51"
  },
  {
    "Address": "0xcebc89688742E1A9729cCa67FB5585CF7Dd461C7"
  },
  {
    "Address": "0xD07910BbCc742aB53Fc38a76BaE502205Ac0FFA1"
  },
  {
    "Address": "0xD1a2BfFa66A23b657ccB4e35425D9Db6f667B29F"
  },
  {
    "Address": "0xD1cAB5bb147d39408deC7cD5e350b8eef11c4102"
  },
  {
    "Address": "0xD204c770572C43576De034EDe6Cb24F741E565E2"
  },
  {
    "Address": "0xD3Fe5B4B0f47C2acE545Cb72b8101A77582D8953"
  },
  {
    "Address": "0xD465b4453898d5BEA91680C76695A5D780c090AA"
  },
  {
    "Address": "0xD651E2c626eE210Fc38676124D5007Ac822AD749"
  },
  {
    "Address": "0xd6818e7e12e7cd3605617e4e9b6106c1948a8069"
  },
  {
    "Address": "0xD732748071e38a48B4E9a3Ff1b2e7e87c0a39C2E"
  },
  {
    "Address": "0xD75de3C85F422660ae02dE4736359a633D4433A2"
  },
  {
    "Address": "0xd781a066abb723492ead2d844515114e3e87ca83"
  },
  {
    "Address": "0xD7e93B64adE18f7108CF5D7Ab91c76937aA30116"
  },
  {
    "Address": "0xd8b41B798A7CE8d30cbC87F007eCb95E1D3C876C"
  },
  {
    "Address": "0xd9569448E7d38aF4C72622Ab43E9A1B57Caa1855"
  },
  {
    "Address": "0xd9944161833d1E9cF162DBAb987191D6904a8dD6"
  },
  {
    "Address": "0xd9b96995CAf12ed498A80ad8F8F18B58E06A04eB"
  },
  {
    "Address": "0xD9fD88913de000ea7134c8Ecaa405C078C2ffdDA"
  },
  {
    "Address": "0xDA681804c795Db1535Ab4f5cffbF93FAd2b0FD2c"
  },
  {
    "Address": "0xDaBfCc13Eb6Cd8D8c997b62B9721f5509067bf68"
  },
  {
    "Address": "0xDb5DfA07B25C2d6625ad0D06a8147a474CA3eBB9"
  },
  {
    "Address": "0xdd3Efb212Cf8Ee1C8F2A6eFd10DEDDadFca65672"
  },
  {
    "Address": "0xddE7B4e278d0934641374Af68c4538fa8e185339"
  },
  {
    "Address": "0xdE2a649A23AFC45A55A4d68B7CFDd683279b62f6"
  },
  {
    "Address": "0xde504C2a463DB1f42F91688aD2cf66325C4b019F"
  },
  {
    "Address": "0xdeaD02eBe7A4F35e7A40c9031E836D463f8579e6"
  },
  {
    "Address": "0xdf382F9C26028C0da7C56a84d6d6D485843BFEA7"
  },
  {
    "Address": "0xDF4f2Bf9461B623DfDe4e888da2bf3cAEE50e22E"
  },
  {
    "Address": "0xe0562acBbd336D44241B33fb267EA0F2E480b463"
  },
  {
    "Address": "0xE066D04aD4Ca5641460B19982F827F0C58f0dC36"
  },
  {
    "Address": "0xE144882127D15C1814262B81788FCeF18240c531"
  },
  {
    "Address": "0xE161B46C732CE9D3a892e2751048f0fCc9449F08"
  },
  {
    "Address": "0xe1ed349b22cbccb72220a7e4d26960f5d4e3be36"
  },
  {
    "Address": "0xE2375d3759ac543f37DE8C999757F800E8299bED"
  },
  {
    "Address": "0xe241bedb5a6270c5a96219a52f59c7c3690ae924"
  },
  {
    "Address": "0xE26f5B7624cf6De8EeF3d93643a2A06aE8A7ef82"
  },
  {
    "Address": "0xe288a00DF4b697606078876788e4D64633CD2e01"
  },
  {
    "Address": "0xe3035CBBaa34A6B8b50d9262da962a0c42531dDa"
  },
  {
    "Address": "0xE37468c8FA3d47b797BC99236903896D26Dcc9d8"
  },
  {
    "Address": "0xe3a7de1d14a362509a75b9ea008469bf86e334c0"
  },
  {
    "Address": "0xe3db7fc4c8f844c7ff068ceb889693718d93145e"
  },
  {
    "Address": "0xE5ab4AF22e4e49A9FDBcF821fD477b69c37085e5"
  },
  {
    "Address": "0xe73395E4cea1550Ec3C1A16A03ae2890ECEccBEb"
  },
  {
    "Address": "0xe74418C3aBFd2ADD3b262F8df41cB8C27e2EF05B"
  },
  {
    "Address": "0xe756bE1ca7176F90799be3F9A19e2371d881aF56"
  },
  {
    "Address": "0xE8bC94a354E4873285a69BD43e65531484935578"
  },
  {
    "Address": "0xE92A983b1ceAC8836502016acD337980d98E6B38"
  },
  {
    "Address": "0xe96DEcB942b8B5C6bd57f08F146fcA12772cb1ef"
  },
  {
    "Address": "0xe9c14aa57ba5ef9e98bbb59c7de546d031ff06f8"
  },
  {
    "Address": "0xEaC4a477C275dd968F29267CC02DE31574F6B0F9"
  },
  {
    "Address": "0xEBd6432Aaba073e240Fb9147866E059756a4aa8b"
  },
  {
    "Address": "0xebE790E554f30924801B48197DCb6f71de2760BC"
  },
  {
    "Address": "0xEC1C5F91fF6Ca0351D0bE13C88B5d9553ebc03A6"
  },
  {
    "Address": "0xEc8ce3c314814373AEb4Af1e8efe4F0A4C46226A"
  },
  {
    "Address": "0xeC952ED8e7c2AA466cac36fD611D2E87Df1243D7"
  },
  {
    "Address": "0xeCA848dd377f44fb158cE66414d2dCf5A6081495"
  },
  {
    "Address": "0xee4B68C5F60356118a1E87d20E4c2c72fbAEeD70"
  },
  {
    "Address": "0xEeeB4dC650beAa34d0b42e52B4d8Af5B01391d3C"
  },
  {
    "Address": "0xf0D66765151D41015a85BA14e19a7749A94C7D2e"
  },
  {
    "Address": "0xF1299faD31bfBAf693282F8c85FD8A02f237230d"
  },
  {
    "Address": "0xF2f13624c73f07D685AC2d39E1a914D7d6E17911"
  },
  {
    "Address": "0xF34D00cE3fcd8989A9d445fbba39FE752ed03550"
  },
  {
    "Address": "0xF3D9281fa183B74F32B96E1c5244596045f4edE8"
  },
  {
    "Address": "0xf3f56e4aec96ac5551615c71250febd7b8966b02"
  },
  {
    "Address": "0xF40a4eFDfeE5C38df12D3DEaAA0BF5560c979Ab5"
  },
  {
    "Address": "0xf42Ec73fCB7b32717f0Daf1e842FdA4597831521"
  },
  {
    "Address": "0xF45AE6fAA62B08D7744928191d5f20892f7b0b29"
  },
  {
    "Address": "0xf4A34b37e19Eae6dEeE2c150B2F25CA161B1E0F1"
  },
  {
    "Address": "0xf4e69f5f8814e4A1dF6c6e89613E8fe1bE949b31"
  },
  {
    "Address": "0xF5Ae101251a564C6259D2188fD4Bced9897Ee157"
  },
  {
    "Address": "0xf65DB13b5ee031CB0ebBa525eF21aa6C586681b3"
  },
  {
    "Address": "0xF98A854bc00eAa854894d79e11315A2114C58120"
  },
  {
    "Address": "0xF9A3C9FFB7C8082685258Ca27f88602c1B85d0E9"
  },
  {
    "Address": "0xf9EBE7F36fF3F9Eb99007E233C05eCc0974Dd2f5"
  },
  {
    "Address": "0xfa366B7Ec198B725035dF7e551E6473c76891Db0"
  },
  {
    "Address": "0xFB3e5B87fe403C5C16914e890145092c079d695C"
  },
  {
    "Address": "0xfCa3997B592AdE2277be071714d0A5aD46BA959a"
  },
  {
    "Address": "0xFD94034c51eAE2ba3EdA74c09F5daAF5c3Fe77Da"
  },
  {
    "Address": "0xfd97B29a11086807B4583589f5dD4c2Fb0df35F8"
  },
  {
    "Address": "0xFDA5EEaef6D7004f9Cf509bbaC1904458891DEf9"
  },
  {
    "Address": "0xFE242365FFd2EBBeAa65d55F91EdE576FEb8A9Fa"
  },
  {
    "Address": "0xFea62440CA9C4C76b6cbB57d51053Fa35fAf03E5"
  },
  {
    "Address": "0xff7918f8587e5c7289dcCc51cBE3bF20057d4e45"
  },
  {
    "Address": "0xFfe296bbbc86dFaC056B42c6180d9f8b4cB412aa"
  },
  {
    "Address": "0x94aa50fe3c1ad32b0419004eee4f278ca3908876"
  },
  {
    "Address": "0x3f58588b59da010031dd8a355dcd7de229663ebf"
  },
  {
    "Address": "0x6ecc35bc13c196e96df0ca1adeb0721ec4dd603d"
  },
  {
    "Address": "0xd44ef5ba2f992f44db5f43630f0d0ecc3ae6d192"
  },
  {
    "Address": "0xb6329dd8e68ded6c973d7b1d3098cc4fad3858da"
  },
  {
    "Address": "0x035ffe28c0c6021a7b1b9092fe05918345847269"
  },
  {
    "Address": "0x72d778105b8af2c88cbb7b1551fbd6878b6c7d5d"
  },
  {
    "Address": "0x5c217cc668b5a972f7df0ee87229dab1024028d3"
  },
  {
    "Address": "0x3982de9d0b6fb0e12c89e0512c8fd903f0d9370b"
  },
  {
    "Address": "0xd3e2e76e4ab0322614fe7aaa3be0b04bed83d0d0"
  },
  {
    "Address": "0xcb3d44cf3722a0e48b5d4ecf4c9b413a4fed5fc1"
  },
  {
    "Address": "0xa01ef6858c9211c0e63519d7c38553f679a73bc0"
  },
  {
    "Address": "0xb910bc25fc55b48fb073517487dc5ac71d90f601"
  },
  {
    "Address": "0x09800064d8321571e657c507e62ca92faf5c039b"
  },
  {
    "Address": "0xba69010b5ca7c8ae0984aaf4ad7d102605ba728c"
  },
  {
    "Address": "0x0219d8688f5644373fe74057f350a125aabb8ded"
  },
  {
    "Address": "0x94de7e2c73529ebf3206aa3459e699fbcdfcd49b"
  },
  {
    "Address": "0x6E38571Deb4a1dCebc1717D445DAAbA35981970B"
  },
  {
    "Address": "0x03C78eB8b23551783CC634aaE692c3CA2c86DBFE"
  },
  {
    "Address": "0x3d9456ad6463a77bd77123cb4836e463030bfab4"
  },
  {
    "Address": "0x10d33D6c42DBBA8F1C95a3753C7e417653e3Be56"
  },
  {
    "Address": "0x526BE867D783DA4FCE3c4c85C9d85899D287CFA4"
  },
  {
    "Address": "0xd4fe3934a2948e35159a4f0f07acaf4284155677"
  },
  {
    "Address": "0x0000000000000000000000000000000000000000"
  },
  {
    "Address": "0x9b180d1401e35652a82c7bb37c7a754e48310d93"
  },
  {
    "Address": "0xcf181d7c42b58978073cca1c57251ded47f4dde1"
  },
  {
    "Address": "0x16d972690c16ea81cbcef3682d9b46d0ac0a1fe7"
  },
  {
    "Address": "0x426a347b9a153dd0d27cc63640f5b14092b2563a"
  },
  {
    "Address": "0x557b61badf238e041b8c9fef5cd84b90d21acfe8"
  },
  {
    "Address": "0x5b7e5563cadffa4ec108c1461eb0e0cc43b7205f"
  },
  {
    "Address": "0x7285e62913c95235ac8e5886cd06e7a8628af4bb"
  },
  {
    "Address": "0x977e74bfca54aecd2251a01cb13dc13471021c14"
  },
  {
    "Address": "0xa110f25e275d76533a4c9c08795c72b4e5e708ac"
  },
  {
    "Address": "0xb4a9f08e1addaa8ce1837e3c73093d2970aae7ea"
  },
  {
    "Address": "0x04ecd0a2c9f3acc5dfde3e3bf58a6bd33b08d244"
  },
  {
    "Address": "0x08060e56e37656deca16753fbd13eca305d6990d"
  },
  {
    "Address": "0x0d0ddea176f30fbb787b2d39f2c37645e3b4dd50"
  },
  {
    "Address": "0x0d83f85476dd883a46c4a1b91bba24a037fb727a"
  },
  {
    "Address": "0x12c4084c1f508ed0b4ebd6c143968273c25e789d"
  },
  {
    "Address": "0x1b2965dc3b1697dd10b7126ec7393d79cda2cf91"
  },
  {
    "Address": "0x25d3563f8675028e36889453519d98e685ee1630"
  },
  {
    "Address": "0x2afa2dae85a779b6098f03466c2a29d5a86af707"
  },
  {
    "Address": "0x32988f32dd5f4436b56506778b2b61a74cf18b89"
  },
  {
    "Address": "0x34993e20033cfe4280d8fae0557cdd09042de668"
  },
  {
    "Address": "0x351ee82e6e32242d860e6a54c67e68f3e3603f21"
  },
  {
    "Address": "0x471ed8ab8cce42fc183d25393a1a004c89de7c03"
  },
  {
    "Address": "0x47d4f20ae83bcd350105f199f900e6e6104dab6a"
  },
  {
    "Address": "0x4a5ca322053aeb87c1adb9643ed444b3607cbcf0"
  },
  {
    "Address": "0x4c55c41bd839b3552fb2abecacfdf4a5d2879cb9"
  },
  {
    "Address": "0x4f1c249294f87e8bed08e8f6052a8698a5dc2730"
  },
  {
    "Address": "0x4fc575707a61a62d6194bf65103087930dfc2f6f"
  },
  {
    "Address": "0x58d0f3da9c97de3c39f481e146f3568081d328a2"
  },
  {
    "Address": "0x5e410258a1e5e66a8dd9edc583593a90505b0978"
  },
  {
    "Address": "0x6a12c8594c5c850d57612ca58810abb8aebbc04b"
  },
  {
    "Address": "0x7138bf61b28f0ed9b40af7ef58e4e8a1e4018a60"
  },
  {
    "Address": "0x77ddf16249d93fdc64d4467463c27972d74400aa"
  },
  {
    "Address": "0x7af7ca67aa827f58e0659c52a641aee55a43b535"
  },
  {
    "Address": "0x7e41406daaa50487d9255d895c89a20c002a47aa"
  },
  {
    "Address": "0x7e88d4d4db361a2e044dc7ba3b86775dfc28a783"
  },
  {
    "Address": "0x7e958d4fdb351bb0298a16fc070bb458b2628ebc"
  },
  {
    "Address": "0x8778b3120ba60fc831844c3dd2c5948c3fc6bc86"
  },
  {
    "Address": "0x89cc08700dcba9d4bad5295dee2a111b90b39917"
  },
  {
    "Address": "0x93c8c816ad9ff9e6f03534e5180f743c66ab5954"
  },
  {
    "Address": "0x9ae8912ea6562957043c8d048641aa9b450c397f"
  },
  {
    "Address": "0xa12ec5e0fef29032d3e038631a99fe879c8f759f"
  },
  {
    "Address": "0xa12f07b45388fa68c7ff6b4189aec886e5efff60"
  },
  {
    "Address": "0xa1bbb798991ae77c7dcb9d12212672077712602c"
  },
  {
    "Address": "0xa4d8907bf757d268c9d054d8cc274e2f54e7c760"
  },
  {
    "Address": "0xba04ae9c3b7df626fdf3e1db59cf7cae57b4584a"
  },
  {
    "Address": "0xc4769e537adf26c5230ae9a596e5ae6da8fe0f9e"
  },
  {
    "Address": "0xc846ad1251406a6df0f347d24b0aabc3dabab008"
  },
  {
    "Address": "0xdf2b2c1df64d58839320a07907d4181f336a737e"
  },
  {
    "Address": "0xe06789de104fd4b8267bd9a2067b7d6f8a82ba84"
  },
  {
    "Address": "0xe5f1329ea7bd1a4814e8481e979d14ef811029c7"
  },
  {
    "Address": "0xee851b044a71518922fa8ad8aa4768eb5c29e2c8"
  },
  {
    "Address": "0xf1db8a2623193757317639d0532daa5e3c8ea20c"
  },
  {
    "Address": "0xbf4697db6b36905e3175b85c7f48ef5bdc561cf5"
  },
  {
    "Address": "0x42102e0f9f74b702b0bcdd7d94300a159a20f0f5"
  },
  {
    "Address": "0x489cc1dad0e18986242095f50728703631b20ec9"
  },
  {
    "Address": "0xab8c60e8992a8d3529aab2812662a7fc69c70dff"
  },
  {
    "Address": "0xbc159b71c296c21a1895a8ddf0aa45969c5f17c2"
  },
  {
    "Address": "0xf0d6999725115e3ead3d927eb3329d63afaec09b"
  },
  {
    "Address": "0x89450074a0a7db28143067626d1c1ef45cfb9696"
  },
  {
    "Address": "0x08d5bd85e9cd8ab2d970995eb1357065ff12ae48"
  },
  {
    "Address": "0xa351a4fffceed60b6d4351e1b20c55e3a6fb5503"
  },
  {
    "Address": "0x1e815a8188f1b84564577c1c998f7e6b4706b752"
  },
  {
    "Address": "0xb9a7564f77debd0cc194442e5b05a2c786076ae4"
  },
  {
    "Address": "0xbb637a937e864795cb00f6681661904836ac8a59"
  },
  {
    "Address": "0xc41c64e99701a1f114547454e99b5e8dd1aebb8d"
  },
  {
    "Address": "0xe4c182d3867531f81b9c9354334714e70bb1d4f7"
  },
  {
    "Address": "0x2ee92c196d63f2313a52c4bb48f427361460636b"
  },
  {
    "Address": "0x7ce4f92598c7ecaed583ca884b8c023a19b22a0e"
  },
  {
    "Address": "0xd18a0085989b67788e35fc1f8a439707a7639d46"
  },
  {
    "Address": "0xeea89c8843e8beb56e411bb4cac6dbc2d937ee1d"
  },
  {
    "Address": "0x7dad0ffe5b5a66ef7a8793134d9c6d4da8fdda0d"
  },
  {
    "Address": "0x8dbbca57ea56290efa14d835bbfd34faf1d89753"
  },
  {
    "Address": "0x99999aef88e62ceed4e134de67d9e636e357f661"
  },
  {
    "Address": "0x846e655fa6dddc8200c624608d498b9435f33e8f"
  },
  {
    "Address": "0x8de62f74bbf93fc7855304dbedbd24dc081755c7"
  },
  {
    "Address": "0xebf02c6e12c3ee119abba161c40bfeead0a06b15"
  },
  {
    "Address": "0x148e2ed011a9eaaa200795f62889d68153eeacde"
  },
  {
    "Address": "0x28c2abb1a94648bcf3f478d1aa32d5585e7fc96b"
  },
  {
    "Address": "0x3b228235aa52dd0b691777a61c5fd5a65649a75a"
  },
  {
    "Address": "0x3b8dbdacc444ebcb36be51d831ccb3a779a37c21"
  },
  {
    "Address": "0x59163f35318cb0cf2000b18425fd594d522f766c"
  },
  {
    "Address": "0x6186290b28d511bff971631c916244a9fc539cfe"
  },
  {
    "Address": "0x841120ff6d1e9f29e4ffbdb50eda696bbfd98ef6"
  },
  {
    "Address": "0x909a30f58d9e7abfd4f8cf8430e2c2f97783e769"
  },
  {
    "Address": "0x96bf8547455be212e6b493da101a3f06d309bd26"
  },
  {
    "Address": "0x97e9a4f24a962f68dc2c34a493811cc215e01772"
  },
  {
    "Address": "0xbbb071ba1143b73f7bd9a6e50467548c5be02a84"
  },
  {
    "Address": "0xc1ecb897553d21a2af0b7b90f0b648cc444803c8"
  },
  {
    "Address": "0xf8cc874fe4696131725018138fc4bb44866433e0"
  },
  {
    "Address": "0x04490dc0f52a97ef2d6ea0c4d9edbcde8c8546cc"
  },
  {
    "Address": "0x18d2b9b37b576b8f1a04d7d909c2efc991bcf52e"
  },
  {
    "Address": "0x20d64f7a9b31a08871a091414e1f757bf3eb47c6"
  },
  {
    "Address": "0x24435205eaf97df22b6f2a2463ba039497596ba4"
  },
  {
    "Address": "0x27a1ddb40484a20e9bd3cf2d34e8c9f1cc93a4dc"
  },
  {
    "Address": "0x2b941e25a9377f56d89c33357794031eefe004c4"
  },
  {
    "Address": "0x2e09e088a31481d17c0ee28ee8b40b54554a31a7"
  },
  {
    "Address": "0x38e123f89a7576b2942010ad1f468cc0ea8f9f4b"
  },
  {
    "Address": "0x3a2031050362bff4cd42cdb5e8914a400befd87c"
  },
  {
    "Address": "0x461e76a4fe9f27605d4097a646837c32f1ccc31c"
  },
  {
    "Address": "0x4c18f6b41104179bef6ec4ed8ad11a72c314f689"
  },
  {
    "Address": "0x4f2d36525eeb0ba3354239911d6190d1d05ee62d"
  },
  {
    "Address": "0x4ffe72a85f13d2f812728b52639b77ae4fcc7f77"
  },
  {
    "Address": "0x6282e24baaaf04c984e8ae7cd0c763709743cf9d"
  },
  {
    "Address": "0x64dcbead3b25b94c1c07158c8a6ad6517b95513e"
  },
  {
    "Address": "0x677bcfa119eb60e599ab125c1e9955a7f8f395c4"
  },
  {
    "Address": "0x690246e3357eb55f4d09f7c78f342378554c8b4b"
  },
  {
    "Address": "0x69efd597a3f7018ce35f38f53ba05d42c4f6b1c3"
  },
  {
    "Address": "0x6d95392544846c0cd6ccec0342f24534d84393e7"
  },
  {
    "Address": "0x70a8cdf9bafa57afc6c5e439a828aa4108f95cf1"
  },
  {
    "Address": "0x75448866cee7a4680dc58fe846446af71f9f8438"
  },
  {
    "Address": "0x7b7cd9496e49fd282f6873e7efa1ffde52178e4a"
  },
  {
    "Address": "0x825aacdfbf62835270eefd7ed2c691ae48fea092"
  },
  {
    "Address": "0x86342ae15926b550e6392b0f9958b4a306227a70"
  },
  {
    "Address": "0x9c99face0f1dc9cc24a7d986111bae031d787386"
  },
  {
    "Address": "0xa2272469c824d2b34407c08c1b377f3027406fea"
  },
  {
    "Address": "0xa7c9c91bc610ddb41e864cb617e8327914270563"
  },
  {
    "Address": "0xb6092f68adb09359ff988098ef19551623ec6993"
  },
  {
    "Address": "0xc26ee5dfb0fed783915588eb181adefce7997b8e"
  },
  {
    "Address": "0xca44900808c9797ec98c4f8f2a0e45ffa5012574"
  },
  {
    "Address": "0xde970830397fa350143668a2e9cbd60684df0184"
  },
  {
    "Address": "0xfc2a616d48a8681250aaaf590404e20812e96cfa"
  },
  {
    "Address": "0xfdff5e5d5bc0bc3d4fc9c78519cc4fb91e2faa51"
  },
  {
    "Address": "0x000000000000000000000000000000000000dead"
  },
  {
    "Address": "0x06fd7f49ca5bc7929a92b1c7b4639f049b413820"
  },
  {
    "Address": "0x0cfcbe12dd9544f4462d788bdf1afd34d7273a5b"
  },
  {
    "Address": "0x14d9af7695ba60af3714d21a869b27f9a3a05024"
  },
  {
    "Address": "0x228ded9e486f8e00510fd8ab64ff684d6f941250"
  },
  {
    "Address": "0x292d76ef68931cda7c2fb2b580df263dca3d9b9b"
  },
  {
    "Address": "0x2b8c200c93c7813b792980f6245b03540f36db72"
  },
  {
    "Address": "0x3a49309413793b32f6a308769220147fedbffa5f"
  },
  {
    "Address": "0x41020c12fbf52af637dc8e91ea4eb9d512d99a0a"
  },
  {
    "Address": "0x566a6d819618390b8f5de7461669203aea1f4533"
  },
  {
    "Address": "0x5f6c1264e45a93d0d99cf83d9d1b7c3782aebace"
  },
  {
    "Address": "0x6cf879fbb0da9445550e69a4b993142bc2066726"
  },
  {
    "Address": "0x6db296a6721212b43474fcbb5cbce4736299acfb"
  },
  {
    "Address": "0x6f8be3f685389612f59508828ae54f03b5f64ce1"
  },
  {
    "Address": "0x74619cfc7ec552e5051c181f49428ccd154256f7"
  },
  {
    "Address": "0x7d9f4cb1adc632e697d604304af4e1e92ecd181b"
  },
  {
    "Address": "0x9b921fad875b06183d3992a125026c89915d71f6"
  },
  {
    "Address": "0x9fe64f6757a358ea06be1657c8ec0f9586604988"
  },
  {
    "Address": "0xa4317ab9d7df7453d8e0853415e04f7e3a78f78f"
  },
  {
    "Address": "0xa46f24d23bb97d2fd127b81a6d849b66d976b8f0"
  },
  {
    "Address": "0xa4911d48270dc947048f4213f238813a2c86b753"
  },
  {
    "Address": "0xa50b080f064e22b990776c90d004b0af843a4cd5"
  },
  {
    "Address": "0xa7bd745215fa1cee3e93ef2de195c5a53b6c75bb"
  },
  {
    "Address": "0xaade429a8ea9af8cccc0c7c9f6ac1d7c40783550"
  },
  {
    "Address": "0xab0cac34653e32938679870ba3f6683c0f94f7bf"
  },
  {
    "Address": "0xc1dc7965b9606066d9b2114b01bee430feaa859f"
  },
  {
    "Address": "0xc2d95d30735613b4ae7efa9801ce413190c7bd99"
  },
  {
    "Address": "0xd08c3c698c25b3cc25b6d9bb7a9224070679b04b"
  },
  {
    "Address": "0xd11c68c37d2374512c5593103694c92d0f81fc4d"
  },
  {
    "Address": "0xd59297f47c3039e96bc2f1e7bdf1c255c88306b2"
  },
  {
    "Address": "0xd7571d439b906833aa0ab7ed781574c517f02bc5"
  },
  {
    "Address": "0xd887758a36bbf3c44ba3f1ffa0d8ff8d536cc129"
  },
  {
    "Address": "0xe204d190f76204ccd98038d55bd30eaf39922052"
  },
  {
    "Address": "0xf7678eb5d3a44525db96fe63fd53e46b40451cdb"
  },
  {
    "Address": "0x002ee33092457900515a4249e3ec1cd2b2dc8c32"
  },
  {
    "Address": "0x007cb716c24d4becf3143a8f6ba7418ccc05a544"
  },
  {
    "Address": "0x01ec738293d4fa32d99374a4519b450f4db2ba54"
  },
  {
    "Address": "0x03b545a5d2d60c8dacd8489a65fa05e002f9d143"
  },
  {
    "Address": "0x04357b83afd2639e6317e8807d4b27b6087e5763"
  },
  {
    "Address": "0x05ae0683d8b39d13950c053e70538f5810737bc5"
  },
  {
    "Address": "0x06a9c662ca9025670ad4f154c34ae01110498775"
  },
  {
    "Address": "0x0825763863244430b73667e06c561844f035053c"
  },
  {
    "Address": "0x08a5b5aef7eb13f5c205028e8941c57efbb94722"
  },
  {
    "Address": "0x0985224a811e65c235dbf4a2c2117712aabe4e39"
  },
  {
    "Address": "0x106a8e5b8e23e216b2946d68d6b52c151ef30e23"
  },
  {
    "Address": "0x12849ec7cb1a7b29fafd3e16dc5159b2f5d67303"
  },
  {
    "Address": "0x13f5ed344687bede5093beaa91ece7e0125b1025"
  },
  {
    "Address": "0x13f6f1134d1e6db48756253f1796916962f67eb6"
  },
  {
    "Address": "0x13ff6c84ce051a8450f6de2f34b4cc5666f17fd4"
  },
  {
    "Address": "0x14ce3e82f0b4278c2661de9ec6f81e8d8810f65e"
  },
  {
    "Address": "0x159d6f625ddae72fba5dadaf320fb59d6168cf9d"
  },
  {
    "Address": "0x15ceca24b3a3300f0c93748f3d12c7669bd78ac3"
  },
  {
    "Address": "0x16cb4898d68df1427c90b58ecdd90002dce3a9f2"
  },
  {
    "Address": "0x16d1e71f1c1bc6b7a3d1435d5422c767dd298b92"
  },
  {
    "Address": "0x16fe816fb27642ad1c8f6dfda6039904a8b73ba3"
  },
  {
    "Address": "0x175da1a2974534fb6b87ac22cd5b954eca486e4d"
  },
  {
    "Address": "0x17e8eabb7f3abaead54db09a84a1c5a3f8f53add"
  },
  {
    "Address": "0x188c30e9a6527f5f0c3f7fe59b72ac7253c62f28"
  },
  {
    "Address": "0x195b8b9598904b55e9770492bd697529492034a2"
  },
  {
    "Address": "0x1ac284668cc833a9d04cc21ff16fea7df1cbde75"
  },
  {
    "Address": "0x1ae26f1640ff355676db35216beccb0dc7679cf3"
  },
  {
    "Address": "0x1c8817ea11fc884210a0bfa67333dd914f9c0483"
  },
  {
    "Address": "0x1e7a16590bf4deb25e30358cb1747f2fba969a7e"
  },
  {
    "Address": "0x1ea83500d1bc7001fac0a54da1d44139b1b6a35a"
  },
  {
    "Address": "0x1f1c21c33d94c7077db005a374b8ef13f4f1a72d"
  },
  {
    "Address": "0x2146c5e2777034c50a8ede7e4e5b67d132175168"
  },
  {
    "Address": "0x21e2fb232e9fc401201e34176cb5eea01f28c854"
  },
  {
    "Address": "0x242dc7832cc5d57006a3a3d32e9c003e636a6c84"
  },
  {
    "Address": "0x25d29ec2e2403351ddc1244088e41fcc7e3285cf"
  },
  {
    "Address": "0x27844e66c051cc09c7e1075bbc242cb875eb44f9"
  },
  {
    "Address": "0x27c5121cab797645e92ea9f03bd9438d82624a34"
  },
  {
    "Address": "0x28fe7028375335a627b16af0222f80bb7fdb404e"
  },
  {
    "Address": "0x2a2cd7400f922085b62ca9bd9ac0f16151f716ab"
  },
  {
    "Address": "0x2ad0f7fe1cd3d1a321060de756325298489e77ee"
  },
  {
    "Address": "0x2d5bdddfa561d7e9bf13cba0f0d69034c4b37bde"
  },
  {
    "Address": "0x2e1b98da24e92ed947ad3dfcf2776114bd84c28c"
  },
  {
    "Address": "0x2e40e6c5a91a66728baa76c717c988f170ea61db"
  },
  {
    "Address": "0x2ecbb905fe50b0a372d9060187a3c4b98f2d5254"
  },
  {
    "Address": "0x2f696842a445543fefcd9afacb4996e7706095a1"
  },
  {
    "Address": "0x2f980b046509d8ff974ff34333a32c305429b01e"
  },
  {
    "Address": "0x2fffb39ae6ae075814cfa3f0a66f0830a7e856d7"
  },
  {
    "Address": "0x308bff328370fc4a9683ab9fcd79a21be6dc5ee4"
  },
  {
    "Address": "0x30fe9e1972a79f7351749602c5e3253de6310ba1"
  },
  {
    "Address": "0x32af25467b00aae516505b3331cfec52092ea5ba"
  },
  {
    "Address": "0x334ce923420ff1aa4f272e92bf68013d092ae7b4"
  },
  {
    "Address": "0x33777f307a66f0d0dd5d5bb1d9fd4194f71e16c2"
  },
  {
    "Address": "0x34ec176d4bed3644c7a58ab57a9d7493a12e5535"
  },
  {
    "Address": "0x3576f178a658a948742f1074e484259fff8869ed"
  },
  {
    "Address": "0x37240ff28720b1d4fef64259fa388e1f0cf47bf7"
  },
  {
    "Address": "0x378f1b3c40d270fde4ac3c7a1fe3407b15ed1aa0"
  },
  {
    "Address": "0x399e0ae23663f27181ebb4e66ec504b3aab25541"
  },
  {
    "Address": "0x3b3ac88fdfd33d8eb95d62d884ac552e46894887"
  },
  {
    "Address": "0x3b485db96b4d995862ba0173e7d90e21cea1f687"
  },
  {
    "Address": "0x3c9a28263b5becf6b0773bf9736b9d0d5f08cb06"
  },
  {
    "Address": "0x3d0576fadc008ede206edf3506d3d7a94351a5a6"
  },
  {
    "Address": "0x3dc72d6358d6d71a0b9568e539d54d31434775e1"
  },
  {
    "Address": "0x40e37a375e66e19d358b181de175bd2b78a91acb"
  },
  {
    "Address": "0x4278d3e39f25d690b2d060c119ab2478fa09aff5"
  },
  {
    "Address": "0x434e8971592e898316dc8b7a39d6f9be03ed5f66"
  },
  {
    "Address": "0x442dccee68425828c106a3662014b4f131e3bd9b"
  },
  {
    "Address": "0x465dca9995d6c2a81a9be80fbced5a770dee3dae"
  },
  {
    "Address": "0x46df44d4f7189278ff6f5d8c6155025a20f39e62"
  },
  {
    "Address": "0x47b2efa18736c6c211505aefd321bec3ac3e8779"
  },
  {
    "Address": "0x47fe0c316373474d96eb77c16f810036e287f40f"
  },
  {
    "Address": "0x4945b1aca2f85b6c7db9aab30fc4f730f5b63ac3"
  },
  {
    "Address": "0x4981c8ab52cb38d747753997fe8c08df2106d892"
  },
  {
    "Address": "0x4b3d3b57b86b03614f78d5d8fe27a2d85e4c8fa2"
  },
  {
    "Address": "0x4c61d468c05089a409be97cb060caa47bd8249e7"
  },
  {
    "Address": "0x4d9339dd97db55e3b9bcbe65de39ff9c04d1c2cd"
  },
  {
    "Address": "0x4d9541033c7caf795672d9e479e10bb505e52995"
  },
  {
    "Address": "0x4df5530cc261f1980a085dcd784b29b22bc3e705"
  },
  {
    "Address": "0x4ed08edd10ec1e2f137189b03801c2037166fdcd"
  },
  {
    "Address": "0x4f11f218f5fc748ccca2d3da9c2eb7bbde8bba36"
  },
  {
    "Address": "0x4f4fe31da7b4ef670cda9bac141b01844dec5612"
  },
  {
    "Address": "0x4ff05543d3a53ce52da701fba2af11255f0a066c"
  },
  {
    "Address": "0x50e0f561dd634c2cbfab98d4a2689103ae1f6fb3"
  },
  {
    "Address": "0x54becc7560a7be76d72ed76a1f5fee6c5a2a7ab6"
  },
  {
    "Address": "0x55b9f53b58af04807d658bb8f883c10624c4ad7a"
  },
  {
    "Address": "0x56a65d2dcef3ad7739bd296ffa18e8f2ef8adc42"
  },
  {
    "Address": "0x57503fa42086300cda9fcee6fa95915f5bb04680"
  },
  {
    "Address": "0x57e5f230f1a87d6276c2d9dbfd2c0c4a5beca4bf"
  },
  {
    "Address": "0x58015a72209437c9347222552e9ad331a5f3bfcb"
  },
  {
    "Address": "0x58fa6d14cf86c7b5b5f283bacdba529ee79a32bd"
  },
  {
    "Address": "0x5a07bbf23bb873a2c6c927b891cf5f879e8a91f7"
  },
  {
    "Address": "0x5ae7a9e5d756fc416495e82a59b399dfca9b46e1"
  },
  {
    "Address": "0x5be10f3434bc1ac6c0a34f86da39ea0095392f21"
  },
  {
    "Address": "0x63f69c262122fac7fa4a1bf4eb599f63d7cb6506"
  },
  {
    "Address": "0x6584750d2d65c4abf8c2ec879c41e1b511241778"
  },
  {
    "Address": "0x65d86dcbfe2580ef3e54c109094a1c86850d24be"
  },
  {
    "Address": "0x66d32b026e721c73f283ab708e4407b0a9ed0599"
  },
  {
    "Address": "0x67d8c8b467081de46241ec17b7e3b9f64c4147cb"
  },
  {
    "Address": "0x6880acdc9b0ef1bbfae9aab3646f19859c4a69b3"
  },
  {
    "Address": "0x6ad60e4047a113aae4e0a1cc8f74cf557931172a"
  },
  {
    "Address": "0x6b30a93c60cb3d6f95edd1c16213269c036a22be"
  },
  {
    "Address": "0x6b5b81ed8a2d8512b56b3ab5601979085520e554"
  },
  {
    "Address": "0x6e02e27f03ae982a3de019bcdb01aef3ca8a91e0"
  },
  {
    "Address": "0x6e0306113e2fa3c2821b3992298d95ee13436e87"
  },
  {
    "Address": "0x6e9cbd42688832157a9fa3afa013e034fa7a8eaf"
  },
  {
    "Address": "0x6ed2b7e7dcd5c941c7792b9889d5b0b79f4f4410"
  },
  {
    "Address": "0x6f3e3cacff69aab557b810fe5844570c23426df9"
  },
  {
    "Address": "0x702f5b4dbcb07a22993a1ba7ab877e2947b0c9ef"
  },
  {
    "Address": "0x70e7a6621f4cb3c3e073d0539899f49fc88424c0"
  },
  {
    "Address": "0x72913a8b68e1d50b1f068b0c99eb463380c4dfbc"
  },
  {
    "Address": "0x742b5a90fc0905b92e8b478561263d6d1d809a7a"
  },
  {
    "Address": "0x7485ac6d8534691993348d51ab0f131a19fff763"
  },
  {
    "Address": "0x749b28d1ae23cf7444ac6a37a80fe4a22c61601d"
  },
  {
    "Address": "0x7539b1455f9258994d41b737cf3e15225d2c141a"
  },
  {
    "Address": "0x760aafc261881f1bb0587ef76f0db9c592f7337e"
  },
  {
    "Address": "0x784b45146dde2232ceb7fb4007d07aac78f8acb6"
  },
  {
    "Address": "0x78fb3d569650ea743fb7876312cb5ff7505dd602"
  },
  {
    "Address": "0x790f717af667f91b87fbe7063034565542fd3929"
  },
  {
    "Address": "0x79ea9f830d8cce712e455d165dd48895ed055de6"
  },
  {
    "Address": "0x7a387f96257462c260a1d4afb8a05fea9258198d"
  },
  {
    "Address": "0x7aa69b5ee49c4d3170e037960ca6c83f61241395"
  },
  {
    "Address": "0x7c07181ddb5744823b651ce0d3a25943ceb03c79"
  },
  {
    "Address": "0x7c3e9355ac1297bebc0ad103f2106fbd00d1d912"
  },
  {
    "Address": "0x8062e69af89430d0749697cede9614cda80325e0"
  },
  {
    "Address": "0x80dedf478df0f8f89ad085799df5a0aadcb56664"
  },
  {
    "Address": "0x80f0b99cf421e4e04170e35bcb89d462c68bd7f2"
  },
  {
    "Address": "0x81cc3256c3b45693a11861960636f3b9697eb72b"
  },
  {
    "Address": "0x839395e20bbb182fa440d08f850e6c7a8f6f0780"
  },
  {
    "Address": "0x84572c31acdd30c03982e27b809d30b1efbcd8f2"
  },
  {
    "Address": "0x867b7cb8c8342a6124104836d2d10e08c7b286db"
  },
  {
    "Address": "0x87d61ba0f22202249e816a9e474d4933ba32e0e3"
  },
  {
    "Address": "0x87f3df4936a9e1c63685996c4c7e66e86eea9a00"
  },
  {
    "Address": "0x8852924b6b2e2ed94aac75a0249b55de44f46bfa"
  },
  {
    "Address": "0x886478d3cf9581b624cb35b5446693fc8a58b787"
  },
  {
    "Address": "0x88fb646c1eea8abbbfb9a8bacfb28a952b376998"
  },
  {
    "Address": "0x8a559bc81aec5b46d5ee3d7eea14ff473b8e693e"
  },
  {
    "Address": "0x8a7ba27df5e23690ac42e22fee5ed9206e3543ff"
  },
  {
    "Address": "0x8a7f7c5b556b1298a74c0e89df46eba117a2f6c1"
  },
  {
    "Address": "0x8aebebf863078e21965c3b97ee19283d57cb4da3"
  },
  {
    "Address": "0x8b5b9497e096ee6ffd6041d1db37a2ac2b41ab0d"
  },
  {
    "Address": "0x8beafbff6272d10c8c834e1014f1d6cc24336b30"
  },
  {
    "Address": "0x8c8024bf5f90a06cced7d32babccb934942c82f6"
  },
  {
    "Address": "0x8e2f7cd16224ebe91b33ce53bcbe9bc313f422f7"
  },
  {
    "Address": "0x8e63e4376dde62cb82f5a91c4bce4156457dedb1"
  },
  {
    "Address": "0x8f5e97e1e3d47a2f223a67e06de21f067b7779db"
  },
  {
    "Address": "0x90c19fea1ef7beba9274217431f148094795b074"
  },
  {
    "Address": "0x91327093d3183d10e2bfeca36b7b7dfec6f7763f"
  },
  {
    "Address": "0x91d20927bffecb05d603eaba287ccc5d8f96df41"
  },
  {
    "Address": "0x91dccaa260cc4616e1a6e6b693db7207c5e42937"
  },
  {
    "Address": "0x930965092abedfd65253691087bd4d778962c6ec"
  },
  {
    "Address": "0x949e31161d711be691e4177466dc8be04530240b"
  },
  {
    "Address": "0x95c276dc9867e3417d0b032c0fc7d6ac6e8111cd"
  },
  {
    "Address": "0x9619d3fa1f29c1de8fcfacedc07321637c1f0c3b"
  },
  {
    "Address": "0x96a62a6631d07dbfbd300d6b55b162b4631df106"
  },
  {
    "Address": "0x96a97c532e5c1848f9ae506f036f13104c6f4a8a"
  },
  {
    "Address": "0x96c64bc042026eb1f131aa56a4dbbc7abac50ae1"
  },
  {
    "Address": "0x975fcac1b4030ef5b5c319f972634ea6fe757998"
  },
  {
    "Address": "0x983110309620d911731ac0932219af06091b6744"
  },
  {
    "Address": "0x986e7f524b2833d21713346040721873be1eb459"
  },
  {
    "Address": "0x99216d07099604c76f57edfe2b34f7b292f4331b"
  },
  {
    "Address": "0x99816dd8bdb30ec841e992d3cba5ff6d5dc92d60"
  },
  {
    "Address": "0x9cee1b1d787bc70d8e4c00d14e25088ef66deb97"
  },
  {
    "Address": "0x9e0149f7cc28c93a3b5f76ab3e8a2a22d14435b5"
  },
  {
    "Address": "0x9ebf1a68a5ad612378bde3f50f7f734398244353"
  },
  {
    "Address": "0x9f171208547c9bbb70baff03a2da9f312316a9f2"
  },
  {
    "Address": "0xa061fbfa7dc7ee9f838a717e8b55fbc34641bf6e"
  },
  {
    "Address": "0xa0a0e4c41eac834d12f83120e298cd24fd6de1aa"
  },
  {
    "Address": "0xa136a3abc184bf70de3614822b2a6e6d8df018e5"
  },
  {
    "Address": "0xa13fc94b0dd2f72e889e2b07470538977ef21200"
  },
  {
    "Address": "0xa186727fdaf90cd7d9972572e32c618ce04206f8"
  },
  {
    "Address": "0xa2df601d3ca31b8484d8b862ae61eefc91c3dd2f"
  },
  {
    "Address": "0xa36541c62493da8441a31f96ecd072fcddfe2c42"
  },
  {
    "Address": "0xa3c277b8f35881cbdb017e52bcc376b3ce8f21da"
  },
  {
    "Address": "0xa52d69ad9a268a37bb1ac8dc945b6a57fc15b5d4"
  },
  {
    "Address": "0xa663a1afa3cceb9e6cf5d0e612b80d2bad85e6d2"
  },
  {
    "Address": "0xa6a8b32ef1fffad3120a1d1cfdc8a769372a95fd"
  },
  {
    "Address": "0xa711c018cf6274cc38fefb4042a65732c8096daf"
  },
  {
    "Address": "0xa7d7ac8fe7e8693b5599c69cc7d4f6226677845b"
  },
  {
    "Address": "0xa900a2364eec10ecbe862c1f11d89aa9583e8f86"
  },
  {
    "Address": "0xab31ea5ab64539516d4a690c05075c191f2626ce"
  },
  {
    "Address": "0xab3fbd90666d57ed746662d1a3d4cbf75824d7be"
  },
  {
    "Address": "0xaed094d187cdaa45e3c7ccb51144032276b14173"
  },
  {
    "Address": "0xb18c8e0a2da9b167b96382fb1304e5158286f4ec"
  },
  {
    "Address": "0xb1af13b2e4be55ca69829a23c09a1f5663adf8d0"
  },
  {
    "Address": "0xb1c3015a546b698c85ac7dedb427461aea522e6a"
  },
  {
    "Address": "0xb24404358687aff86e7475d3a6b124a18ac9ad34"
  },
  {
    "Address": "0xb2ecae34e529e04456a5ee3d3c80427669841f9e"
  },
  {
    "Address": "0xb359c431652918dc7639748272ab71ec0a50a997"
  },
  {
    "Address": "0xb432005e1010492fa315b9737881e5e18925204c"
  },
  {
    "Address": "0xb44996b12b76fd6a73678805c8f7e9bbed7abb15"
  },
  {
    "Address": "0xb57537d47f88c09e6e585d539d5915fedf2259ce"
  },
  {
    "Address": "0xb57efba074966fc499835996746acde35d7ad38e"
  },
  {
    "Address": "0xb60211811a4977b5f4b65a1d2d27a2591d73d1ac"
  },
  {
    "Address": "0xb8602e8148b7de11ece569867cbc0f41997b9184"
  },
  {
    "Address": "0xbbb27c2d5a27abe68bdc4e47ef8a822f164ee72b"
  },
  {
    "Address": "0xbbbec054d75b9f75a96aed0bb3bffa310777ac95"
  },
  {
    "Address": "0xbc3c244e5ca78da784cd9feb31c3a602d90d6ff2"
  },
  {
    "Address": "0xc013d0a3474c0851aa15a76d5897cd8ce6e56f5d"
  },
  {
    "Address": "0xc0548825bd34b96448b487ed7028cf6b532228f9"
  },
  {
    "Address": "0xc1694183ac7178558682d12c68cd09462f1da884"
  },
  {
    "Address": "0xc169a4554647ff28565e8a04de602aa965bc2c9b"
  },
  {
    "Address": "0xc1a02308d3870a319ee18a9e7b4af06f5712382a"
  },
  {
    "Address": "0xc20062216b646f0670a37d7602c22b7786d92939"
  },
  {
    "Address": "0xc230225bf14836ca1840ab9ebea8b7a872f45af4"
  },
  {
    "Address": "0xc23274347e8aa82d363140d3cefb71ff588effed"
  },
  {
    "Address": "0xc2458e55e8021c484b468f6a4ac858f6eb0e644b"
  },
  {
    "Address": "0xc5da6fa89cfbecb0310b413e05dc98ca2f875864"
  },
  {
    "Address": "0xc5fda9b6258b392f120db67202c605bf22c29853"
  },
  {
    "Address": "0xc6fe543a3f3bb66a091a56d7afce56d24917252a"
  },
  {
    "Address": "0xc97baee84347477bbc75e52e830820116cda6b45"
  },
  {
    "Address": "0xca1146c1d1b26ca782f7388096462189fb09113f"
  },
  {
    "Address": "0xcb0ed153b4689a1abc9769fa47600350b1e56a1f"
  },
  {
    "Address": "0xcb1a0f26c89fbc1bcb14fe1ee9a2785bae419e81"
  },
  {
    "Address": "0xcb7c05fab273a79e1c380931b7540552c5e4aee3"
  },
  {
    "Address": "0xcc138070c04c8559d45fee9ee1a0877340f90632"
  },
  {
    "Address": "0xcc47fcbfdd6e558fb39cf5ef4d92e59890476b86"
  },
  {
    "Address": "0xcc8c9557a1e78f51a7e6550e71918e8be49b1843"
  },
  {
    "Address": "0xccdb4d73628ea8403ce76ef7da8700f77dc54ea5"
  },
  {
    "Address": "0xce470c2a40e41233d250ab6be0a8f4dbf966308a"
  },
  {
    "Address": "0xced9cb86754c9190a832ebbe92fb62c7fd8c1fbb"
  },
  {
    "Address": "0xcfd7396e8690265894357fcc1996a40fc0879bad"
  },
  {
    "Address": "0xd017aa7d4d054a673092ac9e14c82d3e73d8f040"
  },
  {
    "Address": "0xd0285d2dcb47c8da3dc4fcfbbe024277ec2609c6"
  },
  {
    "Address": "0xd1380a4e089950ee3a23d818e24ccbbef003a432"
  },
  {
    "Address": "0xd1e561f1c03797c65075912b2cb5f9214949bee8"
  },
  {
    "Address": "0xd1fc6c2c64268a854a766196cdab99bc04bf4e44"
  },
  {
    "Address": "0xd340e01ae68e27f2e50ed8191adb71c2094fc274"
  },
  {
    "Address": "0xd3af455c69dcc9fe070ee602f768c16a02655952"
  },
  {
    "Address": "0xd64c6d86b93ecc73b85bb97bb01fc3d9fa20d672"
  },
  {
    "Address": "0xd6b070156bef7652aa8776708822ccde7173361d"
  },
  {
    "Address": "0xd6b09a68def89329dd82b4605a7234641fa41113"
  },
  {
    "Address": "0xd934cc70b1b06256581527a534285f5bd6a7edc7"
  },
  {
    "Address": "0xd9f0834e7ca9b9262df3189b850ebf9514027e82"
  },
  {
    "Address": "0xde0e14e314ec13cabc21272f9dd27dec0c92b504"
  },
  {
    "Address": "0xdeaaa9840c8403fba1f75b59bad6f974d3b7c964"
  },
  {
    "Address": "0xdf9c28cd756dd94564f007f5a38311c8229094d3"
  },
  {
    "Address": "0xdfcc413bc451c09b5d344c6dcd73569dcc05426a"
  },
  {
    "Address": "0xe0fe475102f3d80ef84c26a0c7092cb5960d0454"
  },
  {
    "Address": "0xe10f4085fa27a96e7e5cd1cbe78a0bd7bded1300"
  },
  {
    "Address": "0xe120ed22a0cd12d5de6122aa7d5b6d93ac218b49"
  },
  {
    "Address": "0xe1a4471e8b7670539bd98f82508e775823f5a84b"
  },
  {
    "Address": "0xe1ff19610020d72930aee1b9c047e35b7fd0080e"
  },
  {
    "Address": "0xe21c09acb02831edea9f0778efd3b9d18e576d73"
  },
  {
    "Address": "0xe341737d8905a3e3c0017df63b6d64db88168abd"
  },
  {
    "Address": "0xe4643cb3745d0714677a58790ff2e88ede37626d"
  },
  {
    "Address": "0xe5a8654631b3729f73ca3503ba09a5d3e11b46da"
  },
  {
    "Address": "0xe642aeac03b34565c624d6101550fb91a83c1ef3"
  },
  {
    "Address": "0xe700da8459a5ccb19657e4c8bf0a7ae95c9b076e"
  },
  {
    "Address": "0xe8e76b5aa6ce492c57465060daa949bf3de4a3d9"
  },
  {
    "Address": "0xe957b0829c6ae6ac461d7365b7927e1ff604114b"
  },
  {
    "Address": "0xededb6d882cfbf5dea7803cf0013cef9c2bac06f"
  },
  {
    "Address": "0xee0f9973b2159229aaa0b5e90a704f9da72a8da1"
  },
  {
    "Address": "0xeeb47425f10d216afa6254ec8fcfe389837991aa"
  },
  {
    "Address": "0xef58304e292fbaeacfdec25b67b3438031fde313"
  },
  {
    "Address": "0xefcc4c68e1ddfaa4f0fa3a7479f0fb082f96a56b"
  },
  {
    "Address": "0xefef50ebacd8da3c13932ac204361b704eb8292c"
  },
  {
    "Address": "0xf013164f85d9a0576d5a791d80f18db5b85dcc68"
  },
  {
    "Address": "0xf1221a4cb7d88d09b5f1b68ff02b36ef81fa37fb"
  },
  {
    "Address": "0xf1265e58144be258af7aeb9956c370a6d43396e9"
  },
  {
    "Address": "0xf22f00d0b95b1b728078066e5f4410f6b2be8fae"
  },
  {
    "Address": "0xf2c16ae7887450ce0018cdbad26cfdbab183ffee"
  },
  {
    "Address": "0xf41a98d4f2e52aa1ccb48f0b6539e955707b8f7a"
  },
  {
    "Address": "0xf478a902d6b87e4038d2500d34901afcf99a004d"
  },
  {
    "Address": "0xf503c4cac2b5a27f68eee197efb94e6fdeaa48d1"
  },
  {
    "Address": "0xf5c5e9c858ff33f22af310ae7c4c5a15387a5042"
  },
  {
    "Address": "0xf6e895f7993a831da655400fe4e00b8d2cac7349"
  },
  {
    "Address": "0xf894fea045eccb2927e2e0cb15c12debee9f2be8"
  },
  {
    "Address": "0xf94abf1327da4c4d2c69afddd634697ea496035e"
  },
  {
    "Address": "0xf9f56b6dc4c297b0d942b0e03f7e67d6dd0ed7be"
  },
  {
    "Address": "0xfa367003c00dd2b74d4f50c9623e1c35728de1f9"
  },
  {
    "Address": "0xfab9a3d37999e12252b47468d2ffd4be15936012"
  },
  {
    "Address": "0xfba2c2bbf977eda19ad819bb46787f4c91d1ffad"
  },
  {
    "Address": "0xfc199e896bb4a153046bacb8b3c3170079190705"
  },
  {
    "Address": "0xfcee120094854fbfdc98ce8a80b8057bdeb928a7"
  },
  {
    "Address": "0xfdfc7e74045e1497136fe6face2871cb2951c140"
  },
  {
    "Address": "0xff18298382948028f9d93c4e32be1382204022c8"
  },
  {
    "Address": "0xff30180fe01afe6633e70075d9b877e5b24de23f"
  },
  {
    "Address": "0xff9a34e8fb6c941f53dc151dffac736cfb20b925"
  },
  {
    "Address": "0xa3c40c0c6673e0a39368eb0a7273ce17ae58afeb"
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
            for (let i = 0; i < balance; i++) {

              // Check address owned ids
              console.log("Trying tokenOfOwnerByIndex for wallet: ", walletAddress)
              console.log("and tokenIndex: ", i)

              // BoxInstance.methods.tokenOfOwnerByIndex(walletAddress, web3.utils.toBN(i)).call()
              //   .then((boxId) => {
              //     console.log("Owner of boxId: ", boxId)
              //
              //     // Check if it was redeemed
              //     PizzaInstance.methods.isRedeemed(parseFloat(boxIdField.value)).call()
              //       .then((value) => {
              //         console.log('isRedeemed: ', value)
              //         if (value) {
              //           console.log("Box already opened: ", boxId)
              //           boxCheckLabel.innerHTML = 'Box was already opened!'
              //         } else {
              //           console.log("Box still closed: ", boxId)
              //           boxCheckLabel.innerHTML = 'Box is still closed!'
              //           // Add option to bake pie selector
              //           var opt = document.createElement('option');
              //           opt.value = i;
              //           opt.innerHTML = i;
              //           selectBox.appendChild(opt)
              //           pizzasToRedeem++
              //         }
              //       })
              //       .catch((error) => {
              //         boxCheckLabel.innerHTML = 'Error: ' + error
              //         console.log('isRedeemed failed: ', error)
              //       })
              //   })
              //   .catch((error) => {
              //     console.log('Failed to get boxId for index: ', i, ' with error: ', error)
              //   })
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
    window.ethereum.on('networkChanged', function(networkId){
      console.log('networkChanged',networkId);
    });

  }

  window.addEventListener('load', onLoadHandler, { once: true })
