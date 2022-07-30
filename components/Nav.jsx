import React from "react";
import Link from "next/link";

function Nav(){
    return(
        <div className="nav-bar">
            <Link href="/">React Blogs</Link>
            <Link href="/login">Login</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/write">Write</Link>
        </div>
    )
};

export default Nav;