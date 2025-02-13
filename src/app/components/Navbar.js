"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { IoMenu } from "react-icons/io5";


export default function Navbar() {

    let [showMenuButton, setShowMenuButton] = useState(false);
    let [menuState, setMenuState] = useState(false);

  useEffect(() => {
        if (typeof window === "undefined") return; // Ensure it only runs in the browser

        const handleResize = () => {
            setShowMenuButton(window.innerWidth < 768);
        };

        // Run on mount
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="flex justify-around xl:mx-48 mt-10">
            <Image src="/purpleLogo.png" alt="logo" width="300" height="400" />
                <div className="flex items-center">
                    { showMenuButton ? 
                    <div className="flex flex-col items-center">
                        <IoMenu className="cursor-pointer" onClick={() => { setMenuState(!menuState); console.log(menuState); }} color="#4D4670" size={80}/>
                    </div>   
                     : 
                    <ul className="flex gap-10 items-center">
                        <li>Clubs</li>
                        <li>Events</li>
                        <li>Pubs</li>
                        <div className="flex gap-5 items-center">
                        <input type="button" className="border px-10 rounded-xl py-2" value={"Login"}></input>
                        <input type="button" className="border px-10 rounded-xl py-2" value={"Register"}></input>

                        </div>
                    </ul>
            }
                </div>
            </div>
            { menuState &&
             <div className="flex flex-col bg-secondary text-primary text-2xl p-10 items-start gap-5">
                <Link className="underline-offset-8 underline" href="/clubs">Clubs</Link>    
                <Link className="underline-offset-8 underline" href="/clubs">Events</Link>    
                <Link className="underline-offset-8 underline" href="/clubs">Pubs</Link>    
            </div>
                }

        </>
    )
}
