import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const active = useSelector(store => store.activeStore.active);
  const dispatch = useDispatch();

  return (
    <>
      <div className="md:grid grid-cols-5 bg-gradient-to-r from-slate-600 to-purple-600 md:h-12 text-white font-[poppins]">
        <h1 className='text-center pt-2 font-[cursive] text-xl'>Our Recipes</h1>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <Link to="/" className={`hover:text-yellow-200 duration-200 ${active === "home" ? "text-red-600" : ""}`} onClick={() => dispatch({ type: 'home' })}>Home</Link>
          <Link to="/recipes" className={`hover:text-yellow-200 duration-200 ${active === "recipe" ? "text-red-600" : ""}`} onClick={() => dispatch({ type: 'recipe' })}>Recipes</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
