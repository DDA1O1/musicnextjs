'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/lib/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                    <div className="flex flex-col space-y-4 items-center">
                        <ProductItem
                            title="Home"
                            description="Get started with our guitar and piano courses."
                            href="/"
                            src="/home/home.jpg"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About">
                    <div className="flex flex-col space-y-4 items-center">
                        <ProductItem
                            title="About Us"
                            description="Learn more about our company and our mission."
                            href="/about"
                            src="/about/about-us.jpg"
                        />
                        <ProductItem
                            title="Our Team"
                            description="Meet our team of experts who are passionate about music."
                            href="/about"
                            src="/about/our-team.jpg"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 items-center">
                        <ProductItem
                            title="Music Courses"
                            description="Learn the basics of playing guitar with our comprehensive beginner's course."
                            href="/courses"
                            src="/courses/guitar.jpg"
                        />
                        <ProductItem
                            title="Music Courses"
                            description="Start your musical journey with foundational piano skills taught by expert instructors."
                            href="/courses"
                            src="/courses/piano.jpg"
                        />
                        <ProductItem
                            title="Music Courses"
                            description="Enhance your singing with advanced vocal techniques for intermediate to advanced learners."
                            href="/courses"
                            src="/courses/vocalist.jpg"
                        />
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}




export default Navbar