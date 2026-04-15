import mainImg from '../assets/hero.png';

export default function Home() {
  return (
    <div className="page page-home">
      <div className="home-hero">
        <h1>홈</h1>
        <p>환영합니다! 쇼핑몰에 오신 것을 환영합니다.</p>
      </div>
      <section>
        <h3>최신 컴퓨터 기기와 액세서리를 만나보세요.</h3>
        <img src={mainImg} alt="메인 이미지" />
      </section>
      {/* <div className="home-features">
        <div className="feature-card">
          <h3>🛍️ 다양한 상품</h3>
          <p>최고의 상품들을 선택하여 준비했습니다.</p>
        </div>
        <div className="feature-card">
          <h3>💳 안전한 결제</h3>
          <p>안전하고 빠른 결제 시스템</p>
        </div>
        <div className="feature-card">
          <h3>🚚 빠른 배송</h3>
          <p>신속한 배송으로 빠르게 받아보세요.</p>
        </div>
      </div> */}
    </div>
  );
}   