import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuList from '../components/MenuList.jsx'
import Category from '../pages/Category.jsx'
import Addition from '../pages/Addition.jsx'


function RouterConfig() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Category />} />
                <Route path='/menu' element={<MenuList />} />
                <Route path='/addition' element={<Addition />} />
            </Routes>
        </div>
    )
}

export default RouterConfig
