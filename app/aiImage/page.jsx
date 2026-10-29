'use client';

export default function AiImage() {
	const images = [
		{
			request: 5,
			imageId: 0,
			service: 1,
			status: 'R',
			thumb: '',
			loading: true,
			badge: '전단지형',
			text: '이미지 생성중...',
			hdTS: '',
			hdRgstDate: '',
			hdExprDate: '',
			hdLayout: '',
			hdImageUrl: 'http://tdc-api-dev-3.togethers.kr:2004/ImageAI',
			hdPath: '',
			hdSize: 0,
		},
		{
			request: 312,
			imageId: 275,
			service: 2,
			status: 'S',
			thumb: 'http://tdc-api-dev-3.togethers.kr:2004/ImageAI/20260928/1001_20260928_105757072_Thumb.jpg',
			badge: 'POP이미지',
			text: '보관기간 : 45일',
			hdTS: '500.0',
			hdRgstDate: '2026-09-28 10:52',
			hdExprDate: '2026-11-26 24:00',
			hdLayout: '안내/공지형 (가로형)',
			hdImageUrl: 'http://tdc-api-dev-3.togethers.kr:2004/ImageAI/20260928/1001_20260928_105757072.jpg',
			hdPath: '/20260928/1001_20260928_105757072.jpg',
			hdSize: 81981,
		},
		{
			request: 311,
			imageId: 274,
			service: 2,
			status: 'S',
			thumb: 'http://tdc-api-dev-3.togethers.kr:2004/ImageAI/20260928/1001_20260928_105731471_Thumb.jpg',
			badge: 'POP이미지',
			text: '보관기간 : 45일',
			hdTS: '500.0',
			hdRgstDate: '2026-09-28 10:52',
			hdExprDate: '2026-11-26 24:00',
			hdLayout: '안내/공지형 (가로형)',
			hdImageUrl: 'http://tdc-api-dev-3.togethers.kr:2004/ImageAI/20260928/1001_20260928_105731471.jpg',
			hdPath: '/20260928/1001_20260928_105731471.jpg',
			hdSize: 93627,
		},
	];

	return (
    <div className="wrap-layout">
      {/* 왼쪽 화면 */}
      <div className="side-contents-layout" style={{flex:1}}>
        <div className="p-6 small-scroll">
          <div>
            <div className="page-title-box">
              <div className="page-title">이미지 리스트</div>
              <form name="frmSearch" method="get" action="" className="page-function-group">
                <select id="selObject" name="imageType" className="form-select">
                  <option>-전체-</option>
                  <option>POP이미지</option>
                  <option>프라이스카드</option>									
                </select>
                <select id="selOrderBy" name="orderBy" className="form-select">
                  <option >최근등록순</option>
                  <option>오래된순</option>
                  <option>남은보관일순↓</option>
                  <option>남은보관일순↑</option>
                </select>
              </form>
            </div>
            {/* <!-- 리스트 --> */}
            <div id="imageList" className="itemlist maxviewsize">
              {images.map((image, idx) => (
                <div key={idx} className={`item${image.selected ? ' selected' : ''}`}>
                  { image.loading ? (
                    <div className="item-skeleton">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 8.12811L20.4668 8.69379C20.2864 9.10792 19.7136 9.10792 19.5331 8.69379L19.2866 8.12811C18.8471 7.11947 18.0555 6.31641 17.0677 5.87708L16.308 5.53922C15.8973 5.35653 15.8973 4.75881 16.308 4.57612L17.0252 4.25714C18.0384 3.80651 18.8442 2.97373 19.2761 1.93083L19.5293 1.31953C19.7058 0.893489 20.2942 0.893489 20.4706 1.31953L20.7238 1.93083C21.1558 2.97373 21.9616 3.80651 22.9748 4.25714L23.6919 4.57612C24.1027 4.75881 24.1027 5.35653 23.6919 5.53922L22.9323 5.87708C21.9445 6.31641 21.1529 7.11947 20.7134 8.12811ZM2.9918 3H14V5H4V19L14 9L20 15V11H22V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                      <div className="item-skeleton-text">{image.text}</div>
                    </div>
                  ):(
                    <div className="item__imgbox">
                      <img src={image.thumb} alt={image.text} />
                    </div>
                  )}
                  <div className="item__txtbox">
                    <span className="item__badge pop">{image.badge}</span>
                    <span className="item_txt">{image.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pagination">
            <div className="pagination__list maxviewsize">
              <button className="pagination__btn  disabled" data-dt-idx="1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>  
              </button>
              <button className="pagination__btn  disabled" data-dt-idx="0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
              </button>
              <button className="pagination__btn  active" data-dt-idx="1">1</button>
              <button className="pagination__btn " data-dt-idx="2">2</button>
              <button className="pagination__btn  disabled" data-dt-idx="3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
              </button>
              <button className="pagination__btn " data-dt-idx="2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 오른쪽 화면 --> */}
      <div className="main-contents-layout" style={{width:'750px'}}>
        <div className="preview-panel">
          <div className="preview-card">
            <div className="page-title-box">
              <div className="page-title">이미지 상세보기</div>
            </div>
            <div id="emptyPreview" className="hidden">
              <div className="aiimage-preview-imgbox" style={{width:'100%', background: '#fff', border: 'none'}}>
                이미지를 선택하면 상세정보가 표시됩니다.
              </div>
            </div>
            <div id="selectedPreview" className="">
              <div className="aiimage-preview-imgbox" style={{width:'100%', padding:'10px'}}>
                <img src="http://tdc-api-dev-3.togethers.kr:2004/ImageAI/20260928/1001_20260928_105705728.jpg" id="layerImg" className="max-w-full max-h-full" />
              </div>
              <div className="aiimage-btn-group">
                <button type="button" className="form-btn-primary">AI생성</button>
                <button type="button" className="form-btn">인쇄하기</button>
                <button type="button" className="form-btn">다운로드</button>					            		
              </div>
              <div className="aiimage-info-box flex flex-col">
                <div>
                  <div>이미지유형</div>
                  <div id="layerService">프라이스카드</div>
                </div>
                <div>
                  <div>생성일</div>
                  <div id="layerRgstDate">2026-09-28 12:13</div>
                </div>
                <div>
                  <div>보관기간</div>
                  <div id="layerExprDate">2026-10-28 12:13 까지</div>
                </div>
                <div>
                  <div>사용TS</div>
                  <div id="layerTS">500.0 TS</div>
                </div>
                <div>
                  <div>카테고리</div>
                  <div id="layerCategory">상품 홍보형</div>
                </div>
                <div>
                  <div>레이아웃</div>
                  <div id="layerLayout">세로형</div>
                </div>
              </div>
            </div>
            <div id="creatingPreview" className="">
              <div className="aiimage-preview-imgbox" style={{width:'100%', background: '#fff', border: 'none'}}>
                이미지 생성 중입니다... 잠시만 기다려주세요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
}