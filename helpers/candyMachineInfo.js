export const candyMachineAddress = "0xe4a16e86b2766e8b1a1375afeb4d461b2937038beb3d0292df25b1528765af5f";

export const collectionName = "BitBoys"; // Case sensitive!
export const MaxMint = 2
export const COLLECTION_SIZE = 2828

// To remove the background of the dapp to a solid color just delete the "collectionCoverUrl" url below
// Any hosted image can be used
export const collectionCoverUrl = "https://fuchsia-voluntary-ladybug-397.mypinata.cloud/ipfs/QmcMbcAn1FcPFUky2uWGTZXPiLSkPPcJdBjEXch5mTMuZ7";
export const collectionBackgroundUrl = "https://cloudflare-ipfs.com/ipfs/QmUWfp89PF5Yr2KjBCUQ8AAC5Pk2NUUjWg7yV1AefFP2EK";

export const mode = "mainnet"; // "dev" or "test" or "mainnet"
export let NODE_URL;
export const CONTRACT_ADDRESS = "0x5b71b400de0767bcec88464c33a0c74c839737206883a9379252f4907b8bf30e";
export const SERVICE_NAME = "ftmpad"
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
