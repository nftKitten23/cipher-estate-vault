# Cipher Estate Vault

A revolutionary real estate platform powered by Fully Homomorphic Encryption (FHE) technology, enabling secure and private property transactions on the blockchain.

## 🔐 Features

- **FHE-Powered Privacy**: All sensitive data is encrypted using Fully Homomorphic Encryption
- **Secure Transactions**: Blockchain-based property transactions with encrypted data
- **Wallet Integration**: Seamless connection with popular Web3 wallets via RainbowKit
- **Property Management**: List, buy, and manage real estate properties
- **Valuation System**: Encrypted property valuations and market analysis
- **Reputation System**: Trust-based user reputation scoring

## 🚀 Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: shadcn/ui + Tailwind CSS
- **Web3**: Wagmi + RainbowKit + Viem
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: FHE (Fully Homomorphic Encryption)
- **Smart Contracts**: Solidity with FHE integration

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/nftKitten23/cipher-estate-vault.git

# Navigate to the project directory
cd cipher-estate-vault

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475

# Infura Configuration
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
```

## 📱 Usage

1. **Connect Wallet**: Use the RainbowKit wallet connector to connect your Web3 wallet
2. **List Property**: Create encrypted property listings with FHE-protected data
3. **Browse Properties**: View available properties with encrypted pricing and details
4. **Initiate Transactions**: Start secure property transactions
5. **Submit Valuations**: Provide encrypted property valuations

## 🔒 Security Features

- **FHE Encryption**: All sensitive data (prices, valuations, user data) is encrypted
- **Zero-Knowledge Proofs**: Verify transactions without revealing sensitive information
- **Smart Contract Security**: Audited smart contracts with FHE integration
- **Private Transactions**: Complete privacy in property transactions

## 🏗️ Smart Contract Architecture

The platform uses a sophisticated smart contract system:

- **CipherEstateVault.sol**: Main contract handling property listings and transactions
- **FHE Integration**: All sensitive data is encrypted using FHE
- **Reputation System**: Trust-based scoring for users
- **Valuation System**: Encrypted property valuations

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to your preferred platform
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [Cipher Estate Vault](https://cipher-estate-vault.vercel.app)
- **Documentation**: [GitHub Wiki](https://github.com/nftKitten23/cipher-estate-vault/wiki)
- **Smart Contracts**: [Contract Addresses](https://sepolia.etherscan.io/address/0x742d35B2f)

## 📞 Support

For support and questions, please open an issue on GitHub or contact us at support@cipherestate.com

---

**Built with ❤️ using FHE technology for the future of private real estate transactions**
