import { NavLink, useNavigate } from 'react-router-dom';


interface HeaderProps{
  isLoggedIn: boolean;
  userId?: string| null;
  onLogout: () => void;
}

export default function Header({isLoggedIn, userId, onLogout}: HeaderProps) {

  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/products">상품목록</NavLink>
        <NavLink to="/add-product">상품추가</NavLink>
        {isLoggedIn ? (
          <div className="logout-wrapper">
            <span className="user-id">👤 {userId}</span>
            <button 
              onClick={()=>{
                onLogout();
                navigate('/');
              }}
              className="btn-logout"
            >
              로그아웃
            </button>
          </div>
          ) : (<NavLink to="/sign-in">로그인</NavLink>)}
      </nav>
    </header>
  );
}