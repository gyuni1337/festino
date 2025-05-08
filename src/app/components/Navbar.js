"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import ColorfulButton from "./ColorfulButton";
import Button from "./Button";
import { IoMenu } from "react-icons/io5";
import { useRouter } from "next/navigation";
import useAuth from "@/utils/useAuth";
import ProfileModal from "./ProfileModal";
import axiosInstance from "@/utils/axios";
import axios from "axios";

export const getUserInfo = async () => {
  try {
    const res = await axiosInstance.get('/auth');
    return res.data.user; 
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    return null;
  }
};

export default function Navbar({extras, marginTop, shadow}) {

    let [showMenuButton, setShowMenuButton] = useState(false);
    let [menuState, setMenuState] = useState(false);
    const [ showProfileModal, setShowProfileModal ] = useState(false);
    const isAuthenticated   = useAuth(); // Custom hook to check authentication status
    const [user, setUser ] = useState("");

    const router = useRouter();

  useEffect(() => {
    const getInfo = async () => {
      const res = await getUserInfo();
      setUser(res);
    };

    if (!isAuthenticated) {
      console.log("Not logged in");
    } else {
      getInfo();
    }

  }, [isAuthenticated])

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
            <div className={`flex justify-around z-[100] relative transition-all bg-darkGray xl:mx-[0%] ${marginTop } ${shadow}`}>
            <Image src="/lightLogo.png" className="cursor-pointer" alt="logo" width="300" height="400" onClick={() => { router.push('/')}} /> 
                <div className="flex items-center">
                    { showMenuButton ? 
                    <div className="flex flex-col items-center">
                        <IoMenu className="cursor-pointer" onClick={() => { setMenuState(!menuState); }} color="#4D4670" size={80}/>
                    </div>   
                     : 
                     <ul className="flex gap-10 cursor-pointer items-center">
                             { extras &&
                              <>
                             <li onClick={() => { router.push('/search')}}>Clubs</li>
                             <li onClick={() => { router.push('/search')}}>Food</li>
                             <li onClick={() => { router.push('/search')}}>Pubs</li>
                             </>
                            }
                            {!isAuthenticated ? 
                             <div className="flex gap-5 items-center">

                             <Button href="/signin" text="Sign In" />
                             <ColorfulButton href="/signup" text="Sign Up" />
                             </div>
                            : <div>
                                  <Image src={ "/defaultPfp.jpg"} alt="Your profile picture" onClick={() => { setShowProfileModal(!showProfileModal)}} className="rounded-2xl" width={50} height={50} />
                                </div>
                            }
                         </ul>
                     
            }
                </div>
            </div>
            { menuState &&
             <div className="flex flex-col bg-secondary text-primary text-2xl cursor-pointer p-10 items-start gap-5">
                <Link className="underline-offset-8 underline" href="/search">Clubs</Link>    
                <Link className="underline-offset-8 underline" href="/search">Foods</Link>    
                <Link className="underline-offset-8 underline" href="/search">Pubs</Link>    
            </div>
        
      }

      <ProfileModal isOpen={showProfileModal} onClose={() => { setShowProfileModal(false)}} />

        </>
    )
}
