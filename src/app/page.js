"use client";
import Navbar from "@/components/Navbar";
import HeroText from "@/components/heroText";
import ColorfulButton from "./components/ColorfulButton";

export default function Home() {

  return (
    <>
      <Navbar />
      <main className="mx-[20%]">
        <HeroText text="The best place to find the night of your life." />
        <ColorfulButton text="Find a club" />
      </main>
    </>
  );
}
