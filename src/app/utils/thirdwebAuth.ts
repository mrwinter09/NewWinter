import { createAuth } from "thirdweb/auth";
import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "../client";

const privateKey =
  "984b4ce0eeff6fc31b611774341cc0d04d19798f77a582d68fd73852b525f6ca";

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
