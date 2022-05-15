  const NETWORK = ''
  const MULTISIG_ADDRESS = '0xBA5E28a2D1C8cF67Ac9E0dfc850DC8b7b21A4DE2'
  const ERC721_ADDRESS = '0x4ae57798AEF4aF99eD03818f83d2d8AcA89952c7'
  const PIZZA_ADDRESS = '0xE6616436Ff001Fe827e37C7FaD100f531D0935f0'
  const PIZZA_ABI = [{"contractName":"RarePizzas","sourceName":"contracts/token/RarePizzas.sol","proxy":{"interface":{"fragments":[{"name":"Approval","anonymous":false,"inputs":[{"name":"owner","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"approved","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"type":"event","_isFragment":true},{"name":"ApprovalForAll","anonymous":false,"inputs":[{"name":"owner","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"operator","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"approved","type":"bool","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"type":"event","_isFragment":true},{"name":"InternalArtworkAssigned","anonymous":false,"inputs":[{"name":"tokenId","type":"uint256","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"artworkURI","type":"bytes32","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes32","_isParamType":true}],"type":"event","_isFragment":true},{"name":"OrderAPIClientUpdated","anonymous":false,"inputs":[{"name":"previous","type":"address","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"current","type":"address","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"type":"event","_isFragment":true},{"name":"OwnershipTransferred","anonymous":false,"inputs":[{"name":"previousOwner","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"newOwner","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"type":"event","_isFragment":true},{"name":"RarePizzasBoxContractUpdated","anonymous":false,"inputs":[{"name":"previous","type":"address","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"current","type":"address","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"type":"event","_isFragment":true},{"name":"SaleActive","anonymous":false,"inputs":[{"name":"state","type":"bool","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"type":"event","_isFragment":true},{"name":"Transfer","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"to","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"type":"event","_isFragment":true},{"type":"function","name":"_uriBase","constant":true,"inputs":[],"outputs":[{"name":null,"type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"addressOfRedeemer","constant":true,"inputs":[{"name":"boxTokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"approve","constant":false,"inputs":[{"name":"to","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"balanceOf","constant":true,"inputs":[{"name":"owner","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[{"name":null,"type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"contractURI","constant":true,"inputs":[],"outputs":[{"name":null,"type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"fulfillResponse","constant":false,"inputs":[{"name":"request","type":"bytes32","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes32","_isParamType":true},{"name":"result","type":"bytes32","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes32","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"getApproved","constant":true,"inputs":[{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"initialize","constant":false,"inputs":[{"name":"rarePizzasBoxContract","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"isApprovedForAll","constant":true,"inputs":[{"name":"owner","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"operator","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[{"name":null,"type":"bool","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"isRedeemed","constant":true,"inputs":[{"name":"boxTokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"bool","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"name","constant":true,"inputs":[],"outputs":[{"name":null,"type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"owner","constant":true,"inputs":[],"outputs":[{"name":null,"type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"ownerOf","constant":true,"inputs":[{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"redeemRarePizzasBox","constant":false,"inputs":[{"name":"boxTokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"recipeId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"renounceOwnership","constant":false,"inputs":[],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"safeTransferFrom","constant":false,"inputs":[{"name":"from","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"to","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"safeTransferFrom","constant":false,"inputs":[{"name":"from","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"to","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"_data","type":"bytes","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"saleIsActive","constant":true,"inputs":[],"outputs":[{"name":null,"type":"bool","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"setApprovalForAll","constant":false,"inputs":[{"name":"operator","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"approved","type":"bool","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"setContractURI","constant":false,"inputs":[{"name":"URI","type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"setOrderAPIClient","constant":false,"inputs":[{"name":"orderAPIClient","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"setPizzaArtworkURI","constant":false,"inputs":[{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"artworkURI","type":"bytes32","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes32","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"setRarePizzasBoxContract","constant":false,"inputs":[{"name":"boxContract","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"supportsInterface","constant":true,"inputs":[{"name":"interfaceId","type":"bytes4","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes4","_isParamType":true}],"outputs":[{"name":null,"type":"bool","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"symbol","constant":true,"inputs":[],"outputs":[{"name":null,"type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"toggleSaleIsActive","constant":false,"inputs":[],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"tokenByIndex","constant":true,"inputs":[{"name":"index","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"tokenOfOwnerByIndex","constant":true,"inputs":[{"name":"owner","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"index","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"tokenURI","constant":true,"inputs":[{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"totalSupply","constant":true,"inputs":[],"outputs":[{"name":null,"type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},{"type":"function","name":"transferFrom","constant":false,"inputs":[{"name":"from","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"to","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"transferOwnership","constant":false,"inputs":[{"name":"newOwner","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},{"type":"function","name":"withdraw","constant":false,"inputs":[],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true}],"_abiCoder":{"coerceFunc":null},"functions":{"_uriBase()":{"type":"function","name":"_uriBase","constant":true,"inputs":[],"outputs":[{"name":null,"type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"addressOfRedeemer(uint256)":{"type":"function","name":"addressOfRedeemer","constant":true,"inputs":[{"name":"boxTokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"approve(address,uint256)":{"type":"function","name":"approve","constant":false,"inputs":[{"name":"to","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"balanceOf(address)":{"type":"function","name":"balanceOf","constant":true,"inputs":[{"name":"owner","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[{"name":null,"type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"contractURI()":{"type":"function","name":"contractURI","constant":true,"inputs":[],"outputs":[{"name":null,"type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"fulfillResponse(bytes32,bytes32)":{"type":"function","name":"fulfillResponse","constant":false,"inputs":[{"name":"request","type":"bytes32","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes32","_isParamType":true},{"name":"result","type":"bytes32","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes32","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"getApproved(uint256)":{"type":"function","name":"getApproved","constant":true,"inputs":[{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"initialize(address)":{"type":"function","name":"initialize","constant":false,"inputs":[{"name":"rarePizzasBoxContract","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"isApprovedForAll(address,address)":{"type":"function","name":"isApprovedForAll","constant":true,"inputs":[{"name":"owner","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"operator","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[{"name":null,"type":"bool","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"isRedeemed(uint256)":{"type":"function","name":"isRedeemed","constant":true,"inputs":[{"name":"boxTokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"bool","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"name()":{"type":"function","name":"name","constant":true,"inputs":[],"outputs":[{"name":null,"type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"owner()":{"type":"function","name":"owner","constant":true,"inputs":[],"outputs":[{"name":null,"type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"ownerOf(uint256)":{"type":"function","name":"ownerOf","constant":true,"inputs":[{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"redeemRarePizzasBox(uint256,uint256)":{"type":"function","name":"redeemRarePizzasBox","constant":false,"inputs":[{"name":"boxTokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"recipeId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"renounceOwnership()":{"type":"function","name":"renounceOwnership","constant":false,"inputs":[],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"safeTransferFrom(address,address,uint256)":{"type":"function","name":"safeTransferFrom","constant":false,"inputs":[{"name":"from","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"to","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"safeTransferFrom(address,address,uint256,bytes)":{"type":"function","name":"safeTransferFrom","constant":false,"inputs":[{"name":"from","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"to","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"_data","type":"bytes","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"saleIsActive()":{"type":"function","name":"saleIsActive","constant":true,"inputs":[],"outputs":[{"name":null,"type":"bool","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"setApprovalForAll(address,bool)":{"type":"function","name":"setApprovalForAll","constant":false,"inputs":[{"name":"operator","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"approved","type":"bool","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"setContractURI(string)":{"type":"function","name":"setContractURI","constant":false,"inputs":[{"name":"URI","type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"setOrderAPIClient(address)":{"type":"function","name":"setOrderAPIClient","constant":false,"inputs":[{"name":"orderAPIClient","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"setPizzaArtworkURI(uint256,bytes32)":{"type":"function","name":"setPizzaArtworkURI","constant":false,"inputs":[{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"artworkURI","type":"bytes32","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes32","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"setRarePizzasBoxContract(address)":{"type":"function","name":"setRarePizzasBoxContract","constant":false,"inputs":[{"name":"boxContract","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"supportsInterface(bytes4)":{"type":"function","name":"supportsInterface","constant":true,"inputs":[{"name":"interfaceId","type":"bytes4","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes4","_isParamType":true}],"outputs":[{"name":null,"type":"bool","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"symbol()":{"type":"function","name":"symbol","constant":true,"inputs":[],"outputs":[{"name":null,"type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"toggleSaleIsActive()":{"type":"function","name":"toggleSaleIsActive","constant":false,"inputs":[],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"tokenByIndex(uint256)":{"type":"function","name":"tokenByIndex","constant":true,"inputs":[{"name":"index","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"tokenOfOwnerByIndex(address,uint256)":{"type":"function","name":"tokenOfOwnerByIndex","constant":true,"inputs":[{"name":"owner","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"index","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"tokenURI(uint256)":{"type":"function","name":"tokenURI","constant":true,"inputs":[{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[{"name":null,"type":"string","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"string","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"totalSupply()":{"type":"function","name":"totalSupply","constant":true,"inputs":[],"outputs":[{"name":null,"type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"payable":false,"stateMutability":"view","gas":null,"_isFragment":true},"transferFrom(address,address,uint256)":{"type":"function","name":"transferFrom","constant":false,"inputs":[{"name":"from","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"to","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"transferOwnership(address)":{"type":"function","name":"transferOwnership","constant":false,"inputs":[{"name":"newOwner","type":"address","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"withdraw()":{"type":"function","name":"withdraw","constant":false,"inputs":[],"outputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true}},"errors":{},"events":{"Approval(address,address,uint256)":{"name":"Approval","anonymous":false,"inputs":[{"name":"owner","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"approved","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"type":"event","_isFragment":true},"ApprovalForAll(address,address,bool)":{"name":"ApprovalForAll","anonymous":false,"inputs":[{"name":"owner","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"operator","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"approved","type":"bool","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"type":"event","_isFragment":true},"InternalArtworkAssigned(uint256,bytes32)":{"name":"InternalArtworkAssigned","anonymous":false,"inputs":[{"name":"tokenId","type":"uint256","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"artworkURI","type":"bytes32","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bytes32","_isParamType":true}],"type":"event","_isFragment":true},"OrderAPIClientUpdated(address,address)":{"name":"OrderAPIClientUpdated","anonymous":false,"inputs":[{"name":"previous","type":"address","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"current","type":"address","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"type":"event","_isFragment":true},"OwnershipTransferred(address,address)":{"name":"OwnershipTransferred","anonymous":false,"inputs":[{"name":"previousOwner","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"newOwner","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"type":"event","_isFragment":true},"RarePizzasBoxContractUpdated(address,address)":{"name":"RarePizzasBoxContractUpdated","anonymous":false,"inputs":[{"name":"previous","type":"address","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"current","type":"address","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true}],"type":"event","_isFragment":true},"SaleActive(bool)":{"name":"SaleActive","anonymous":false,"inputs":[{"name":"state","type":"bool","indexed":false,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"bool","_isParamType":true}],"type":"event","_isFragment":true},"Transfer(address,address,uint256)":{"name":"Transfer","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"to","type":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"address","_isParamType":true},{"name":"tokenId","type":"uint256","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"type":"event","_isFragment":true}},"structs":{},"deploy":{"name":null,"type":"constructor","inputs":[],"payable":false,"stateMutability":"nonpayable","gas":null,"_isFragment":true},"_isInterface":true},"provider":"<WrappedHardhatProvider>","signer":"<SignerWithAddress 0x102d3B5ca9C8675C20B2F7E2171B3ecDcbe3Fc82>","callStatic":{},"estimateGas":{},"functions":{},"populateTransaction":{},"filters":{},"_runningEvents":{},"_wrappedEmits":{},"address":"0xDfcB120fD7d076a884Aba8A4916D43291513e4D9","resolvedAddress":{},"deployTransaction":{"hash":"0x8841eff8c53de724693aa1fbe2aab69c2036c7e26f38e5e445aa1c02b5f01f4d","type":2,"accessList":[],"blockHash":null,"blockNumber":null,"transactionIndex":null,"confirmations":0,"from":"0x102d3B5ca9C8675C20B2F7E2171B3ecDcbe3Fc82","gasPrice":{"type":"BigNumber","hex":"0xb2d05e0d"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0xb2d05e00"},"maxFeePerGas":{"type":"BigNumber","hex":"0xb2d05e0d"},"gasLimit":{"type":"BigNumber","hex":"0x0cf27b"},"to":null,"value":{"type":"BigNumber","hex":"0x00"},"nonce":643,"data":"0x608060405260405162000f4038038062000f408339810160408190526200002691620004d4565b82816200005560017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd62000603565b60008051602062000ef9833981519152146200008157634e487b7160e01b600052600160045260246000fd5b6200008f82826000620000ff565b50620000bf905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610462000603565b60008051602062000ed983398151915214620000eb57634e487b7160e01b600052600160045260246000fd5b620000f68262000170565b5050506200066c565b6200010a83620001cb565b6040516001600160a01b038416907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a26000825111806200014c5750805b156200016b576200016983836200029360201b6200026c1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6200019b620002c2565b604080516001600160a01b03928316815291841660208301520160405180910390a1620001c881620002fb565b50565b620001e1816200038b60201b620002981760201c565b620002495760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806200027260008051602062000ef983398151915260001b6200039560201b620002141760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060620002bb838360405180606001604052806027815260200162000f196027913962000398565b9392505050565b6000620002ec60008051602062000ed983398151915260001b6200039560201b620002141760201c565b546001600160a01b0316905090565b6001600160a01b038116620003625760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b606482015260840162000240565b806200027260008051602062000ed983398151915260001b6200039560201b620002141760201c565b803b15155b919050565b90565b6060620003a5846200038b565b620004025760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840162000240565b600080856001600160a01b0316856040516200041f9190620005b0565b600060405180830381855af49150503d80600081146200045c576040519150601f19603f3d011682016040523d82523d6000602084013e62000461565b606091505b509092509050620004748282866200047e565b9695505050505050565b606083156200048f575081620002bb565b825115620004a05782518084602001fd5b8160405162461bcd60e51b8152600401620002409190620005ce565b80516001600160a01b03811681146200039057600080fd5b600080600060608486031215620004e9578283fd5b620004f484620004bc565b92506200050460208501620004bc565b60408501519092506001600160401b038082111562000521578283fd5b818601915086601f83011262000535578283fd5b8151818111156200054a576200054a62000656565b604051601f8201601f19908116603f0116810190838211818310171562000575576200057562000656565b816040528281528960208487010111156200058e578586fd5b620005a183602083016020880162000627565b80955050505050509250925092565b60008251620005c481846020870162000627565b9190910192915050565b6000602082528251806020840152620005ef81604085016020870162000627565b601f01601f19169190910160400192915050565b6000828210156200062257634e487b7160e01b81526011600452602481fd5b500390565b60005b83811015620006445781810151838201526020016200062a565b83811115620001695750506000910152565b634e487b7160e01b600052604160045260246000fd5b61085d806200067c6000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100855780635c60da1b146100985780638f283970146100c9578063f851a440146100e95761005d565b3661005d5761005b6100fe565b005b61005b6100fe565b34801561007157600080fd5b5061005b6100803660046106ed565b610118565b61005b610093366004610707565b610164565b3480156100a457600080fd5b506100ad6101da565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d557600080fd5b5061005b6100e43660046106ed565b610217565b3480156100f557600080fd5b506100ad610241565b6101066102a2565b610116610111610346565b610355565b565b610120610379565b6001600160a01b0316336001600160a01b0316141561015957610154816040518060200160405280600081525060006103ac565b610161565b6101616100fe565b50565b61016c610379565b6001600160a01b0316336001600160a01b031614156101cd576101c88383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250600192506103ac915050565b6101d5565b6101d56100fe565b505050565b60006101e4610379565b6001600160a01b0316336001600160a01b0316141561020c57610205610346565b9050610214565b6102146100fe565b90565b61021f610379565b6001600160a01b0316336001600160a01b03161415610159576101548161040b565b600061024b610379565b6001600160a01b0316336001600160a01b0316141561020c57610205610379565b606061029183836040518060600160405280602781526020016108016027913961045f565b9392505050565b803b15155b919050565b6102aa610379565b6001600160a01b0316336001600160a01b031614156103415760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b610116565b600061035061053a565b905090565b3660008037600080366000845af43d6000803e808015610374573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316905090565b6103b583610562565b6040516001600160a01b038416907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a26000825111806103f65750805b156101d557610405838361026c565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f610434610379565b604080516001600160a01b03928316815291841660208301520160405180910390a161016181610611565b606061046a84610298565b6104c55760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610338565b600080856001600160a01b0316856040516104e09190610785565b600060405180830381855af49150503d806000811461051b576040519150601f19603f3d011682016040523d82523d6000602084013e610520565b606091505b509150915061053082828661069d565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc61039d565b61056b81610298565b6105cd5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610338565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b80546001600160a01b0319166001600160a01b039290921691909117905550565b6001600160a01b0381166106765760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608401610338565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036105f0565b606083156106ac575081610291565b8251156106bc5782518084602001fd5b8160405162461bcd60e51b815260040161033891906107a1565b80356001600160a01b038116811461029d57600080fd5b6000602082840312156106fe578081fd5b610291826106d6565b60008060006040848603121561071b578182fd5b610724846106d6565b9250602084013567ffffffffffffffff80821115610740578384fd5b818601915086601f830112610753578384fd5b813581811115610761578485fd5b876020828501011115610772578485fd5b6020830194508093505050509250925092565b600082516107978184602087016107d4565b9190910192915050565b60006020825282518060208401526107c08160408501602087016107d4565b601f01601f19169190910160400192915050565b60005b838110156107ef5781810151838201526020016107d7565b83811115610405575050600091015256fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122093f028255035b61df476b13b9dba3c4f06f60e51b9b4caee31680b389aef327f64736f6c63430008020033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65640000000000000000000000009d5a4523c17406a2679354287c6b3c166529d9bc0000000000000000000000009423184f976e9173708c85d6144f79d375848a4500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000024c4d66de80000000000000000000000008f5ae25105c3c03bce89ae3b5ed1e30456755fab00000000000000000000000000000000000000000000000000000000","r":"0xd1a6f29487b9088eb3386d20d2678ae1d2bbf659d080a2021e56327379f79ca0","s":"0x4119e2a685f40adf246ca0d1d2d668ae819f63abe6f35f5765566a9107207bb8","v":1,"creates":"0xDfcB120fD7d076a884Aba8A4916D43291513e4D9","chainId":4},"_deployedPromise":{}},"abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"artworkURI","type":"bytes32"}],"name":"InternalArtworkAssigned","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},null,null,{"inputs":[{"internalType":"uint256","name":"boxTokenId","type":"uint256"},{"internalType":"uint256","name":"recipeId","type":"uint256"}],"name":"redeemRarePizzasBox","outputs":[],"stateMutability":"nonpayable","type":"function"},null,{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}]

  const ERC721_ABI = [
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

  window.rarePizzasBox = {
    ABI: ERC721_ABI,
    ADDRESS: ERC721_ADDRESS,
    MULTISIG: MULTISIG_ADDRESS,
    PIZZAADDRESS: PIZZA_ADDRESS,
    PIZZAABI: PIZZA_ABI,
  }

  const { rarePizzasBox } = window

  let maxSupply = 10000
  let totalSupply = 0
  let buyPrice = 0.08
  let walletAddress = 0
  let addresses = 0
  let ethPrice = 2045
  let metamaskInstalled = false
  let Erc721Instance
  let PizzaInstance

  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  const onLoadHandler = () => {
    const { ADDRESS: CONTRACT_ADDRESS } = rarePizzasBox
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

    pizzasLabel.innerHTML = '--'
    contractLabel.innerHTML = `Contract Address: <p> <a href='https://${NETWORK}etherscan.io/address/${CONTRACT_ADDRESS}' target='_blank'>${CONTRACT_ADDRESS}</a> </p>`

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

      const gasPrice = 145
      const gasLimit = 256 * 1000

      let txHash = 0

      Erc721Instance.methods.getPrice().call()
        .then((weiValue) => {
          console.log('weiValue: ', weiValue)

          const roundAmount = parseFloat(1.2 * weiValue).toFixed(0)

          Erc721Instance.methods.purchase().send({
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

      Erc721Instance.methods.maxSupply().call()
        .then((amount) => {
          maxSupply = amount

          pizzasLabel.innerHTML = numberWithCommas(maxSupply - totalSupply - 1250)
        })
        .catch((error) => {
          console.log('maxSupply failed: ', error)
        })

      Erc721Instance.methods.totalSupply().call()
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

      PizzaInstance.methods.isRedeemed(19).call( function(error, result){
          if (result) {
            console.log('isRedeemed: ', result)
          } else {
            console.log('isRedeemed failed: ', error)

          }
      });

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
      Erc721Instance = new web3.eth.Contract(rarePizzasBox.ABI, rarePizzasBox.ADDRESS)

      PizzaInstance = new web3.eth.Contract(rarePizzasBox.PIZZAABI, rarePizzasBox.PIZZAADDRESS)

      Erc721Instance.events.Transfer((err, e) => { console.log(e) })
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
