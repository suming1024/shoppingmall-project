import products from "../data/products.json"
import mouse from '../assets/mouse.png';
import keyboard from '../assets/keyboard.png';
import monitor from '../assets/monitor.png';
import usb from '../assets/usb.png';    
import { Link } from "react-router-dom";

//이미지 파일을 가져올 매핑
export const imgesMap: Record<string, string> = {
    'mouse.png' : mouse,
    'keyboard.png' : keyboard,
    'monitor.png' : monitor,
    'usb.png' : usb
}

export default function ProductsList() { 



    return (        
    <div className="page page-products">
        <div className="products-header">
            <h1>상품 리스트</h1>
            <p>최신 상품들을 만나보세요</p>
        </div>
        <div className="products-grid">
            {products.map((product: any) => (
                <div key={product.id} className="product-card">
                    <div className="product-image">
                        <img src={imgesMap[product.img]} alt={product.name} />
                    </div>
                    <div className="product-info">
                        <h2>{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">${product.price}</p>
                        <Link to={`/products/${product.id}`}>
                            <button className="product-button">상세페이지</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}