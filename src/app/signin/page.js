"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Page() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const loginUser = async (email, password) => {
        try {
            const response = await axios.post("/api/auth", {
            action: "login",
            email,
            password,
            });
            return response.data; 
        } catch (error) {
            console.error("Login Error:", error);
            throw new Error("Login failed");
        }
        };

    return (
        <div className="min-h-screen bg-[#141313]">
            <div>
                <Navbar />
            </div>
            <div className="flex justify-center items-center px-4 py-24">
                <div className="w-[788px] p-6 border-4 border-[#443C68] shadow-[0_5px_9.2px_#635985] rounded-[37px]">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-5">
                            <h2 className="text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-[#635985]">
                                Account
                            </h2>
                            
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-xl text-white font-normal">Email</label>
                                    <input
                                        type="email"
                                        className="w-[329px] h-[38px] bg-[#D0D0D0] border-2 border-white rounded-[14px] px-4 text-lg text-black"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Begin typing here.."
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-xl text-[#969696] font-normal">Password</label>
                                    <input
                                        type="password"
                                        className="w-[329px] h-[38px] border-2 border-white rounded-[14px] px-4 text-lg bg-transparent "
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Begin typing here.."
                                    />
                                </div>
                                
                            
                                
                              <button onClick={async () => {
                            try {

                            let {token} = await loginUser( email, password);
                            localStorage.setItem("token", token);
                            router.push("/");
                            
                            } catch (error) {
                                setError("Registration failed. Please try again.");
                            }
                                    }} className="w-[139px] h-[43px] bg-gradient-to-r from-[#9A9A9A] via-[#635985] to-[#443C68] border border-white rounded-[17px] text-xl text-white">
                                  Log In
                                </button>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="absolute left-0 h-full w-1.5 bg-[#443C68]"></div>
                            <h2 className="text-3xl font-normal ml-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#443C68]">
                                Welcome To Festino
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    );
}
