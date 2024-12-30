import { defineChain, getContract } from "thirdweb";
import { client } from "../client";
import { balanceOf } from "thirdweb/extensions/erc721";
import { polygonAmoy } from "thirdweb/chains";

export async function hasAccess(address: string): Promise<boolean> {
  const quantityRequired = 1n;

  const contract = getContract({
    client: client,
    chain: defineChain(polygonAmoy),
    address: "0xF7c007aa844b5f3621958Fb8D5C359e07F30a12F",
  });

  console.log(address);

  const ownedBalance = await balanceOf({
    contract: contract,
    owner: address,
  });

  return ownedBalance >= quantityRequired;
}
