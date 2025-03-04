import React, { useState, useEffect } from 'react'
import { addToBasket, calculateBasket } from '../Redux/slice/BasketSlice';
import { useDispatch } from 'react-redux';

function MenuItem({ menuItem }) {

    const { strMeal, strMealThumb, idMeal } = menuItem;

    const [price, setPrice] = useState(null);

    useEffect(() => {
        const randomPrice = ((Math.random() * 20 + 10)).toFixed(2);
        setPrice(randomPrice);
    }, []);

    const dispatch = useDispatch();

    const addBasket = () => {
        const payload = {
            idMeal,
            strMeal,
            strMealThumb,
            count: 1,
            price
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket())
    }

    return (
        <div className='menuItem'>

            <img src={strMealThumb} alt={strMeal} />

            <div className='menuInfo'>

                <h3>{strMeal}</h3>

                <div className='menuPrice'>
                    <p>{price} $</p>
                    <button onClick={addBasket}>ADD TO BASKET</button>
                </div>

            </div>
        </div>
    )
}

export default MenuItem
