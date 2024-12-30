import { createAuth } from "thirdweb/auth";
import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "../client";

const privateKey = process.env.THIRDWEB_PRIVATE_KEY || "";

if (!privateKey) {
  throw new Error("Private key not found");
}

export const thirdwebAuth = createAuth({
  domain: process.env.NET_PUBLIC_THIRDWEB_DOMAIN || "",
  adminAccount: privateKeyToAccount({
    client: client,
    privateKey: privateKey,
  }),
});
