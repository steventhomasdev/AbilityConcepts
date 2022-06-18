import React from 'react'
import Cart from './cart/Cart'

export default function MycartPage({isLogin, setCartCount}) {
  return (
    <div>
        <Cart isLogin={isLogin} setCartCount={setCartCount}/>
    </div>
  )
}
