"use client";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Signup />
      <Featured />
      <Footer />
    </>
  );
}
