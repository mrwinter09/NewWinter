import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { cookies } from "next/headers";
import { thirdwebAuth } from "../utils/thirdwebAuth";
import Link from "next/link";
import { hasAccess } from "../actions/conditions"; // Ensure this path is correct
import { GatedContent } from "./GatedContent";

export default async function AirdropPage() {
  const jwt = cookies().get("jwt");

  if (!jwt?.value) {
    return <MustLogin />;
  }

  const authResult = await thirdwebAuth.verifyJWT({
    jwt: jwt.value,
  });

  if (!authResult.valid) {
    return <MustLogin />;
  }

  const address = authResult.parsedJWT.sub;

  if (!address) {
    throw new Error("No address found in JWT");
  }

  console.log(address);
  const _hasAccess = await hasAccess(address);

  if (!_hasAccess) {
    return <NotAllowed />;
  }

  return <GatedContent />;
}

const MustLogin = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[100vh] items-center justify-center p-4 text-center mb-20 md:mb-20">
        <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
          Your are not logged in
        </h1>
        <Link href="/">
          <button className="btn">Go to login</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

const NotAllowed = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[100vh] items-center justify-center p-4 text-center mb-20 md:mb-20">
        <h1>Access Denied</h1>
        <p>Claim NFT to get access</p>
        <Link href="/claim-nft">
          <button className="btn">Claim NFT</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};
