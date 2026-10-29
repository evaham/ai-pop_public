'use client';

export default function AiStatics() {
  return (
    <div className="wrap-layout">
					{/* <!-- 큰 화면 --> */}
      <div className="full-contents-layout">
        <div>
          <div>
            <form name="frmSearch" method="get" action="">
              <div className="search-content">
                <div className="search-opt">
                  <span className="search__text text-sm text-gray-700">생성일</span>
                  <input name="startDate" id="startDate" className="datepicker form-input hasDatepicker" value="2026-09-12" readOnly="readOnly" style={{width:"100px"}} />
                  <span className="text-sm text-gray-600">~</span>
                  <input name="endDate" id="endDate" className="datepicker form-input hasDatepicker" value="2026-10-12" readOnly="readOnly" style={{width:"100px"}} />
                  <button type="button" className="form-btn" >1개월</button>
                  <button type="button" className="form-btn" >3개월</button>
                  <button type="button" className="form-btn" >6개월</button>
                  <select className="form-select" name="searchType" id="searchType">
                      <option value="A">-생성결과-</option>
                      <option value="S">생성완료</option>
                      <option value="F">생성실패</option>
                  </select>
                  <div className="flex gap-2 ml-10">
                    <button type="button" className="form-btn-primary" >검색</button>
                    {/* <!-- <button type="button" className="search-btn" onclick="jsReset()">초기화</button> --> */}
                  </div>
                </div>
                <div className="search-result">
                  <span className="search-text">누적 생성건수 : </span>
                  <span className="search-text font-bold">12건</span>
                  <span className="text-xs text-gray-300 mx-2">|</span>
                  <span className="search-text">총 결제TS머니 : </span>
                  <span className="search-text font-bold">4,500.0</span>
                  <span className="text-xs text-gray-300 mx-2">|</span>
                  <span className="search-text">총 결제TS포인트 : </span>
                  <span className="search-text font-bold">0.0</span>
                  <div className="ml-auto flex items-center gap-2">
                    <select className="form-select" name="orderBy">
                      <option value="rgstASC">이미지생성일↑</option>
                        <option value="rgstDESC" >이미지생성일↓</option>
                    </select>
                    <button type="button" className="form-btn-primary">엑셀다운로드</button>
                  </div>
                </div>
              </div>
            </form>
            {/* <!-- 리스트 영역 --> */}
            <div className="scrollwrap">
              <div className="statics-itemlist maxviewsize">
                <div className="statics-tbl-wrap">
                  <table className="statics-tbl hover">
                    <colgroup>
                      <col style={{width:"30px"}} />
                      <col style={{width:"120px"}} />
                      <col style={{width:"120px"}} />
                      <col style={{width:"80px"}} />
                      <col style={{width:"auto"}} />
                      <col style={{width:"80px"}} />
                      <col style={{width:"80px"}} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>이미지생성일</th>
                        <th>이미지 유형</th>
                        <th>생성결과</th>
                        <th>실패사유</th>
                        <th>결제TS머니</th>
                        <th>결제TS포인트</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="default">
                        <th>1</th>
                        <td><span className="text-gray-600">2026-09-28 10:52</span></td>
                        <td>POP이미지</td>
                        <td className="text-center"><span>생성완료</span></td>
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                        <td className="text-right"><span>500.0</span></td>
                        <td className="text-right"><span className="text-gray-400">0.0</span></td>
                      </tr>
                    
                      <tr className="default">
                        <th>2</th>
                        <td><span className="text-gray-600">2026-09-28 10:52</span></td>
                        <td>POP이미지</td>
                        <td className="text-center"><span>생성완료</span></td>
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                        <td className="text-right"><span>500.0</span></td>
                        <td className="text-right"><span className="text-gray-400">0.0</span></td>
                      </tr>
                      <tr className="default">
                        <th>3</th>
                        <td><span className="text-gray-600">2026-09-28 10:51</span></td>
                        <td>POP이미지</td>
                        <td className="text-center"><span>생성완료</span></td>
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                        <td className="text-right"><span>500.0</span></td>
                        <td className="text-right"><span className="text-gray-400">0.0</span></td>
                      </tr>
                    
                      <tr className="default">
                        <th>4</th>
                        <td><span className="text-gray-600">2026-09-22 09:51</span></td>
                        <td>
                          
                            
                              POP이미지
                            
                            
                            
                          
                        </td>
                        <td className="text-center">
                          
                            <span>생성완료</span>
                            
                            
                            
                            
                          
                        </td>
                    
                      
                      
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                      
                    
                        <td className="text-right">
                          
                            
                            
                            
                            
                              <span>500.0</span>
                            
                          
                        </td>
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                      </tr>
                    
                      <tr className="default">
                        <th>5</th>
                        <td><span className="text-gray-600">2026-09-22 09:50</span></td>
                        <td>
                          
                            
                              POP이미지
                            
                            
                            
                          
                        </td>
                        <td className="text-center">
                          
                            <span>생성완료</span>
                            
                            
                            
                            
                          
                        </td>
                    
                      
                      
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                      
                    
                        <td className="text-right">
                          
                            
                            
                            
                            
                              <span>500.0</span>
                            
                          
                        </td>
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                      </tr>
                    
                      <tr className="default">
                        <th>6</th>
                        <td><span className="text-gray-600">2026-09-22 09:49</span></td>
                        <td>
                          
                            
                              POP이미지
                            
                            
                            
                          
                        </td>
                        <td className="text-center">
                          
                            <span>생성완료</span>
                            
                            
                            
                            
                          
                        </td>
                    
                      
                      
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                      
                    
                        <td className="text-right">
                          
                            
                            
                            
                            
                              <span>500.0</span>
                            
                          
                        </td>
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                      </tr>
                    
                      <tr className="default">
                        <th>7</th>
                        <td><span className="text-gray-600">2026-09-22 09:48</span></td>
                        <td>
                          
                            
                              POP이미지
                            
                            
                            
                          
                        </td>
                        <td className="text-center">
                          
                            <span>생성완료</span>
                            
                            
                            
                            
                          
                        </td>
                    
                      
                      
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                      
                    
                        <td className="text-right">
                          
                            
                            
                            
                            
                              <span>500.0</span>
                            
                          
                        </td>
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                      </tr>
                    
                      <tr className="default">
                        <th>8</th>
                        <td><span className="text-gray-600">2026-09-22 09:47</span></td>
                        <td>
                          
                            
                              POP이미지
                            
                            
                            
                          
                        </td>
                        <td className="text-center">
                          
                            <span>생성완료</span>
                            
                            
                            
                            
                          
                        </td>
                    
                      
                      
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                      
                    
                        <td className="text-right">
                          
                            
                            
                            
                            
                              <span>500.0</span>
                            
                          
                        </td>
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                      </tr>
                    
                      <tr className="default">
                        <th>9</th>
                        <td><span className="text-gray-600">2026-09-22 09:44</span></td>
                        <td>
                          
                            
                              POP이미지
                            
                            
                            
                          
                        </td>
                        <td className="text-center">
                          
                            <span>생성완료</span>
                            
                            
                            
                            
                          
                        </td>
                    
                      
                      
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                      
                    
                        <td className="text-right">
                          
                            
                            
                            
                            
                              <span>500.0</span>
                            
                          
                        </td>
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                      </tr>
                    
                      <tr className="default">
                        <th>10</th>
                        <td><span className="text-gray-600">2026-09-18 11:19</span></td>
                        <td>
                          
                            
                            
                              프라이스카드
                            
                            
                          
                        </td>
                        <td className="text-center">
                          
                            <span>생성완료</span>
                            
                            
                            
                            
                          
                        </td>
                    
                      
                      
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                      
                    
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                      </tr>
                    
                      <tr className="default">
                        <th>11</th>
                        <td><span className="text-gray-600">2026-09-18 10:52</span></td>
                        <td>
                          
                            
                            
                              프라이스카드
                            
                            
                          
                        </td>
                        <td className="text-center">
                          
                            <span>생성완료</span>
                            
                            
                            
                            
                          
                        </td>
                    
                      
                      
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                      
                    
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                      </tr>
                    
                      <tr className="default">
                        <th>12</th>
                        <td><span className="text-gray-600">2026-09-18 10:49</span></td>
                        <td>
                          
                            
                            
                              프라이스카드
                            
                            
                          
                        </td>
                        <td className="text-center">
                          
                            <span>생성완료</span>
                            
                            
                            
                            
                          
                        </td>
                    
                      
                      
                        <td className="text-center"><span className="text-gray-400">-</span></td>
                      
                    
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                        <td className="text-right">
                          
                            
                              <span className="text-gray-400">0.0</span>
                            
                            
                            
                            
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
              <button className="pagination__btn  disabled" data-dt-idx="2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
              </button>
              <button className="pagination__btn  disabled" data-dt-idx="1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}