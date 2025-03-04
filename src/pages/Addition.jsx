import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket } from '../Redux/slice/BasketSlice';

function Addition() {

    const { products, totalAmount } = useSelector((store) => store.basket);

    const currentDate = new Date();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateBasket())
    }, [])

    return (
        <div className='addition'>

            <h1>SERCAN</h1>
            <p>SOMEWHERE OVER THE RAINBOW STREET</p>

            <div className='date'>
                <p>{currentDate.toDateString()}</p>
            </div>

            <div>
                {products.map((item) => (
                    <div key={item.idMeal} className='bill'>
                        <p className='billInfo'>{item.count} X {item.strMeal}</p>
                        <p className='billprice'>$ {(item.price * item.count).toFixed(2)}</p>
                    </div>
                )
                )}
            </div>

            <div className='price'>
                <p>SUBTOTAL : $ {(totalAmount).toFixed(2)}</p>
                <p>Tax : $ {((totalAmount).toFixed(2) % 8).toFixed(2)} </p>
                <p>Total : $ {(totalAmount + (totalAmount).toFixed(2) % 8).toFixed(2)}  </p>
            </div>

            <p className='ty'>THANK YOU FOR EATING WITH US !</p>

        </div>
    )
}

export default Addition
