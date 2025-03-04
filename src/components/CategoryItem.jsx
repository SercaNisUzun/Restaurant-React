import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMenu, setSelectedCategory } from '../Redux/slice/MenuSlice';
import { useNavigate } from 'react-router-dom';

function CategoryItem({ categories }) {

  const { strCategory, strCategoryThumb } = categories;

  const { selectedCategory } = useSelector((store) => store.menu);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCategory && selectedCategory.strCategory) {
      dispatch(getMenu());
    }
  }, [dispatch, selectedCategory]
  )

  const handleClick = (categoryName) => {
    dispatch(setSelectedCategory({ strCategory: categoryName }));
    navigate('/menu');
  }

  return (
    <div className='CategoryItem' onClick={() => handleClick(strCategory)}>
      <img src={strCategoryThumb} alt={strCategory} />
      <p>{strCategory}</p>
    </div>
  )
}

export default CategoryItem
