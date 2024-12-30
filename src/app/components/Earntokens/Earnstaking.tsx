/** @format */
"use client";
import {
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import "./Earnstaking.css";
import {
  claimTo,
  getNFTs,
  ownerOf,
  totalSupply,
} from "thirdweb/extensions/erc721";
import { NFT_CONTRACT, STAKING_CONTRACT } from "@/app/utils/contracts";
import { useEffect, useState } from "react";
import { NFT } from "thirdweb";
import { NFTCard } from "../NFTCard/NFTCard";
import { StakedNFTCard } from "../StakedNFTCard/StakedNFTCard";
import { StakeReward } from "../StakedReward/StakeReward";

const Earnstaking = () => {
  const account = useActiveAccount();
  const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);

  const getOwnedNFTs = async () => {
    let ownedNFTs: NFT[] = [];

    const totalNFTSupply = await totalSupply({ contract: NFT_CONTRACT });
    const nfts = await getNFTs({
      contract: NFT_CONTRACT,
      start: 0,
      count: parseInt(totalNFTSupply.toString()),
    });

    for (let nft of nfts) {
      const owner = await ownerOf({
        contract: NFT_CONTRACT,
        tokenId: nft.id,
      });

      if (owner === account?.address) {
        ownedNFTs.push(nft);
      }
    }

    setOwnedNFTs(ownedNFTs);
  };

  useEffect(() => {
    if (account) {
      getOwnedNFTs();
    }
  }, [account]);

  const { data: stakedInfo, refetch: refetchStakedInfo } = useReadContract({
    contract: STAKING_CONTRACT,
    method: "getStakeInfo",
    params: [account?.address || ""],
  });

  return account ? (
    <>
      <div className="earn">
        <div className="title">
          <h3 className="left">Claim NFT to Stake</h3>
          <TransactionButton
            className="btn right"
            transaction={() =>
              claimTo({
                contract: NFT_CONTRACT,
                to: account.address || "",
                quantity: BigInt(1),
              })
            }
            onTransactionConfirmed={() => {
              alert("NFT Claimed");
              getOwnedNFTs();
            }}
          >
            Claim NFT
          </TransactionButton>
        </div>
        <hr />
        <div className="container">
          <h3 className="left">Owned NFTs</h3>
          <div className="right">
            {ownedNFTs && ownedNFTs.length > 0 ? (
              ownedNFTs.map((nft) => (
                <NFTCard
                  key={nft.id}
                  nft={nft}
                  refetchOwnedNFTs={getOwnedNFTs}
                  refetchStakingInfo={refetchStakedInfo}
                />
              ))
            ) : (
              <p>You own 0 NFTs</p>
            )}
          </div>
        </div>
        <hr />
        <div className="container">
          <h3 className="left">Staked NFTs</h3>
          <div className="right">
            {stakedInfo && stakedInfo[0].length > 0 ? (
              stakedInfo[0].map((tokenId: bigint) => (
                <StakedNFTCard
                  key={tokenId}
                  tokenId={tokenId}
                  refetchOwnedNFTs={getOwnedNFTs}
                  refetchStakingInfo={refetchStakedInfo}
                />
              ))
            ) : (
              <p>You own 0 stakes NFTs</p>
            )}
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="right">
            <StakeReward />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="earn">
        <div className="container">
          {/* Left Side */}
          <div className="right">
            <h2>Please connect your wallet to stake tokens</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Earnstaking;
