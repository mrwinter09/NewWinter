import { useState } from "react";
import { NFT, prepareContractCall } from "thirdweb";
import { MediaRenderer, useReadContract } from "thirdweb/react";
import { TransactionButton } from "thirdweb/react";
import "./StakedNFTCard.css";
import { client } from "@/app/client";
import { approve, getNFT } from "thirdweb/extensions/erc721";
import { NFT_CONTRACT, STAKING_CONTRACT } from "@/app/utils/contracts";

type StakedNFTsProps = {
  tokenId: bigint;
  refetchOwnedNFTs: () => void;
  refetchStakingInfo: () => void;
};

export const StakedNFTCard = ({
  tokenId,
  refetchOwnedNFTs,
  refetchStakingInfo,
}: StakedNFTsProps) => {
  const { data: nft } = useReadContract(getNFT, {
    contract: NFT_CONTRACT,
    tokenId: tokenId,
  });

  return (
    <div className="card-container">
      <MediaRenderer
        client={client}
        src={nft?.metadata.image}
        className="image"
      />
      <p className="nft-name">{nft?.metadata.name}</p>
      <TransactionButton
        className="btn btn-stake"
        transaction={() =>
          prepareContractCall({
            contract: STAKING_CONTRACT,
            method: "withdraw",
            params: [[tokenId]],
          })
        }
        onTransactionConfirmed={() => {
          alert("Withdrawn successfully");
          refetchStakingInfo();
          refetchOwnedNFTs();
        }}
      >
        Widthdraw
      </TransactionButton>
    </div>
  );
};
