import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from './CategoryItem';

function CategoryList() {

    const { category } = useSelector((store) => store.menu);

    return (
        <div className='CategoryList'>
            {
                category.map((categories) => (
                    <CategoryItem key={categories.idCategory} categories={categories} />
                ))
            }
        </div>
    )
}

export default CategoryList;
