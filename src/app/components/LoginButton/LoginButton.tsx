"use client";
import React from "react";
import { ConnectButton } from "thirdweb/react";
import { generatePayload, isLoggedIn, login, logout } from "../../actions/auth";
import { baseSepolia, ethereum, polygonAmoy, base } from "thirdweb/chains";
import { client } from "../../client";

export const LoginButton = () => {
  return (
    <ConnectButton
      client={client}
      chains={[baseSepolia, ethereum, polygonAmoy, base]}
      theme={"light"}
      connectModal={{
        size: "compact",
        titleIcon: "",
        showThirdwebBranding: false,
      }}
      auth={{
        isLoggedIn: async (address) => {
          return await isLoggedIn();
        },
        doLogin: async (params) => {
          await login(params);
        },
        getLoginPayload: async ({ address }) => generatePayload({ address }),
        doLogout: async () => {
          await logout();
        },
      }}
    />
  );
};
