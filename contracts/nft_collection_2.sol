//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/// @title Smart Contract for managing CryptoCampo NFT
/// @author Eduardo Mannarino
/// @notice Implements ERC721 Standard with specific buy and claim functions
///         No Transfers.
contract CCNFT_2 is ERC721Enumerable, Ownable, ReentrancyGuard {

    event Buy(address indexed buyer, uint256 indexed tokenId);
    event Mint(address indexed buyer, uint256 indexed tokenId);
    event Claim(address indexed claimer, uint256 indexed tokenId);

    mapping(address => bool) public whitelist;
    string private baseURI;
    address public fundsCollector = 0x338fdD278bf95a4E97DeD75F2E907a1D912cA158;
    address public feesCollector = 0x338fdD278bf95a4E97DeD75F2E907a1D912cA158;
    bool public onlyWhitelist = true;
    bool public canBuy;
    bool public canClaim;
    uint256 public constant MAX_SUPPLY = 4500;
    uint256 public constant NFT_VALUE = 100 * 10 ** 18 ;
    uint8 public maxMintPerUser = 50;
    uint16 public tokenCount = 0; 
    uint16 public tokenBurned = 0; 
    uint16 public buyFee; 
    uint16 public profitToPay;
    IERC20 public fundsToken = IERC20(0x55d398326f99059fF775485246999027B3197955);
    
    constructor() ERC721("CryptoCampo NFT", "CCNFT") {
    }

    // PUBLIC FUNCTIONS

    /// @notice Mints a batch of NFT charging value and fees.
    /// @param amount Amount of NFT to mint
    function buy(uint8 amount) external nonReentrant {
        require(canBuy, "Buy is not allowed");
        require(fundsCollector != address(0), "FundsCollector not Set");
        require(feesCollector != address(0), "FeesCollector not Set");
        require(tokenCount + amount < MAX_SUPPLY, "No more NFT");
        require(amount <= maxMintPerUser, "Cannot mint more than maximum mint");
        require(balanceOf(_msgSender()) + amount <= maxMintPerUser, "Maximum mint per user exceeded");
        require(!onlyWhitelist || whitelist[_msgSender()], "Not Whitelisted");


        for (uint8 i=1;i<=amount;i++) {
            tokenCount++;
            _safeMint(_msgSender(), tokenCount);
            emit Buy(_msgSender(), tokenCount);
        }

        if (!fundsToken.transferFrom(_msgSender(), fundsCollector, amount * NFT_VALUE)) 
            revert("Cannot send funds tokens");

        if (buyFee > 0) {
            if (!fundsToken.transferFrom(_msgSender(), feesCollector, amount * NFT_VALUE * buyFee / 10000)) 
                revert("Cannot send fees tokens");
        }
    } 

    /// @notice Mints a batch of NFT for free (OnlyOwner)
    /// @param to Address destination for minting
    /// @param amount Amount of NFT to mint
    function mint(address to, uint8 amount) external onlyOwner {
        require(to != address(0), "Cannot Mint to address 0");
        require(tokenCount + amount <= MAX_SUPPLY , "No more NFT");

        for (uint8 i=1;i<=amount;i++) {
            tokenCount++;
            _safeMint(to, tokenCount);
            emit Mint(to, tokenCount);
        }
    } 

    /// @notice Claims a NFTs.
    /// @param listTokenId List of TokenId to be claimed.
    function claim(uint256[] calldata listTokenId) external nonReentrant {
        require(canClaim, "Claim is not allowed");
        for (uint8 i=0;i<listTokenId.length;i++) {
            
            require(_exists(listTokenId[i]), "token doesn't exist");
            require(_msgSender() == ownerOf(listTokenId[i]), "Only owner can Claim");

            tokenBurned++;
            _burn(listTokenId[i]);

            if (!fundsToken.transferFrom(fundsCollector, _msgSender(), NFT_VALUE + (NFT_VALUE * profitToPay / 10000))) 
                revert("cannot send funds");

            emit Claim(_msgSender(), listTokenId[i]);
        }
    }   

    // SETTERS

    /// @notice Set Funds Token
    /// @param token Address of the Funds Token
    function setFundsToken(address token) external onlyOwner {
        require(token != address(0), "Cannot set address 0");
        fundsToken = IERC20(token);
    }
   
    /// @notice Set Funds Collector
    /// @param _address Address of the Funds Collector
    function setFundsCollector(address _address) external onlyOwner {
        require(_address != address(0), "Cannot set address 0");
        fundsCollector = _address;
    }

    /// @notice Set Fees Collector
    /// @param _address Address of the Fees Collector
    function setFeesCollector(address _address) external onlyOwner {
        require(_address != address(0), "Cannot set address 0");
        feesCollector = _address;
    }

    /// @notice Set the Profit to pay
    /// @param _profitToPay Percentege of profit to pay
    /// @dev takes 2 decimals places
    function setProfitToPay(uint16 _profitToPay) external onlyOwner {
        profitToPay = _profitToPay;
    }

    /// @notice Set the canBuy Flag
    /// @param _canBuy value of the flag
    function setCanBuy(bool _canBuy) external onlyOwner {
        canBuy = _canBuy;
    }

    /// @notice Set the canClaim Flag
    /// @param _canClaim value of the flag
    function setCanClaim(bool _canClaim) external onlyOwner {
        canClaim = _canClaim;
    }

    /// @notice Set the Buy Fee
    /// @param _buyFee Percentege of profit to pay
    /// @dev takes 2 decimals places
    function setBuyFee(uint16 _buyFee) external onlyOwner {
        require(_buyFee <= 1000, "BuyFee Limit Exceeded");
        buyFee = _buyFee;
    }

    /// @notice Set the Max Mint per User
    /// @param _maxMintPerUser Maximum amount of mint per user
    function setMaxMintPerUser(uint8 _maxMintPerUser) external onlyOwner {
        maxMintPerUser = _maxMintPerUser;
    }

    /// @notice Set the Base URI
    /// @param _baseURI value of the URI
    function setBaseURI(string memory _baseURI) external onlyOwner {
        baseURI = _baseURI;
    }

    /// @notice Set the OnlyWhitelist flag
    /// @param _onlyWhitelist value of the flag
    function setOnlyWhitelist(bool _onlyWhitelist) external onlyOwner {
        onlyWhitelist = _onlyWhitelist;
    }

    /// @notice Set/Unset the whitelist
    /// @param _whitelist array of address to add/remove to whitelist
    /// @param value true to add to whitelist or false to remove
    function setWhitelist(address[] calldata _whitelist, bool value) external onlyOwner {
        for (uint8 i=0;i<_whitelist.length;i++) {
            if (_whitelist[i] != address(0)) {
                whitelist[_whitelist[i]] = value;
            }
        }
    }

    /// @notice Returns the metadata of a specific token
    /// @param tokenId ID of the token type
    function uri(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "token doesn't exist");
        return string(abi.encodePacked(baseURI, Strings.toString(tokenId)));
    }    

    /// @notice Recover any ERC20 Token that might be sent to this contract
    /// @param token address of the ERC20 token
    function recover(address token) external onlyOwner {
        if (!IERC20(token).transfer(owner(), IERC20(token).balanceOf(address(this)))){
            revert("Cannot send funds.");
        }
    }

    /// @notice Allow to deposit to this contract
    function deposit() payable public {
    }    

    /// @notice Allow to withdraw from this contract
    function withdraw() payable onlyOwner public {
        payable(msg.sender).transfer(address(this).balance);
     }

    /// @dev Function not available
    function transferFrom(address, address, uint256) 
        public 
        pure 
        override(ERC721, IERC721)
    {
        revert("Not Allowed");
    }

    /// @dev Function not available
    function safeTransferFrom(address, address, uint256) 
        public 
        pure 
        override(ERC721, IERC721)
    {
        revert("Not Allowed");
    }

    /// @dev Function not available
    function safeTransferFrom(address, address, uint256,  bytes memory) 
        public 
        pure
        override(ERC721, IERC721)
    {
        revert("Not Allowed");
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }    

}