const fs = require('fs');
const hardhat = require('hardhat');

const main = async () => {
  const BUSDFactory = await hardhat.ethers.getContractFactory('BUSD');
  const busdInstance = await BUSDFactory.deploy();
  await busdInstance.deployed();

  const CCNFTFactory = await hardhat.ethers.getContractFactory('CCNFT_2');
  const nftCollectionInstance = await CCNFTFactory.deploy();
  await nftCollectionInstance.deployed();

  // Set BUSD as payment method
  await nftCollectionInstance.setFundsToken(busdInstance.address);

  const ownerAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
  await nftCollectionInstance.setFundsCollector(ownerAddress);
  await nftCollectionInstance.setFeesCollector(ownerAddress);
  await nftCollectionInstance.setCanBuy(true);
  await nftCollectionInstance.setBuyFee(1);
  await nftCollectionInstance.setProfitToPay(7);
  await nftCollectionInstance.setMaxMintPerUser(5);
  await nftCollectionInstance.mint(ownerAddress, 7);

  const address = nftCollectionInstance.address;
  const bUSDAddress = busdInstance.address;

  await busdInstance.approve(nftCollectionInstance.address, hardhat.ethers.constants.MaxUint256);

  console.log('Deployment completed, nft contract address: ', address, ' busd contract address: ', bUSDAddress);
}

main();