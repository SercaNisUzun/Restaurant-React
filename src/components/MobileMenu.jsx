import React, { useEffect, useRef } from 'react'
import { LuChefHat } from "react-icons/lu";
import { RiContactsBook2Line } from "react-icons/ri";

function MobileMenu({ display, setDisplay }) {

    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest("#mobileMenu")) {
            setDisplay("none");
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (

        <div ref={menuRef} style={{ display: display }}>
            <div className='mobileMenu'>
                <button> <LuChefHat className='icons' />About Us</button>
                <button> <RiContactsBook2Line className='icons' />Contact</button>
            </div>
        </div>

    )
}

export default MobileMenu
