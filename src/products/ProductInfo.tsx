// import type { imgesMap } from './ProductsList';
import { useParams } from 'react-router-dom';
import products from "../data/products.json"
import { imgesMap } from './ProductsList';

export default function ProductInfo() {

    const {id}  = useParams();

    const product = products.find(( product: any) => product.id === Number(id));
    

    return (
        <div className="page page-product-info">
            <div className="product-detail-container">
                <div className="product-detail-image">
                    <img src={imgesMap[product.img]} alt={product.name} />
                </div>
                <div className="product-detail-content">
                    <h1>{product.name}</h1>
                    <div className="product-detail-divider"></div>
                    <p className="product-detail-description">{product.description}</p>
                    <div className="product-detail-info">
                        <div className="price-section">
                            <span className="price-label">판매가</span>
                            <p className="product-detail-price">${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}