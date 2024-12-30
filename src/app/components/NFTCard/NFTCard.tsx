import { useState } from "react";
import { NFT, prepareContractCall } from "thirdweb";
import { MediaRenderer } from "thirdweb/react";
import { TransactionButton } from "thirdweb/react";
import "./NFTCard.css";
import { client } from "@/app/client";
import { approve } from "thirdweb/extensions/erc721";
import { NFT_CONTRACT, STAKING_CONTRACT } from "@/app/utils/contracts";

type OwnedNFTsProps = {
  nft: NFT;
  refetchOwnedNFTs: () => void;
  refetchStakingInfo: () => void;
};

export const NFTCard = ({
  nft,
  refetchOwnedNFTs,
  refetchStakingInfo,
}: OwnedNFTsProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  return (
    <div className="card-container">
      <MediaRenderer
        client={client}
        src={nft.metadata.image}
        className="image"
      />
      <p className="nft-name">{nft.metadata.name}</p>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
        className="btn btn-stake"
      >
        Stake
      </button>
      {isModalOpen && (
        <div className="card-modal">
          <div className="div-modal">
            <div className="div-modal-image">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                className="btn btn-close"
              >
                Close
              </button>
            </div>
            <h4>You are about to stake: </h4>
            <MediaRenderer
              client={client}
              src={nft.metadata.image}
              className="image"
            />
            {!isApproved ? (
              <TransactionButton
                className="btn btn-stake"
                transaction={() =>
                  approve({
                    contract: NFT_CONTRACT,
                    to: STAKING_CONTRACT.address || "",
                    tokenId: nft.id,
                  })
                }
                onTransactionConfirmed={() => {
                  setIsApproved(true);
                }}
              >
                Approve
              </TransactionButton>
            ) : (
              <TransactionButton
                className="btn btn-stake"
                transaction={() =>
                  prepareContractCall({
                    contract: STAKING_CONTRACT,
                    method: "stake",
                    params: [[nft.id]],
                  })
                }
                onTransactionConfirmed={() => {
                  alert("NFT Staked");
                  setModalOpen(false);
                  refetchOwnedNFTs();
                  refetchStakingInfo();
                }}
              >
                Stake
              </TransactionButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
