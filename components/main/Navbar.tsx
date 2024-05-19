import React from 'react'
import NavbarContent from '../sub/NavbarContent'


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

export default function Navbar() {
    return (
        <div className="nav-box fixed w-full z-40 backdrop-blur-md px-2">
            <NavbarContent />
        </div>

    )
}
