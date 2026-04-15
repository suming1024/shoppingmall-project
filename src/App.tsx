import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Home from './layouts/Home';
import ProductsList from './products/ProductsList';
import ProductInfo from './products/ProductInfo';
import AddProduct from './products/AddProduct';
import SignIn from './users/SignIn';

const App = () => {

  //로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  //로그인한 ID 사용자 관리
  const [userId, setUserId] = useState<string | null>(null);

  //로그인 상태 핸들러
  const handleLogin = (username: string) => {
    setIsLoggedIn(true);
    setUserId(username);
  }

  //로그아웃 상태 핸들러
  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUserId(null);
  }

  return (
    <BrowserRouter>
      <Header
        isLoggedIn = {isLoggedIn}
        userId = {userId}
        onLogout = {handleLogOut}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductInfo />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/sign-in" element={<SignIn onLogin={handleLogin}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;