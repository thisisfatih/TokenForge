# TokenForge

TokenForge is a simple ERC-20 token contract on Ethereum. It is designed to be easy to deploy and use, and it can be used to create your own custom tokens.

## Features

- ERC-20 compliant
- Easy to deploy
- Customizable token name, symbol, and initial supply

## Getting Started

To get started with TokenForge, you will need to have Node.js and npm (or yarn) installed. You will also need to have Hardhat installed globally.

1.  Clone the repository:

```bash
git clone [repository URL]
```

2.  Install the dependencies:

```bash
cd tokenforge
npm install
```

3.  Compile the contract:

```bash
npx hardhat compile
```

4.  Deploy the contract:

```bash
npx hardhat run scripts/deploy.js
```

## Usage

Once you have deployed the contract, you can use it to create your own custom tokens. The deploy script takes the following arguments:

- `name`: The name of your token.
- `symbol`: The symbol of your token.
- `initialSupply`: The initial supply of your token (in the smallest unit of the token, e.g., if you want 1 million tokens, you might input 1000000 \* 10\*\*18).

You can pass these arguments directly to the deploy script:

```bash
npx hardhat run scripts/deploy.js --network <network_name> --name "MyToken" --symbol "MTK" --initial-supply 1000000000000000000000000
```

Replace `<network_name>` with the desired network (e.g., `sepolia`, `goerli`, or `localhost`).

## Testing

To run the tests for TokenForge, you can use the following command:

```bash
npx hardhat test
```

## Security Considerations

This is a basic ERC-20 token example for educational purposes. For production use, consider the following:

- **Audits:** Have your contract audited by a reputable security firm.
- **OpenZeppelin Contracts:** This project uses OpenZeppelin contracts, which are well-vetted, but always review the specific versions you are using.
- **Minting/Burning:** This contract currently only mints tokens upon deployment. If you require minting or burning functionality, you will need to add those functions. Consider access control for these functions.
- **Upgradability:** If you anticipate needing to upgrade your contract in the future, consider using an upgradeable contract pattern.

## License

MIT
