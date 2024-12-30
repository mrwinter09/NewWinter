import { REWARD_TOKEN_CONTRACT, STAKING_CONTRACT } from "@/app/utils/contracts";
import { useEffect } from "react";
import { prepareContractCall, toEther } from "thirdweb";
import { balanceOf } from "thirdweb/extensions/erc20";
import {
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

export const StakeReward = () => {
  const account = useActiveAccount();
  const {
    data: tokenBalance,
    isLoading: isTokenBalanceLoading,
    refetch: refetchTokenBalance,
  } = useReadContract(balanceOf, {
    contract: REWARD_TOKEN_CONTRACT,
    address: account?.address || "",
  });

  const { data: stakedInfo, refetch: refetchStakedInfo } = useReadContract({
    contract: STAKING_CONTRACT,
    method: "getStakeInfo",
    params: [account?.address || ""],
  });

  useEffect(() => {
    refetchStakedInfo();
    const interval = setInterval(() => {
      refetchStakedInfo();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {!isTokenBalanceLoading && (
        <>
          <p>Wallet Balance: {toEther(BigInt(tokenBalance!.toString()))}</p>
        </>
      )}
      <h3>
        Stake Rewards: {stakedInfo && toEther(BigInt(stakedInfo[1].toString()))}
      </h3>
      <TransactionButton
        className="btn btn-stake"
        transaction={() =>
          prepareContractCall({
            contract: STAKING_CONTRACT,
            method: "claimRewards",
          })
        }
        onTransactionConfirmed={() => {
          alert("Rewards Claimed!");
          refetchStakedInfo();
          refetchTokenBalance();
        }}
      >
        Approve
      </TransactionButton>
    </div>
  );
};
