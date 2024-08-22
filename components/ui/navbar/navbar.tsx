'use client'

import React, {useState, useEffect} from "react"
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";
import { ActionButtons } from "./_components/action-button";

//action bar
//logo
//menu

export const Navbar = () => {
    const navbarClasses = `
    flex justify-between bg-white h-14 
    sticky top-0 z-50 border-b border-gray-200
    `;

    return (
        <div className={navbarClasses}>
        <div className="flex items-center justify-center">
            {/*logo */}
            <Logo/>
            {/* menu */}
            <Menu/>
            {/* Action buttons */}
            <ActionButtons/>
        </div>
        </div>
    )
}