import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../data/user.json'; // 사용자 데이터 임포트

//로그인 폼 데이터 정의
interface SignInFormData {
    username: string;
    password: string;
}

interface SignProps {
    onLogin : ( username: string ) => void;
}

export default function SignIn({onLogin}: SignProps) {

    const [fomData, setFormData] = useState<SignInFormData>({
        username: '',
        password: ''
    });

    //로그인 결과 상태
    const [loginResult, setLoginResult] = useState<string>('');

    const navigate = useNavigate();

    //입력값 상태 관리
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...fomData,
            [name]: value
        })
    }

    //폼 제출 처리
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { username, password } = fomData;

        if (!username || !password) {
            alert("모든 필드를 입력하세요.");
            return;
        }

        const user = users.find(
            u => u.username === username && u.password === password
        );

        if (!user) {
            setLoginResult('fail');
            // alert("로그인 실패: 사용자명 또는 비밀번호가 잘못되었습니다.");
            return;
        }

        onLogin(user.username) // 로그인 성공시 부모한테 알림

        if(user) {
            setLoginResult('success');
            console.log("로그인 성공:", user);
    
            navigate('/products');
        }
    };


    return (
        <div className="page page-sign-in">
            <div className="products-header">
                <h1>로그인</h1>
            </div>

            <div className="sign-in-container">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">사용자명</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={fomData.username}
                            onChange={handleChange}
                            placeholder="사용자명을 입력하세요"
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={fomData.password}
                            onChange={handleChange}
                            placeholder="비밀번호를 입력하세요"
                            required 
                        />
                    </div>

                    {/* <button onClick={handleSubmit} type="submit" className="btn-submit">로그인</button> */}
                    <button type="submit" className="btn-submit">로그인</button>
                </form>

                {loginResult === 'fail' && (
                    <div className="error-message">
                        <span className="error-icon">⚠️</span>
                        <p>로그인 실패! 다시 시도하세요.</p>
                    </div>
                )}
            </div>
        </div>
    );
}