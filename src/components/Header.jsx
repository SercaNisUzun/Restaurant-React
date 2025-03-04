import React, { useState } from 'react'
import logo from '../assets/logo.avif'
import { FaHamburger } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
import { setDrawer } from '../Redux/slice/BasketSlice';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector, useDispatch } from 'react-redux';

function Header({ setDisplay }) {

    const [mobileMenuToggle, setMobileMenuToogle] = useState(true);

    const { products } = useSelector((store) => store.basket);

    const dispatch = useDispatch();

    const changeDisplay = () => {
        if (mobileMenuToggle) {
            setDisplay("block")
        } else {
            setDisplay("none")
        }
        setMobileMenuToogle(!mobileMenuToggle)
    }

    const navigate = useNavigate();

    return (
        <div className='header'>

            <div>
                <img src={logo} alt="Logo" onClick={() => navigate("/")} />
            </div>

            <div className='menuIcon'>
                <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color='error'>
                    <BsBasketFill />
                </Badge >

                <FaHamburger id='mobileMenu' onClick={changeDisplay} />
            </div>

        </div>
    )
}

export default Header
