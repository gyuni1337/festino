"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ColoredText from "@/components/ColoredText";
import ColorfulButton from "./components/ColorfulButton";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import EventCard from "./components/EventCard";
import EventsModal from "./components/EventsModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar marginTop={"mt-10"}/>
      <main className="lg:mx-[15%] mx-[10%] mt-[5%]">
        <div>
          <div className="flex flex-col gap-10">
            <ColoredText text="The best place to find the night of your life." size={"xl"} />
            <p className="text-text text-xl w-[40%]">Never miss out on the latest parties, and the new memories.</p>
          </div>

          <div className="flex gap-5 mt-12">
            <ColorfulButton href="/search" text="Explore" />
            <Button href="/signin" text="Sign In" />
          </div>
        </div>
        
        <hr className="mt-[10%] py-[1px] rounded bg-white" />
        
        <div className="mt-16 mb-[20%]">
          <ColoredText text={"Featured Events"} size={"md"} />
          <div className="flex mt-20 mx-[-20%] justify-around flex-wrap">
            <EventCard title="Klubb H" />
            <EventCard title="Heat" />
            <EventCard title="Sirocco" />
          </div>
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-2 rounded-xl bg-gradient-to-r from-[#9A9A9A] via-[#635985] to-[#443C68] text-white hover:opacity-90 transition-opacity"
            >
              See More Events
            </button>
            <a
              href="/search"
              className="px-10 py-2 rounded-xl bg-gradient-to-r from-[#9A9A9A] via-[#635985] to-[#443C68] text-white hover:opacity-90 transition-opacity"
            >
              Explore
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <EventsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
