'use client';
import { useState } from 'react';
import PopSideContentsLayout from '../components/PopSideContentsLayout';
import resolveImageSrc from "../lib/resolveImageSrc";


export default function AiRequestPop() {
  const [activeFilter, setActiveFilter] = useState('all');
  const promoSamples = [
    { title: '신선 마켓', highlights: ['가격강조', '상품강조'], img: './img/1001_20260807_162127100_Thumb.jpg', alt: '샘플 이미지 1' },
    { title: '신선 마켓', highlights: ['가격강조', '상품강조'], img: './img/1-1.png', alt: '샘플 이미지 1' },
    { title: '컬러 임펙트 스타일', highlights: ['가격강조', '상품강조'], img: './img/1001_20260804_101723096.jpg', alt: '샘플 이미지 2' },
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './img/1-3.png', alt: '샘플 이미지 3' },
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './img/1001_20260728_161629141.jpg', alt: '샘플 이미지 3' },
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './img/1001_20260807_162127100_Thumb.jpg', alt: '샘플 이미지 3' },
    { title: '고급 마켓', highlights: ['상품강조'], img: './img/1-4.png', alt: '샘플 이미지 4' },
    { title: '칠판 일러스트', highlights: ['가격강조'], img: './img/1-5.png', alt: '샘플 이미지 5' },
    { title: '고급 마켓 스타일', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './img/1-6.jpg', alt: '샘플 이미지 6' },
    { title: '고급 마켓 스타일', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './img/1001_20260804_101723096.jpg', alt: '샘플 이미지 6' },
    { title: '고급 마켓 스타일', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './img/고급마켓.png', alt: '샘플 이미지 6' },
    { title: '팝아트 일러스트', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './img/1-7.png', alt: '샘플 이미지 7' }
  ];
  const noticeSamples = [
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './img/안내공지_팝아트.png', alt: '샘플 이미지 7' },
    { title: '신선 마켓', highlights: ['가격강조', '상품강조'], img: './img/2-1.png', alt: '샘플 이미지 1' },
    { title: '컬러 임펙트 스타일', highlights: ['가격강조', '상품강조'], img: './img/2-2.png', alt: '샘플 이미지 2' },
    { title: '컬러 임펙트 스타일', highlights: ['가격강조', '상품강조'], img: './img/2-2.png', alt: '샘플 이미지 2' },
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './img/2-3.png', alt: '샘플 이미지 3' },
    { title: '팝아트 일러스트', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './img/2-6.png', alt: '샘플 이미지 6' },
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './img/안내공지_팝아트.png', alt: '샘플 이미지 7' },
    { title: '고급 마켓', highlights: ['상품강조'], img: './img/2-4.png', alt: '샘플 이미지 4' },
    { title: '칠판 일러스트', highlights: ['가격강조'], img: './img/2-5.png', alt: '샘플 이미지 5' },
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './img/안내공지_팝아트.png', alt: '샘플 이미지 7' },
    { title: '칠판 일러스트', highlights: ['가격강조'], img: './img/2-5.png', alt: '샘플 이미지 5' },
  ];
  const mixedSamples = [];
  for (let index = 0; index < Math.max(promoSamples.length, noticeSamples.length); index += 1) {
    if (promoSamples[index]) mixedSamples.push({ ...promoSamples[index], id: `promo-${index}` });
    if (noticeSamples[index]) mixedSamples.push({ ...noticeSamples[index], id: `notice-${index}` });
  }
  const visibleSamples = activeFilter === 'all'
    ? mixedSamples
    : (activeFilter === 'promo' ? promoSamples : noticeSamples).map((sample, index) => ({
      ...sample,
      id: `${activeFilter}-${index}`
    }));
  const sampleListTitle = activeFilter === 'all'
    ? '전체 템플릿'
    : activeFilter === 'promo' ? '상품홍보형 템플릿' : '안내/공지형 템플릿';

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
                <button type="button" className={activeFilter === 'all' ? 'selected' : ''} aria-pressed={activeFilter === 'all'} onClick={() => setActiveFilter('all')}>전체</button>
                <button type="button" className={activeFilter === 'promo' ? 'selected' : ''} aria-pressed={activeFilter === 'promo'} onClick={() => setActiveFilter('promo')}>상품홍보형</button>
                <button type="button" className={activeFilter === 'notice' ? 'selected' : ''} aria-pressed={activeFilter === 'notice'} onClick={() => setActiveFilter('notice')}>안내공지형</button>
              </div>
            </div>
            <div className="sample-body">
              <div className="sample-list-tit">{sampleListTitle}</div>
              <div className="sample-list-wrapper" aria-label={`${sampleListTitle} 샘플`}>
                <div className="sample-list">
                  {visibleSamples.map((sample) => (
                    <div className="item" key={sample.id}>
                      <div className="item-description">{sample.title}</div>
                      {/* 강조포인트 옵션에 따라 화면에 표시 */}
                      <div className="highlight-options">
                        {sample.highlights.map((highlight) => (
                          <div className="highlight" key={highlight}>{highlight}</div>
                        ))}
                      </div>
                      <div className="content">
                        <img src={resolveImageSrc(sample.img)} alt={sample.alt} loading="lazy" />
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
