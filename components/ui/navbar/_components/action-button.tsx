'use client'
import React, {useState, useEffect} from "react";
//inside the layout we have privyprovider so we can use usePrivy hook
import { usePrivy, useWallets } from "@privy-io/react-auth";

import {Button} from "@/components/ui/button";
import {X, AlignJustify} from 'lucide-react'
import Link from "next/link";

//drop down

import {getUserByAddress} from "@/utils/queries";

export const ActionButtons = () => {
    const {ready, authenticated, user, login, logout} = usePrivy();
    const { wallets } = useWallets();
    
    const [iseDropdownVisible, setDropdownVisible] = useState(false);
    const [UserInfo, setUserInfo] = useState("");

    const toggleDropdown = () => {
        setDropdownVisible(!iseDropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };

    useEffect(() => {
        const getUserInfo = async () => {
            let userInfo = (await getUserByAddress(ready ? wallets[0].address: '0x0'
            ))as any;
            setUserInfo(userInfo);
        };
        getUserInfo();
    },[ready, authenticated]);

    return(
        <div className="pr-2">
          <div className="items-center justify-center flex">
            <div className="flex xl:space-x-4">
             {authenticated && UserInfo != 'User does not exist' ? (
                <>
                <Link href={'/dashboard'}className="lg:flex items-center hidden">
                <div>
                    Dashboard
                </div>
                <div className="font-thin lg:flex ml-4 mr-0 items-center hidden">
                |
                </div>
                </Link>
                </>
                
             ) :  authenticated && UserInfo === 'User does not exist' ?(
                <>
                 <Link href={'/onboard'}className="lg:flex items-center hidden">
                <div>
                    Get DiD
                </div>
                <div className="font-thin lg:flex ml-4 mr-0 items-center hidden">
                |
                </div>
                </Link>
                </>
             ): (
                ""
             )}
            </div>
            <div className="flex lg:space-x-2 items-center pr-4">
              <Link href={'/free'}>
              <Button variant={"outline"} className="lg:flex items-center hidden border-none text-d">
              </Button>
              </Link>
              {authenticated ? (
                <Button className="hidden lg:block absolute top-0 right-0 m-3" onClick={logout}>Disconnect</Button>
              ):(
                <Button className="hidden lg:block absolute top-0 right-0 m-3" onClick={login}>Connect</Button>
              )

              }
            </div>
          </div>
          {
            iseDropdownVisible && (
                <div onClick={toggleDropdown} className="rounded-full xl:hidden">
                <X className="h-5 w-5 items-center justify-center rounded-full"/>
                
                </div>
            )
        }
        {
            !iseDropdownVisible && (
                <div onClick={toggleDropdown} className="flex lg:hidden">
                <AlignJustify className="h-6 w-5 items-center justify-center rounded-full"/>
                </div>
            )
        }
        </div>
    );
};

