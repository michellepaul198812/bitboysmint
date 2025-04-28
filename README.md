# bitboysmint

## Project Description

**bitboysmint** is a decentralized minting platform built on the Aptos blockchain. It enables users to mint unique Bitboys NFTs through a transparent and secure process using Move smart contracts. The project is designed to offer fair, auditable, and community-driven NFT drops.

## Features

- 🎨 Mint unique Bitboys NFTs on-chain
- ⚡ Fast and gas-optimized minting on Aptos
- 🔒 Secure smart contract handling for mint lifecycle
- 🧩 Configurable parameters like mint price, supply cap, and whitelist
- 🛠️ Easy integration with Aptos wallets and marketplace platforms

## Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/michellepaul198812/bitboysmint.git
cd bitboysmint

# Install frontend dependencies (if applicable)
npm install
# or
yarn install
\`\`\`

## Usage

### Deploy Smart Contracts

\`\`\`bash
# Compile Move contracts
aptos move compile --package-dir move/

# Publish the contracts to Aptos network
aptos move publish --package-dir move/ --profile default
\`\`\`

### Mint NFTs (Example)

\`\`\`bash
# Execute mint transaction via CLI
aptos move run-entry-function \
  --function-id "bitboysmint::minter::mint" \
  --args "0xYourReceiverAddress"
\`\`\`

Or integrate minting logic into a frontend DApp using Aptos SDKs.

### Testing

\`\`\`bash
# Run Move unit tests
aptos move test --package-dir move/
\`\`\`

## Configuration

- Modify mint price, total supply, whitelist settings, or reveal mechanics directly in the Move modules before deployment.
- Update `aptos.yaml` profiles to deploy to devnet, testnet, or mainnet as needed.

## Contributing

We welcome contributions from the community!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add your message here'`)
5. Push to your branch (`git push origin feature/your-feature-name`)
6. Create a pull request

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).

## Links

- [Aptos Documentation](https://aptos.dev/)
- [Move Language Documentation](https://move-language.github.io/move/)
- [Aptos GitHub](https://github.com/aptos-labs)
