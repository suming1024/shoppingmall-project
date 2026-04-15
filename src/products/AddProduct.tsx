import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// File(interface) 제공된 인터페이스
interface FormData {
    name: string;
    price: number;
    description: string;
    image: File | null;
}

export default function AddProduct() {

    const navigate = useNavigate();

    //폼 데이터 상태관리
    const [formData, setFormData] = useState<FormData>({
        name: '',
        price: 0,
        description: '',
        image: null
    });

    //입력값 변경
    const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    const target = e.target;

    const { name, value } = target;

    if (target instanceof HTMLInputElement && name === 'image' && target.files) {
        setFormData({
            ...formData,
            image: target.files[0]
        });
        return;
    }

    setFormData({
        ...formData,
        [name]: value
    });
};

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        //입력값 검증
        if(!formData.name || formData.price <= 0 || !formData.description || !formData.image) {
            alert('모든 필드를 올바르게 입력해주세요.');
            return;
        }

        console.log("입력데이터:",formData);

        alert('상품이 추가되었습니다!');
        navigate('/products'); //상품목록 페이지로 이동
    };

    

    return (
        <div className="page page-add-product">
            <div className="products-header">
                <h1>상품 추가</h1>
                <p>새로운 상품을 추가하세요</p>
            </div>

            <div className="add-product-container">
                <form className="add-product-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="product-name">상품명</label>
                        <input 
                            type="text" 
                            id="product-name" 
                            placeholder="상품명을 입력하세요" 
                            required
                            name='name'
                            value={formData.name}    
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="product-price">가격</label>
                        <div className="input-wrapper">
                            <span className="currency">₩</span>
                            <input 
                                type="number" 
                                id="product-price" 
                                placeholder="가격을 입력하세요" 
                                min="0"
                                required
                                step={1000}
                                name='price'
                                value={formData.price}    
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="product-description">상품 설명</label>
                        <textarea 
                            id="product-description" 
                            placeholder="상품 설명을 입력하세요"
                            rows={6}
                            required
                            name='description'
                            value={formData.description}    
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="product-image">이미지</label>
                        <input 
                            type="file" 
                            id="product-image" 
                            name='image'
                            accept="image/*"
                            onChange={handleInputChange}
                        /> 
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-submit">상품 추가</button>
                    </div>
                </form>
            </div>
        </div>
    );
}   