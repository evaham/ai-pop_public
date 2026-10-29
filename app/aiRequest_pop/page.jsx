'use client';
import PopSideContentsLayout from '../components/PopSideContentsLayout';
import resolveImageSrc from "../lib/resolveImageSrc";


export default function AiRequestPop() {
  const promoSamples = [
    { title: '신선 마켓', highlights: ['가격강조', '상품강조'], img: './img/1-1.png', alt: '샘플 이미지 1' },
    { title: '컬러 임펙트 스타일', highlights: ['가격강조', '상품강조'], img: './img/1-2.png', alt: '샘플 이미지 2' },
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './img/1-3.png', alt: '샘플 이미지 3' },
    { title: '고급 마켓', highlights: ['상품강조'], img: './img/1-4.png', alt: '샘플 이미지 4' },
    { title: '칠판 일러스트', highlights: ['가격강조'], img: './img/1-5.png', alt: '샘플 이미지 5' },
    { title: '고급 마켓 스타일', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './img/1-6.jpg', alt: '샘플 이미지 6' },
    { title: '팝아트 일러스트', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './img/1-7.png', alt: '샘플 이미지 7' }
  ];
  const noticeSamples = [
    { title: '신선 마켓', highlights: ['가격강조', '상품강조'], img: './img/2-1.png', alt: '샘플 이미지 1' },
    { title: '컬러 임펙트 스타일', highlights: ['가격강조', '상품강조'], img: './img/2-2.png', alt: '샘플 이미지 2' },
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './img/2-3.png', alt: '샘플 이미지 3' },
    { title: '고급 마켓', highlights: ['상품강조'], img: './img/2-4.png', alt: '샘플 이미지 4' },
    { title: '칠판 일러스트', highlights: ['가격강조'], img: './img/2-5.png', alt: '샘플 이미지 5' },
    { title: '팝아트 일러스트', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './img/2-6.png', alt: '샘플 이미지 6' }
  ];
  return (
      <div className="wrap-layout">
        {/* <!-- 왼쪽 화면 --> */}
        <PopSideContentsLayout/>
        <div className="main-contents-layout">
          <div className="sample-contents mx-auto" style={{width: '924px'}}>
            <div className="sample-header">
              <p className="sample-title">디자인 샘플보기</p>
              <p className="sample-subtitle">마음에 드는 디자인을 선택하시면 옵션 선택에 반영됩니다.</p>
              <div className="sample-filter">
                <button className="selected">전체</button>
                <button>상품홍보형</button>
                <button>안내공지형</button>
              </div>
            </div>
            <div className="sample-body">
              <div className="sample-list-tit">상품홍보형 템플릿</div>
              <div className="sample-list-wrapper" aria-label="상품홍보형 샘플">
                <div className="sample-list">
                  {promoSamples.map((s, idx) => (
                    <div className="item" key={idx}>
                      <div className="item-description">{s.title}</div>
                      {/* 강조포인트 옵션에 따라 화면에 표시 */}
                      <div className="highlight-options">
                        {s.highlights.map((h) => (
                          <div className="highlight" key={h}>{h}</div>
                        ))}
                      </div>
                      <div className="content">
                        <img src={resolveImageSrc(s.img)} alt={s.alt} loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <!-- 안내공지형 샘플 --> */}
              <div className="sample-list-tit">안내/공지형 템플릿</div>
              <div className="sample-list-wrapper" aria-label="안내공지형 샘플">
                <div className="sample-list">
                  {noticeSamples.map((s, idx) => (
                    <div className="item" key={idx}>
                      <div className="item-description">{s.title}</div>
                      {/* 강조포인트 옵션에 따라 화면에 표시 */}
                      <div className="highlight-options">
                        {s.highlights.map((h) => (
                          <div className="highlight" key={h}>{h}</div>
                        ))}
                      </div>
                      <div className="content">
                        <img src={resolveImageSrc(s.img)} alt={s.alt} loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}


