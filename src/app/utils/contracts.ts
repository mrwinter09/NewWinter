import { getContract } from "thirdweb";
import { client } from "../client";
import { baseSepolia } from "thirdweb/chains";
import { contractABI } from "./contractABI";
import { stakingContractABI } from "./stakingContractABI";

const contractAddress = "0xaE02Eab159a2190F4Cd15AD7e22B5977272492E4";
const nftContractAddress = "0xc270cABA352F946c3BA9fc81212d8D126626301a";
const rewardTokenContractAddress = "0x3640C836202ca23e98B7a6FE3470bC7335593ABe";
const stakingContractAddress = "0x14Af9DCd224F47B55E828A6c51B711D5B3664d5a";

export const contract = getContract({
  client: client,
  chain: baseSepolia,
  address: contractAddress,
  abi: contractABI,
});

export const NFT_CONTRACT = getContract({
  client: client,
  chain: baseSepolia,
  address: nftContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
  client: client,
  chain: baseSepolia,
  address: rewardTokenContractAddress,
});

export const STAKING_CONTRACT = getContract({
  client: client,
  chain: baseSepolia,
  address: stakingContractAddress,
  abi: stakingContractABI,
});
