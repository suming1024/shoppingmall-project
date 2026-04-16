import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//회원 폼 타입 정의
interface SignUpFormData{
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
}


export default function SignUp(){

    const [formData, setFormData] = useState<SignUpFormData>({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    })

    const navigate = useNavigate();

    //입력값 변경 핸들러 함수
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    //폼 제출 함수
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //입력된 값 추출
        const {username, password, confirmPassword, email} = formData;

        //유효성 검사
        if(!username || !password || !confirmPassword || !email){
            alert("모든 필드를 입력해주세요.")
            return;
        }

        //비밀번호 불일치 할떄
        if(password !== confirmPassword){
            alert("비밀번호가 일치하지 않습니다.")
            return;
        }
        console.log('회원가입시도',formData);
        alert("회원가입이 완료되었습니다.");
        navigate('/sign-in');
    }

    return(
        <div className="page page-sign-up">
            <div className="products-header">
                <h1>회원가입</h1>
            </div>
            <div className="sign-up-container">
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">아이디</label>
                        <input 
                            type="text" 
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="아이디를 입력해주세요"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">비밀번호 확인</label>
                        <input 
                            type="password" 
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="비밀번호를 다시 입력하세요"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-submit">회원가입</button>
                </form>
            </div>
        </div>
    )
}