import React, { useEffect } from 'react'
import {} from '@mui/material'
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'

function Header() {
  useEffect(() => {
    const toggleMenu = document.querySelector(".toggleMenu")
    toggleMenu.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active")
    })
  }, [])
  return (
    <header>
      <img src="" alt="" className='logo' />
      <div className="inputBox">
        <SearchRounded className='searchIcon' />
        <input type="text" placeholder='Buscar...' />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className='cart' />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>

      <div className="porfileContainer">
        <div className="imgBox">
          <img src="" alt="" className='profilePic' />
        </div>
        <h2 className='userName'>Katzune Starky</h2>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  )
}

export default Header