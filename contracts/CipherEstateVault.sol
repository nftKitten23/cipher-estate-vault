// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@fhevm/lib/Reencrypt.sol";
import "@fhevm/lib/Fhe.sol";

contract CipherEstateVault {
    using Fhe for euint32;
    using Fhe for ebool;
    
    struct Property {
        euint32 propertyId;
        euint32 price;
        euint32 area;
        euint32 bedrooms;
        euint32 bathrooms;
        ebool isAvailable;
        ebool isVerified;
        string location;
        string description;
        address owner;
        uint256 timestamp;
    }
    
    struct Transaction {
        euint32 transactionId;
        euint32 amount;
        ebool isCompleted;
        address buyer;
        address seller;
        uint256 timestamp;
    }
    
    struct Valuation {
        euint32 valuationId;
        euint32 estimatedValue;
        euint32 marketTrend;
        ebool isVerified;
        string reportHash;
        address appraiser;
        uint256 timestamp;
    }
    
    mapping(uint256 => Property) public properties;
    mapping(uint256 => Transaction) public transactions;
    mapping(uint256 => Valuation) public valuations;
    mapping(address => euint32) public userReputation;
    mapping(address => euint32) public userBalance;
    
    uint256 public propertyCounter;
    uint256 public transactionCounter;
    uint256 public valuationCounter;
    
    address public owner;
    address public verifier;
    
    event PropertyListed(uint256 indexed propertyId, address indexed owner, string location);
    event TransactionInitiated(uint256 indexed transactionId, uint256 indexed propertyId, address indexed buyer);
    event ValuationSubmitted(uint256 indexed valuationId, uint256 indexed propertyId, address indexed appraiser);
    event PropertySold(uint256 indexed propertyId, address indexed buyer, address indexed seller);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function listProperty(
        string memory _location,
        string memory _description,
        euint32 _price,
        euint32 _area,
        euint32 _bedrooms,
        euint32 _bathrooms
    ) public returns (uint256) {
        require(bytes(_location).length > 0, "Location cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");
        
        uint256 propertyId = propertyCounter++;
        
        properties[propertyId] = Property({
            propertyId: _price, // Will be set properly
            price: _price,
            area: _area,
            bedrooms: _bedrooms,
            bathrooms: _bathrooms,
            isAvailable: Fhe.asEbool(true),
            isVerified: Fhe.asEbool(false),
            location: _location,
            description: _description,
            owner: msg.sender,
            timestamp: block.timestamp
        });
        
        emit PropertyListed(propertyId, msg.sender, _location);
        return propertyId;
    }
    
    function initiateTransaction(
        uint256 propertyId,
        euint32 amount
    ) public returns (uint256) {
        require(properties[propertyId].owner != address(0), "Property does not exist");
        require(Fhe.decrypt(properties[propertyId].isAvailable), "Property is not available");
        require(properties[propertyId].owner != msg.sender, "Cannot buy your own property");
        
        uint256 transactionId = transactionCounter++;
        
        transactions[transactionId] = Transaction({
            transactionId: amount, // Will be set properly
            amount: amount,
            isCompleted: Fhe.asEbool(false),
            buyer: msg.sender,
            seller: properties[propertyId].owner,
            timestamp: block.timestamp
        });
        
        emit TransactionInitiated(transactionId, propertyId, msg.sender);
        return transactionId;
    }
    
    function submitValuation(
        uint256 propertyId,
        euint32 estimatedValue,
        euint32 marketTrend,
        string memory reportHash
    ) public returns (uint256) {
        require(properties[propertyId].owner != address(0), "Property does not exist");
        require(bytes(reportHash).length > 0, "Report hash cannot be empty");
        
        uint256 valuationId = valuationCounter++;
        
        valuations[valuationId] = Valuation({
            valuationId: estimatedValue, // Will be set properly
            estimatedValue: estimatedValue,
            marketTrend: marketTrend,
            isVerified: Fhe.asEbool(false),
            reportHash: reportHash,
            appraiser: msg.sender,
            timestamp: block.timestamp
        });
        
        emit ValuationSubmitted(valuationId, propertyId, msg.sender);
        return valuationId;
    }
    
    function completeTransaction(uint256 transactionId) public {
        require(transactions[transactionId].buyer != address(0), "Transaction does not exist");
        require(transactions[transactionId].seller == msg.sender, "Only seller can complete transaction");
        require(!Fhe.decrypt(transactions[transactionId].isCompleted), "Transaction already completed");
        
        // Mark transaction as completed
        transactions[transactionId].isCompleted = Fhe.asEbool(true);
        
        // Update property ownership and availability
        uint256 propertyId = findPropertyByTransaction(transactionId);
        if (propertyId != 0) {
            properties[propertyId].owner = transactions[transactionId].buyer;
            properties[propertyId].isAvailable = Fhe.asEbool(false);
            
            emit PropertySold(propertyId, transactions[transactionId].buyer, msg.sender);
        }
    }
    
    function verifyProperty(uint256 propertyId, ebool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify properties");
        require(properties[propertyId].owner != address(0), "Property does not exist");
        
        properties[propertyId].isVerified = isVerified;
    }
    
    function verifyValuation(uint256 valuationId, ebool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify valuations");
        require(valuations[valuationId].appraiser != address(0), "Valuation does not exist");
        
        valuations[valuationId].isVerified = isVerified;
    }
    
    function updateReputation(address user, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        userReputation[user] = reputation;
        emit ReputationUpdated(user, Fhe.decrypt(reputation));
    }
    
    function getPropertyInfo(uint256 propertyId) public view returns (
        string memory location,
        string memory description,
        uint32 price,
        uint32 area,
        uint32 bedrooms,
        uint32 bathrooms,
        bool isAvailable,
        bool isVerified,
        address owner,
        uint256 timestamp
    ) {
        Property storage property = properties[propertyId];
        return (
            property.location,
            property.description,
            Fhe.decrypt(property.price),
            Fhe.decrypt(property.area),
            Fhe.decrypt(property.bedrooms),
            Fhe.decrypt(property.bathrooms),
            Fhe.decrypt(property.isAvailable),
            Fhe.decrypt(property.isVerified),
            property.owner,
            property.timestamp
        );
    }
    
    function getTransactionInfo(uint256 transactionId) public view returns (
        uint32 amount,
        bool isCompleted,
        address buyer,
        address seller,
        uint256 timestamp
    ) {
        Transaction storage transaction = transactions[transactionId];
        return (
            Fhe.decrypt(transaction.amount),
            Fhe.decrypt(transaction.isCompleted),
            transaction.buyer,
            transaction.seller,
            transaction.timestamp
        );
    }
    
    function getValuationInfo(uint256 valuationId) public view returns (
        uint32 estimatedValue,
        uint32 marketTrend,
        bool isVerified,
        string memory reportHash,
        address appraiser,
        uint256 timestamp
    ) {
        Valuation storage valuation = valuations[valuationId];
        return (
            Fhe.decrypt(valuation.estimatedValue),
            Fhe.decrypt(valuation.marketTrend),
            Fhe.decrypt(valuation.isVerified),
            valuation.reportHash,
            valuation.appraiser,
            valuation.timestamp
        );
    }
    
    function getUserReputation(address user) public view returns (uint32) {
        return Fhe.decrypt(userReputation[user]);
    }
    
    function getUserBalance(address user) public view returns (uint32) {
        return Fhe.decrypt(userBalance[user]);
    }
    
    function findPropertyByTransaction(uint256 transactionId) internal view returns (uint256) {
        // This is a simplified implementation
        // In a real scenario, you would maintain a mapping between transactions and properties
        for (uint256 i = 0; i < propertyCounter; i++) {
            if (properties[i].owner == transactions[transactionId].seller) {
                return i;
            }
        }
        return 0;
    }
    
    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        userBalance[msg.sender] = userBalance[msg.sender] + Fhe.asEuint32(uint32(msg.value));
    }
    
    function withdraw(uint32 amount) public {
        require(Fhe.decrypt(userBalance[msg.sender]) >= amount, "Insufficient balance");
        userBalance[msg.sender] = userBalance[msg.sender] - Fhe.asEuint32(amount);
        payable(msg.sender).transfer(amount);
    }
}
