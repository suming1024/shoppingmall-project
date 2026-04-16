import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Home from './layouts/Home';
import ProductsList from './products/ProductsList';
import ProductInfo from './products/ProductInfo';
import AddProduct from './products/AddProduct';
import SignIn from './users/SignIn';
import Dashboard from './users/Dashboard';
import SignUp from './users/SignUp'

const App = () => {

  //로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  //로그인한 ID 사용자 관리
  const [userId, setUserId] = useState<string | null>(null);
  
  //로그인한 사용자 권한 만들어서 상속하기
  const [userRole,setUserRole] = useState< string | null>(null);


  //로그인 상태 핸들러
  const handleLogin = (username: string, role: string) => {
    setIsLoggedIn(true);
    setUserId(username);
    setUserRole(role);
  }

  //로그아웃 상태 핸들러
  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setUserRole(null);
  }

  return (
    <BrowserRouter basename='/shoppingmall-project/'>
      <Header
        isLoggedIn = {isLoggedIn}
        userId = {userId}
        onLogout = {handleLogOut}
        userRole = {userRole}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductInfo />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/sign-in" element={<SignIn onLogin={handleLogin}/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;