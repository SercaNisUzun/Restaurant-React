import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './MenuItem'
import { MdVerticalAlignTop } from "react-icons/md";

function MenuList() {

    const { menus } = useSelector((store) => store.menu);

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!menus || menus.length === 0) {
        return <div><p style={{ textAlign: 'center', fontSize: '20px' }}>Loading...</p></div>;
    }

    return (
        <div className='menuList'>

            {
                menus.map((menuItem) => (
                    <MenuItem key={menuItem.idMeal} menuItem={menuItem} />
                ))
            }

            {<MdVerticalAlignTop onClick={scrollToTop} className='toTop' style={{ display: isVisible ? 'block' : 'none' }} />}

        </div>
    )
}

export default MenuList
