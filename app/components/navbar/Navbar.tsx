"use client";

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import React from "react";
import { ModeToggle } from "@/app/components/ui/ThemeToggler";
import DocumentTab from "./DocumentTab";
import { NavbarProps } from "@/app/types/interfaces";

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm dark:bg-black dark:border-black">
            <div className="py-4 border-b border-neutral-200">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <DocumentTab />
                        <div className="flex flex-row gap-3">
                            <UserMenu currentUser={currentUser} />
                            <ModeToggle />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar;