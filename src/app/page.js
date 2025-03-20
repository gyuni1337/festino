"use client";
import Navbar from "@/components/Navbar";
import ColoredText from "@/components/ColoredText";
import ColorfulButton from "./components/ColorfulButton";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {

  return (
    <>
      <Navbar marginTop={"mt-10"}/>
      <main className="lg:mx-[15%] mx-[10%] mt-[5%]">
        <div>
        <div className="flex flex-col gap-10">
          <ColoredText text="The best place to find the night of your life." size={"xl"} />
          <p className="text-text  text-xl w-[40%]">Never miss out on the latest parties, and the new memories.</p>
        </div>

      <div className="flex gap-5 mt-12">
        <ColorfulButton href="/search" text="Explore" />
        <Button text="Sign In" />
      </div>

        </div>
        <hr className="mt-[10%] py-[1px] rounded bg-white" />
        
        <div className="mt-16 mb-[20%]">
            <ColoredText text={"Upcoming Events"} size={"md"} />
            <div className="flex mt-20 mx-[-10%] justify-around xl:gap-0 gap-10 flex-wrap">
                <div className="bg-white w-96 h-96 rounded-lg shadow-lg">

                </div>
                    <div className="bg-white w-96 h-96 rounded-lg shadow-lg">

                </div>
                    <div className="bg-white w-96 h-96 rounded-lg shadow-lg">

                </div>
            </div>
        </div>


      </main>
      <Footer />
    </>
  );
}
