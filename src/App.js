import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import DashBoard from './pages/Dashboard';
import { createContext, useEffect, useState } from 'react';
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp/SignUp';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { ProductUpload } from './pages/ProductUpload/ProductUpload';
import { Products } from './pages/Products/Products';
import { CategoryAdd } from './pages/CategoryAdd/CategoryAdd';


const MyContext = createContext();

function App() {
  const [isSidebarToggle, setIsSidebarToggle] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isHideHeaderandSidebar, setisHideHeaderandSidebar] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    }
    else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  })

  const value = {
    isSidebarToggle, setIsSidebarToggle, isLogin, setIsLogin, isHideHeaderandSidebar, setisHideHeaderandSidebar, themeMode, setThemeMode
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>

        {isHideHeaderandSidebar !== true &&
          <Header />}


        <div className='main d-flex'>
          {isHideHeaderandSidebar !== true &&
            <div className={`sideWrapper ${isSidebarToggle === true ? "toggleWrapper" : ""}`}>
              <Sidebar />
            </div>}


          <div className={`content ${isHideHeaderandSidebar === true ? "fullPage" : ""} ${isSidebarToggle === true === true ? "toggleWrapper" : ""}`}>
            <Routes>
              <Route path='/' element={<DashBoard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signUp' element={<SignUp />} />
              <Route path='/products' element={<Products />} />
              <Route path='/product/details' element={<ProductDetails />} />
              <Route path='/product/upload' element={<ProductUpload />} />
              <Route path='category/add' element={<CategoryAdd />} />
            </Routes>
          </div>

        </div>

      </MyContext.Provider>
    </BrowserRouter>
  );
}
export { MyContext }
export default App;
