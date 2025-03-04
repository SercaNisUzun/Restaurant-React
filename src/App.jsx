import { useEffect, useState } from 'react'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from './Redux/slice/MenuSlice'
import RouterConfig from './config/RouterConfig'
import Drawer from '@mui/material/Drawer'
import { setDrawer } from './Redux/slice/BasketSlice'
import { calculateBasket, deleteFromBasket, setMinus, setPlus } from './Redux/slice/BasketSlice'
import { PiPlusCircleBold, PiMinusCircleBold } from "react-icons/pi";
import { MdOutlineDeleteForever } from "react-icons/md";
import Footer from './components/Footer'
import { useNavigate } from 'react-router-dom'

function App() {

  const [display, setDisplay] = useState("none");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory())
  }, [])

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);

  useEffect(() => {
    dispatch(calculateBasket())
  }, [])

  const deleteItem = (productId) => {
    dispatch(deleteFromBasket({ idMeal: productId }))
  }

  const decrement = (productId) => {
    dispatch(setMinus({ idMeal: productId }))
  }

  const increment = (productId) => {
    dispatch(setPlus({ idMeal: productId }))
  }

  const navigate = useNavigate();

  return (
    <>
      <div className='mainContent'>
        <Header setDisplay={setDisplay} />
        <MobileMenu display={display} setDisplay={setDisplay} />
        <RouterConfig />
        <Drawer anchor="right" open={drawer} onClose={() => dispatch(setDrawer())}>
          <h2 className='basketHeader'>Your Meals</h2>
          <hr />
          {products.length === 0 ? (
            <h2 style={{ margin: '20px' }}>Your Basket is empty..</h2>
          ) : (
            products && products.map((product) => {
              return (
                <div key={product.idMeal} className='basketCard'>

                  <img src={product.strMealThumb} alt={product.strMeal} />

                  <div className='basketInfo'>
                    <p>{product.strMeal}</p>

                    <div className='count'>
                      <PiMinusCircleBold className='basketIcon' onClick={() => decrement(product.idMeal)} />
                      <p style={{ margin: '0 5px' }}>{product.count} PCS</p>
                      <PiPlusCircleBold className='basketIcon' onClick={() => increment(product.idMeal)} />
                    </div>

                    <div className='price'>
                      <p>{(product.price * product.count).toFixed(2)} $</p>
                      <MdOutlineDeleteForever className='basketIcon' id={product.idMeal} onClick={() => deleteItem(product.idMeal)} />
                    </div>

                  </div>
                </div>
              )
            }))}

          <button className='basketButton' onClick={() => { navigate('/addition'); dispatch(setDrawer()) }}>To Basket</button>

        </Drawer>

      </div>

      <Footer />

    </>
  )
}

export default App
