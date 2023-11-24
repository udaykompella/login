import './App.css';
import './index.css';
// import {Router,Route,Routes}
import Login from './Components/Login';
import Products from './Components/Products';
import Productsdetails from './Components/Productsdetails';
import { Route,  Routes,  } from 'react-router-dom';

function App() {
  // const router = createBrowserRouter(createRoutesFromElements(
  //   <Route path='/' element={<Login />}>
  //     <Route path='/Products' element={<Products />} />
  //     {/* <Route path='/cart' element={<Cart />} /> */}
  //   </Route>
  // ))
  return (
    <>
      {/* <Login /> */}
      {/* <Products /> */}
      {/* <Productsdetails /> */}
      {/* <RouterProvider router={router} /> */}
      <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/products'  element={<Products/>}/>
         
        </Routes>
    </>

  )
}

export default App;
