import { createThirdwebClient } from "thirdweb";

const clientId = "5430ddfe188ae1d7fdb3902959158063";

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
