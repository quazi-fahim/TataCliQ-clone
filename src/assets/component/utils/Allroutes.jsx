import React from 'react'
import {Routes,Route }from "react-router-dom"
import Luxury from '../pages/Luxury'
import Cliqcare from '../pages/Cliqcare'
import Giftcard from '../pages/Giftcard'
import Trackorder from '../pages/Trackorder'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Cliqcash from '../pages/Cliqcash'
import Tatacliq from '../pages/Tatacliq'
import Pagenotfound from '../pages/Pagenotfound'
import Navbar from './Navbar'
import Privateroutes from './PrivateRoutes/Privateroutes'
import ProductDetails from '../pages/ProductDetails'
import Product from '../pages/Product'
import Cart from '../pages/Cart'


const Allroutes = () => {
  return (
  <div>
<Navbar/>
<Routes>
<Route path='/' element={<Tatacliq/>}/>
<Route path='/product' element={<Product/>}/>
<Route path="/products/:id" element={<ProductDetails/>} />
<Route path="/subbrand/:subBrandName" element={<ProductDetails/>} /> 

<Route path='/luxury' element={<Luxury/>}/>
<Route path='/cliqcare' element={<Cliqcare/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='signup' element={<Signup/>}/>
<Route path='*' element={<Pagenotfound/>}/>
<Route path="/cart" element={<Cart/>} />
<Route element={<Privateroutes/>}>
<Route path='/trackorder' element={<Trackorder/>}/>
<Route path='/giftcard' element={<Giftcard/>}/>
<Route path='/cliqcash' element={<Cliqcash/>}/>



</Route>
  </Routes>
  </div>
  )
}

export default Allroutes