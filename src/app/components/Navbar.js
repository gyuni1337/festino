"use client";

import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <div className="flex justify-around mx-48 mt-10">
            <Image src="/purpleLogo.png" alt="logo" width="300" height="400" />
                <div className="flex items-center">
                    <ul className="flex gap-10 items-center">
                        <li>Clubs</li>
                        <li>Events</li>
                        <li>Pubs</li>
                        <div className="flex gap-5 items-center">
                        <input type="button" className="border px-10 rounded-xl py-2" value={"Login"}></input>
                        <input type="button" className="border px-10 rounded-xl py-2" value={"Register"}></input>

                        </div>
                    </ul>
                </div>
            </div>

        </>
    )
}
