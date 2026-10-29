'use client';

import { useState } from "react";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import FormTextarea from "../components/FormTextarea";
import "./uistyle.css";

export default function UiView() {

    return (
      <div className="wrap-layout">
        <div className="main-contents-layout">
          <div className="ml-4 mt-4 text-lg font-bold">UI 스타일 가이드</div>
          <div className="ml-4 mt-4 text-lg font-bold">01. 디자인토큰</div>
          <div className="sg-grid">
            {/* 컬러 카드 시작 */}
            <div className="sg-card">
              <div className="sg-card-title">
                <span>컬러 (Color)</span>
                <button type="button" className="sg-link">CSS 코드 보기 ↗</button>
              </div>
              <div className="sg-card-body">
                <p className="sg-card-des">실제 :root 변수 기준 · 색상 클릭 시 HEX 복사</p>
                <div className="text-base mb-2">Primary Palette · <code>--primary-50 ~ 900</code></div>
                <div className="sg-token-row">
                  <button className="sg-color-token" type="button">
                    <span className="sg-chip" style={{background:"#F2F5FB"}}></span><strong>50</strong><small>#F2F5FB</small>
                  </button>
                  <button className="sg-color-token" type="button">
                    <span className="sg-chip" style={{background:"#E3EAF7"}}></span><strong>100</strong><small>#E3EAF7</small>
                  </button>
                  <button className="sg-color-token" type="button">
                    <span className="sg-chip" style={{background:"#C5D2EC"}}></span><strong>200</strong><small>#C5D2EC</small>
                  </button>
                  <button className="sg-color-token" type="button">
                    <span className="sg-chip" style={{background:"#9DB2DD"}}></span><strong>300</strong><small>#9DB2DD</small>
                  </button>
                  <button className="sg-color-token" type="button">
                    <span className="sg-chip" style={{background:"#6687C5"}}></span><strong>400</strong><small>#6687C5</small>
                  </button>
                  <button className="sg-color-token" type="button">
                    <span className="sg-chip" style={{background:"#26499D"}}></span><strong>500</strong><small>#26499D</small>
                  </button>
                  <button className="sg-color-token" type="button">
                    <span className="sg-chip" style={{background:"#203F89"}}></span><strong>600</strong><small>#203F89</small>
                  </button>
                  <button className="sg-color-token" type="button">
                    <span className="sg-chip" style={{background:"#1B3574"}}></span><strong>700</strong><small>#1B3574</small>
                  </button>
                  <button className="sg-color-token" type="button">
                    <span className="sg-chip" style={{background:"#172D60"}}></span><strong>800</strong><small>#172D60</small>
                  </button>
                  <button className="sg-color-token" type="button">
                    <span className="sg-chip" style={{background:"#12234B"}}></span><strong>900</strong><small>#12234B</small>
                  </button>
                </div>
              </div>
              <hr className="sg-divider" />
              <div className="text-base mb-2">Common Tokens</div>
              <div className="sg-token-mini">
                <div>
                  <span className="sg-dot" style={{background:"#E1E6EE",border:"1px solid #E8EBF1"}}></span>Border #E1E6EE
                </div>
                <div>
                  <span className="sg-dot" style={{background:"#1F2937",border:"1px solid #E8EBF1"}}></span>Text 01 #1F2937
                </div>
                <div>
                  <span className="sg-dot" style={{background:"#718096",border:"1px solid #E8EBF1"}}></span>Text 02 #718096
                </div>
                <div>
                  <span className="sg-dot" style={{background:"#26499D",border:"1px solid #E8EBF1"}}></span>Selected #26499D
                </div>
              </div>
              <div className="sg-component-notes">
                <span>기준 컬러 <code>--primary-500</code></span><span>Hover<code>--primary-600</code></span></div>
            </div>
            {/* 컬러 카드 끝 */}
            <div className="sg-card" id="sg-typography">
              <div className="sg-card-title">
                <h3>타이포그래피 (Typography)</h3><button type="button" className="sg-smalllink" data-action="code"
                  data-title="타이포그래피 (Typography) CSS" data-code="type">CSS 코드 보기 ↗</button>
              </div>
              <p className="sg-card-des">Pretendard · 기본 글자 굵기 500</p>
              <div className="sg-font-hero">
                <strong>Pretendard</strong><small>가나다라마바사<br />ABCDEFGHIJKLMN<br />0123456789</small></div>
              <table className="sg-type-table">
                <thead>
                  <tr>
                    <th>스타일</th>
                    <th>크기</th>
                    <th>굵기</th>
                    <th>예시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Heading 1</td>
                    <td>24px</td>
                    <td>700</td>
                    <td className="sg-text-example" style={{fontSize:"24px",fontWeight:"700"}}>UI 스타일 가이드</td>
                  </tr>
                  <tr>
                    <td>Heading 2</td>
                    <td>20px</td>
                    <td>700</td>
                    <td className="sg-text-example" style={{fontSize:"20px",fontWeight:"700"}}>섹션 제목</td>
                  </tr>
                  <tr>
                    <td>Heading 3</td>
                    <td>18px</td>
                    <td>700</td>
                    <td className="sg-text-example" style={{fontSize:"18px",fontWeight:"700"}}>카드 제목</td>
                  </tr>
                  <tr>
                    <td>Body</td>
                    <td>14px</td>
                    <td>500</td>
                    <td className="sg-text-example" style={{fontSize:"14px",fontWeight:"500"}}>기본 본문 텍스트</td>
                  </tr>
                  <tr>
                    <td>Caption</td>
                    <td>12px</td>
                    <td>400</td>
                    <td className="sg-text-example" style={{fontSize:"12px",fontWeight:"400"}}>추가 안내 문구</td>
                  </tr>
                </tbody>
              </table>
              <div className="sg-component-notes"><span>타이포 등급은 <b>권장 구성 예시</b></span><span className="sg-proposed">제안</span>
              </div>
            </div>
            <div className="sg-aside-stack">
              <div className="sg-card sg-mini-card" id="sg-spacing">
                <div className="sg-card-title">
                  <h3>간격 (Spacing)</h3>
                </div>
                <p className="sg-card-des">4px 단위 권장 예시</p>
                <div className="sg-bars">
                  <div className="sg-bar-item"><span style={{height:"4px"}}></span>4</div>
                  <div className="sg-bar-item"><span style={{height:"10px"}}></span>8</div>
                  <div className="sg-bar-item"><span style={{height:"16px"}}></span>12</div>
                  <div className="sg-bar-item"><span style={{height:"22px"}}></span>16</div>
                  <div className="sg-bar-item"><span style={{height:"28px"}}></span>24</div>
                  <div className="sg-bar-item"><span style={{height:"34px"}}></span>32</div>
                  <div className="sg-bar-item"><span style={{height:"40px"}}></span>40</div>
                  <div className="sg-bar-item"><span style={{height:"46px"}}></span>48</div>
                </div>
              </div>
              <div className="sg-card sg-mini-card" id="sg-radius">
                <div className="sg-card-title">
                  <h3>테두리 & 둥글기</h3>
                </div>
                <p className="sg-card-des">현재 CSS는 rounded, rounded-xl 등을 활용</p>
                <div className="sg-radius-row">
                  <div className="sg-radius"><span style={{borderRadius:"2px"}}></span>2px</div>
                  <div className="sg-radius"><span style={{borderRadius:"4px"}}></span>4px</div>
                  <div className="sg-radius"><span style={{borderRadius:"8px"}}></span>8px</div>
                  <div className="sg-radius"><span style={{borderRadius:"12px"}}></span>12px</div>
                  <div className="sg-radius"><span style={{borderRadius:"16px"}}></span>16px</div>
                </div>
              </div>
              <div className="sg-card sg-mini-card" id="sg-shadow">
                <div className="sg-card-title">
                  <h3>그림자 (Shadow)</h3>
                </div>
                <p className="sg-card-des">팝업, 카드 등 레이어에 사용</p>
                <div className="sg-shadow-list">
                  <div className="sg-shadow-item">
                    <div className="sg-shadow-box" style={{boxShadow:"none"}}></div>None
                  </div>
                  <div className="sg-shadow-item">
                    <div className="sg-shadow-box" style={{boxShadow:"0 1px 3px #00000012"}}></div>S
                  </div>
                  <div className="sg-shadow-item">
                    <div className="sg-shadow-box" style={{boxShadow:"0 3px 9px #00000018"}}></div>M
                  </div>
                  <div className="sg-shadow-item">
                    <div className="sg-shadow-box" style={{boxShadow:"0 7px 18px #0000001F"}}></div>L
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="ml-4 mt-4 text-lg font-bold">02. 컴포넌트</div>
          <div className="sg-grid">
            <div className="sg-card">
              <div className="sg-card-header">
                <div className="sg-card-title">버튼(Buttons)</div>
              </div>
              <div className="sg-card-body">
                <p className="sg-card-des">기존 .form-btn* 계열 · Default, Hover, Active, Selected, Disabled</p>
                <table className="sg-button-matrix">
                  <thead>
                    <tr>
                      <th style={{textAlign:"left"}}>유형</th>
                      <th>Default</th>
                      <th>Hover</th>
                      <th>Active</th>
                      <th>Selected</th>
                      <th>Disabled</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>기본</td>
                      <td><button type="button" className="form-btn " data-action="notify"
                          data-message="기본 Default">기본</button></td>
                      <td><button type="button" className="form-btn hovered" data-action="notify"
                          data-message="기본 Hover">기본</button></td>
                      <td><button type="button" className="form-btn active" data-action="notify"
                          data-message="기본 Active">기본</button></td>
                      <td><button type="button" className="form-btn selected" data-action="notify"
                          data-message="기본 Selected">기본</button></td>
                      <td><button type="button" className="form-btn disabled" disabled data-action="notify"
                          data-message="기본 Disabled">기본</button></td>
                    </tr>
                    <tr>
                      <td>Primary</td>
                      <td><button type="button" className="form-btn-primary " data-action="notify"
                          data-message="Primary Default">확인</button></td>
                      <td><button type="button" className="form-btn-primary hovered" data-action="notify"
                          data-message="Primary Hover">확인</button></td>
                      <td><button type="button" className="form-btn-primary active" data-action="notify"
                          data-message="Primary Active">확인</button></td>
                      <td><button type="button" className="form-btn-primary selected" data-action="notify"
                          data-message="Primary Selected">확인</button></td>
                      <td><button type="button" className="form-btn-primary disabled" disabled data-action="notify"
                          data-message="Primary Disabled">확인</button></td>
                    </tr>
                    <tr>
                      <td>Secondary</td>
                      <td><button type="button" className="form-btn-secondary " data-action="notify"
                          data-message="Secondary Default">취소</button></td>
                      <td><button type="button" className="form-btn-secondary hovered" data-action="notify"
                          data-message="Secondary Hover">취소</button></td>
                      <td><button type="button" className="form-btn-secondary active" data-action="notify"
                          data-message="Secondary Active">취소</button></td>
                      <td><button type="button" className="form-btn-secondary selected" data-action="notify"
                          data-message="Secondary Selected">취소</button></td>
                      <td><button type="button" className="form-btn-secondary disabled" disabled data-action="notify"
                          data-message="Secondary Disabled">취소</button></td>
                    </tr>
                    <tr>
                      <td>Tertiary</td>
                      <td><button type="button" className="form-btn-tertiary " data-action="notify"
                          data-message="Tertiary Default">더보기</button></td>
                      <td><button type="button" className="form-btn-tertiary hovered" data-action="notify"
                          data-message="Tertiary Hover">더보기</button></td>
                      <td><button type="button" className="form-btn-tertiary active" data-action="notify"
                          data-message="Tertiary Active">더보기</button></td>
                      <td><button type="button" className="form-btn-tertiary selected" data-action="notify"
                          data-message="Tertiary Selected">더보기</button></td>
                      <td><button type="button" className="form-btn-tertiary disabled" disabled data-action="notify"
                          data-message="Tertiary Disabled">더보기</button></td>
                    </tr>
                    <tr>
                      <td>line</td>
                      <td><button type="button" className="form-btn-line" data-action="notify"
                          data-message="Tertiary Default">더보기</button></td>
                      <td><button type="button" className="form-btn-line hovered" data-action="notify"
                          data-message="Tertiary Hover">더보기</button></td>
                      <td><button type="button" className="form-btn-line active" data-action="notify"
                          data-message="Tertiary Active">더보기</button></td>
                      <td><button type="button" className="form-btn-line selected" data-action="notify"
                          data-message="Tertiary Selected">더보기</button></td>
                      <td><button type="button" className="form-btn-line disabled" disabled data-action="notify"
                          data-message="Tertiary Disabled">더보기</button></td>
                    </tr>

                  </tbody>
                </table>
                <hr className="sg-divider" />

              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 border">
              <div className="text-base">상태</div>
              <div className="flex gap-5">
                <div>
                  default
                  <FormButton variant="default">기본버튼</FormButton>
                </div>
                <div>
                  hover
                  <FormButton variant="default" hover={true}>hover 버튼</FormButton>
                </div>
                <div>
                  active
                  <FormButton variant="default" active={true}>active 버튼</FormButton>
                </div>
                <div>
                  disabled
                  <FormButton variant="default" disabled={true}>disabled 버튼</FormButton>
                </div>
                <div>
                  selected
                  <FormButton variant="default" selected={true}>selected 버튼</FormButton>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <FormButton variant="primary">기본버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="primary" hover={true}>hover 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="primary" active={true}>active 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="primary" disabled={true}>disabled 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="primary" selected={true}>selected 버튼</FormButton>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <FormButton variant="secondary">기본버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="secondary" hover={true}>hover 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="secondary" active={true}>active 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="secondary" disabled={true}>disabled 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="secondary" selected={true}>selected 버튼</FormButton>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <FormButton variant="tertiary">기본버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="tertiary" hover={true}>hover 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="tertiary" active={true}>active 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="tertiary" disabled={true}>disabled 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="tertiary" selected={true}>selected 버튼</FormButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 border">
              <div className="text-base mt-4">입력폼</div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <FormInput type="text" className="w-50" placeholder="텍스트" />
                  <FormInput type="email" className="w-50" placeholder="이메일" />
                  <FormInput type="number" className="w-20 text-right" placeholder="숫자" />
                  <FormInput type="password" className="w-20" placeholder="비밀번호" />
                  <FormInput type="search" className="w-20" placeholder="검색" />
                  <FormInput type="tel" className="w-20" placeholder="전화번호" />
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    default
                    <FormInput type="text" className="w-50" placeholder="텍스트" />
                  </div>
                  <div className="flex flex-col gap-2">
                    focus
                    <FormInput type="text" className="w-50" placeholder="텍스트" focus={true} />
                  </div>
                  <div className="flex flex-col gap-2">
                    disabled
                    <FormInput type="text" className="w-50" placeholder="텍스트" disabled={true} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <FormTextarea className="w-50" rows={3} placeholder="내용을 입력하세요" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <FormTextarea className="w-50" rows={3} placeholder="내용을 입력하세요" focus={true} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <FormTextarea className="w-50" rows={3} placeholder="내용을 입력하세요" disabled={true} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <FormSelect className="w-50">
                      <option value="">선택하세요</option>
                      <option value="one">옵션 1</option>
                      <option value="two">옵션 2</option>
                    </FormSelect>
                  </div>
                  <div className="flex flex-col gap-2">
                    <FormSelect className="w-50" focus={true}>
                      <option value="">선택하세요</option>
                      <option value="one">옵션 1</option>
                      <option value="two">옵션 2</option>
                    </FormSelect>
                  </div>
                  <div className="flex flex-col gap-2">
                    <FormSelect className="w-50" disabled={true}>
                      <option value="">선택하세요</option>
                      <option value="one">옵션 1</option>
                      <option value="two">옵션 2</option>
                    </FormSelect>
                  </div>
                </div>
              </div>
            </div>



          </div>
          <div className="ml-4 mt-4 text-lg font-bold">02. tailwindcss 유틸리티 클래스</div>
          <div className="sg-grid">
            <div className="sg-card">
              <div className="sg-card-header">
                <div className="sg-card-title">유틸리티 클래스</div>
              </div>
              <div className="sg-card-body">
                <p className="sg-card-des">기존 .form-btn* 계열 · Default, Hover, Active, Selected, Disabled</p>
                <div className="hidden">
                  <div className="left-1 my-1 mt-1 table h-6 w-90 pb-2 pb-1 pt-3 py-0 bg-slate-950 bg-gray-950 bg-blue-100 border-black border-collapse flex-shrink flex-grow"></div>
                  <div className="inset-shadow-white outline ease-in-out"></div>
                  <div className="mx-4 my-4 w-30"></div>
                </div>
                <hr className="sg-divider" />

              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 border">
              <div className="text-base">상태</div>
              <div className="flex gap-5">
                <div>
                  default
                  <FormButton variant="default">기본버튼</FormButton>
                </div>
                <div>
                  hover
                  <FormButton variant="default" hover={true}>hover 버튼</FormButton>
                </div>
                <div>
                  active
                  <FormButton variant="default" active={true}>active 버튼</FormButton>
                </div>
                <div>
                  disabled
                  <FormButton variant="default" disabled={true}>disabled 버튼</FormButton>
                </div>
                <div>
                  selected
                  <FormButton variant="default" selected={true}>selected 버튼</FormButton>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <FormButton variant="primary">기본버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="primary" hover={true}>hover 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="primary" active={true}>active 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="primary" disabled={true}>disabled 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="primary" selected={true}>selected 버튼</FormButton>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <FormButton variant="secondary">기본버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="secondary" hover={true}>hover 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="secondary" active={true}>active 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="secondary" disabled={true}>disabled 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="secondary" selected={true}>selected 버튼</FormButton>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <FormButton variant="tertiary">기본버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="tertiary" hover={true}>hover 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="tertiary" active={true}>active 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="tertiary" disabled={true}>disabled 버튼</FormButton>
                </div>
                <div>
                  <FormButton variant="tertiary" selected={true}>selected 버튼</FormButton>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 border">
              <div className="text-base mt-4">입력폼</div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <FormInput type="text" className="w-50" placeholder="텍스트" />
                  <FormInput type="email" className="w-50" placeholder="이메일" />
                  <FormInput type="number" className="w-20 text-right" placeholder="숫자" />
                  <FormInput type="password" className="w-20" placeholder="비밀번호" />
                  <FormInput type="search" className="w-20" placeholder="검색" />
                  <FormInput type="tel" className="w-20" placeholder="전화번호" />
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    default
                    <FormInput type="text" className="w-50" placeholder="텍스트" />
                  </div>
                  <div className="flex flex-col gap-2">
                    focus
                    <FormInput type="text" className="w-50" placeholder="텍스트" focus={true} />
                  </div>
                  <div className="flex flex-col gap-2">
                    disabled
                    <FormInput type="text" className="w-50" placeholder="텍스트" disabled={true} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <FormTextarea className="w-50" rows={3} placeholder="내용을 입력하세요" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <FormTextarea className="w-50" rows={3} placeholder="내용을 입력하세요" focus={true} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <FormTextarea className="w-50" rows={3} placeholder="내용을 입력하세요" disabled={true} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <FormSelect className="w-50">
                      <option value="">선택하세요</option>
                      <option value="one">옵션 1</option>
                      <option value="two">옵션 2</option>
                    </FormSelect>
                  </div>
                  <div className="flex flex-col gap-2">
                    <FormSelect className="w-50" focus={true}>
                      <option value="">선택하세요</option>
                      <option value="one">옵션 1</option>
                      <option value="two">옵션 2</option>
                    </FormSelect>
                  </div>
                  <div className="flex flex-col gap-2">
                    <FormSelect className="w-50" disabled={true}>
                      <option value="">선택하세요</option>
                      <option value="one">옵션 1</option>
                      <option value="two">옵션 2</option>
                    </FormSelect>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="">
            <main className="flex flex-col w-full">
              <div className="sg-pageheading">
                <div>
                  <div className="sg-breadcrumb">Design System &nbsp; / &nbsp; UI Style Guide</div>
                  <h1>UI 스타일 가이드</h1>
                  <p>공통 디자인 토큰과 UI 컴포넌트의 상태, 규격, CSS 클래스명을 한 화면에서 확인하세요.</p>
                </div>
                <div className="sg-tools"><label className="sg-search-wrap"><svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="10.7" cy="10.7" r="6.5" strokeWidth="1.7" />
                      <path d="m16 16 5 5" strokeWidth="1.7" strokeLinecap="round" />
                    </svg><input id="sg-search" type="search" placeholder="목차 검색..." aria-label="목차 검색"/></label><button
                    className="sg-outlined-action" type="button" data-action="code" data-code="color" data-title="공통 변수 CSS">CSS
                    변수 보기 ↗</button></div>
              </div>
              <div className="sg-intro">
                <div>
                  <h2>일관된 UI를 위한 공통 디자인 기준</h2>
                  <p>현재 프로젝트 CSS 기준 · 컬러, 버튼 및 입력폼은 제공된 코드와 동일한 이름을 사용합니다.</p>
                </div>
                <div className="sg-intro-side">
                  <div className="sg-intro-metric"><strong>10</strong><span>Primary 토큰</span></div>
                  <div className="sg-intro-metric"><strong>5</strong><span>버튼 유형</span></div>
                  <div className="sg-intro-metric"><strong>5</strong><span>버튼 상태</span></div>
                </div>
              </div>
              <section className="sg-section" id="sg-foundation">
                <div className="sg-sectionhead"><span className="sg-section-number">01.</span>
                  <h2>Design Tokens</h2>
                  <p>첨부 CSS의 기반 스타일</p><span className="sg-subhead-right">* 복사 가능한 컬러칩</span>
                </div>
                <div className="sg-grid sg-foundation">


                </div>
              </section>
              <section className="sg-section" id="sg-basic">
                <div className="sg-sectionhead"><span className="sg-section-number">02.</span>
                  <h2>Basic Components</h2>
                  <p>기존 클래스 그대로 상태별 비교</p>
                </div>
                <div className="sg-grid sg-component-layout">
                  <div className="sg-card" id="sg-buttons">
                    <div className="sg-card-title">
                      <h3>버튼 (Button)</h3><button type="button" className="sg-smalllink" data-action="code"
                        data-title="버튼 (Button) CSS" data-code="button">CSS 코드 보기 ↗</button>
                    </div>

                    <h4>사이즈 비교 <span className="sg-proposed">권장 확장 규격</span></h4>
                    <div className="sg-size-row">
                      <div className="sg-size-pair"><button type="button" className="form-btn-primary lg">Large
                          버튼</button><span>40px</span></div>
                      <div className="sg-size-pair"><button type="button" className="form-btn-primary md">Medium
                          버튼</button><span>32px</span></div>
                      <div className="sg-size-pair"><button type="button" className="form-btn-primary sm">Small
                          버튼</button><span>28px</span></div>
                    </div>
                    <div className="sg-component-notes">
                      <span>실제 클래스 <code>.form-btn-primary</code></span>
                      <span>기존 버튼은 <code>text-sm px-2 py-1</code></span>
                    </div>
                  </div>
                  <div className="sg-card" id="sg-inputs">
                    <div className="sg-card-title">
                      <h3>입력 폼 (Input)</h3><button type="button" className="sg-smalllink" data-action="code"
                        data-title="입력 폼 (Input) CSS" data-code="input">CSS 코드 보기 ↗</button>
                    </div>
                    <p className="sg-card-des">기존 .form-input · .form-textarea · .form-select</p>
                    <div className="sg-form-grid">
                      <div className="sg-formcell"><label>Default</label><input className="form-input " aria-label="Default 입력"
                          placeholder="텍스트 입력" /></div>
                      <div className="sg-formcell"><label>Focus</label><input className="form-input focus" aria-label="Focus 입력"
                          placeholder="텍스트 입력" /></div>
                      <div className="sg-formcell"><label>Disabled</label><input className="form-input disabled"
                          aria-label="Disabled 입력" placeholder="텍스트 입력" disabled /></div>
                      <div className="sg-formcell"><label>Error · 제안</label><input className="form-input sg-error"
                          aria-label="Error 입력" placeholder="텍스트 입력" /></div>
                      <div className="sg-formcell"><label>Success · 제안</label><input className="form-input sg-success"
                          aria-label="Success 입력" placeholder="텍스트 입력" /></div>
                      <div className="sg-formcell"><label>Textarea</label><textarea className="form-textarea"
                          placeholder="내용을 입력하세요"></textarea></div>
                      <div className="sg-formcell"><label>Textarea Focus</label><textarea className="form-textarea focus"
                          placeholder="내용을 입력하세요"></textarea></div>
                      <div className="sg-formcell"><label>Select</label><select className="form-select">
                          <option>선택하세요</option>
                          <option>옵션 1</option>
                          <option>옵션 2</option>
                        </select></div>
                      <div className="sg-formcell"><label>Input Disabled</label><input className="form-input" placeholder="선택 불가"
                          disabled /></div>
                    </div>
                    <div className="sg-component-notes"><span><code>.form-input:focus</code> →
                        <code>--primary-500</code></span><span>오류·성공 표시 <span className="sg-proposed">추가 제안</span></span></div>
                  </div>
                </div>
              </section>
              <section className="sg-section" id="sg-controls">
                <div className="sg-sectionhead"><span className="sg-section-number">03.</span>
                  <h2>Controls &amp; Navigation</h2>
                  <p>실제로 눌러볼 수 있는 UI 미리보기</p>
                </div>
                <div className="sg-grid sg-extras">
                  <div className="sg-card" id="sg-choice">
                    <div className="sg-card-title">
                      <h3>선택 컨트롤</h3>
                    </div>
                    <p className="sg-card-des">Checkbox · Radio · Switch (확장 예시)</p>
                    <h4>Checkbox / Radio</h4>
                    <div className="sg-controls"><label className="sg-control-label"><input type="checkbox" defaultChecked />선택됨</label><label
                        className="sg-control-label"><input type="checkbox"/>기본</label><label className="sg-control-label"><input
                          type="radio" name="sg-radio" defaultChecked />선택됨</label><label className="sg-control-label"><input type="radio"
                          name="sg-radio" />기본</label></div>
                    <hr className="sg-divider" />
                    <h4>Switch</h4>
                    <div className="sg-controls"><label className="sg-switch"><input type="checkbox" defaultChecked/><span
                          className="sg-switch-track"></span>On</label><label className="sg-switch"><input type="checkbox"/><span
                          className="sg-switch-track"></span>Off</label><label className="sg-switch"><input type="checkbox"
                          disabled /><span className="sg-switch-track"></span>Disabled</label></div>
                  </div>
                  <div className="sg-card" id="sg-tabs">
                    <div className="sg-card-title">
                      <h3>탭 & 배지 (Tab / Badge)</h3><button type="button" className="sg-smalllink" data-action="code"
                        data-title="탭 &amp; 배지 (Tab / Badge) CSS" data-code="tab">CSS 코드 보기 ↗</button>
                    </div>
                    <p className="sg-card-des">기존 .page-tabs 구조 및 새 공통 UI 예시</p>
                    <div className="sg-tab-demo" role="tablist"><button type="button" className="sg-tab-btn active" role="tab"
                        aria-selected="true" data-action="tab">기본 정보</button><button type="button" className="sg-tab-btn"
                        role="tab" aria-selected="false" data-action="tab">스타일 설정</button><button type="button"
                        className="sg-tab-btn" role="tab" aria-selected="false" data-action="tab">미리보기</button></div>
                    <div className="sg-tagrow"><span className="sg-tag">기본</span><span className="sg-tag blue">Selected</span><span
                        className="sg-tag success">Success</span><span className="sg-tag warn">Warning</span><span
                        className="sg-tag error">Error</span></div>
                  </div>
                  <div className="sg-card" id="sg-feedback">
                    <div className="sg-card-title">
                      <h3>알림 & 피드백</h3>
                    </div>
                    <p className="sg-card-des">기존 팝업 / 로딩 계열을 활용하는 예시</p>
                    <div className="sg-feedback-row"><button type="button" className="form-btn-primary" data-action="notify"
                        data-message="작업이 완료되었습니다.">토스트 보기</button><button type="button" className="form-btn-secondary"
                        data-action="openModal">모달 열기</button></div>
                    <div className="sg-alert">버튼을 클릭하여 동작을 확인하세요.</div>
                    <div className="sg-component-notes"><span>레이어 <code>.popup-layer</code></span><span>로딩
                        <code>.divLoading</code></span></div>
                  </div>
                </div>
              </section>
              <section className="sg-section" id="sg-advanced">
                <div className="sg-sectionhead"><span className="sg-section-number">04.</span>
                  <h2>Advanced Components &amp; Layout</h2>
                  <p>목록, 페이지 이동 및 레이아웃 규칙</p>
                </div>
                <div className="sg-grid sg-lower">
                  <div className="sg-card" id="sg-table">
                    <div className="sg-card-title">
                      <h3>테이블 (Table)</h3><button type="button" className="sg-smalllink" data-action="code"
                        data-title="테이블 (Table) CSS" data-code="table">CSS 코드 보기 ↗</button>
                    </div>
                    <p className="sg-card-des">첨부 CSS의 .grid-table / .pagination 계열 기반</p>
                    <table className="sg-data-table">
                      <thead>
                        <tr>
                          <th>컴포넌트</th>
                          <th>클래스명</th>
                          <th>상태</th>
                          <th>용도</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Primary Button</td>
                          <td>.form-btn-primary</td>
                          <td><span className="sg-tag success">사용 중</span></td>
                          <td>주요 동작</td>
                        </tr>
                        <tr>
                          <td>Text Input</td>
                          <td>.form-input</td>
                          <td><span className="sg-tag success">사용 중</span></td>
                          <td>텍스트 입력</td>
                        </tr>
                        <tr>
                          <td>Layer Popup</td>
                          <td>.popup-layer</td>
                          <td><span className="sg-tag success">사용 중</span></td>
                          <td>팝업 레이어</td>
                        </tr>
                        <tr>
                          <td>Checkbox</td>
                          <td>.sg-control-label</td>
                          <td><span className="sg-tag warn">추가 예시</span></td>
                          <td>다중 선택</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="sg-pagination" aria-label="페이지 선택"><button data-action="page" type="button">‹</button><button
                        className="active" data-action="page" type="button">1</button><button data-action="page"
                        type="button">2</button><button data-action="page" type="button">3</button><button data-action="page"
                        type="button">›</button></div>
                  </div>
                  <div className="sg-card" id="sg-layoutgrid">
                    <div className="sg-card-title">
                      <h3>레이아웃 (Grid)</h3>
                    </div>
                    <p className="sg-card-des">12열 데스크톱 그리드 · 반응형은 확장 제안</p>
                    <h4>12 Column Grid</h4>
                    <div className="sg-layout-grid">
                      <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                    </div>
                    <div className="sg-instructions">• <code>.page-shell</code> · <code>.page-content</code> : 전체 페이지<br />•
                      <code>.wrap-layout</code> · <code>.main-contents-layout</code> : 콘텐츠 레이아웃<br />•
                      <code>.preview-card</code> : 미리보기 컨테이너<br />• 기존 <code>html min-w-470</code> 설정은 1880px 최소 너비에 영향</div>
                    <div className="sg-bottom-note" id="sg-modal-example">현재 CSS에서 정의된 규격과 새로 제안한 가이드 규격을 구분했습니다. 원본 CSS 파일은 변경하지
                      않았습니다.</div>
                  </div>
                </div>
              </section>
            </main>
          </div>
          <div className="sg-toast" role="status" aria-live="polite"></div>
          <div className="sg-overlay" aria-hidden="true" role="presentation">
            <div className="sg-modal" role="dialog" aria-modal="true" aria-labelledby="sg-modal-title">
              <div className="sg-modal-heading">
                <h3 id="sg-modal-title">CSS 코드</h3><button className="sg-icon-close" type="button" aria-label="닫기"
                  data-action="closeModal">×</button>
              </div>
              <div className="sg-modal-content">
                <div className="sg-modal-description"></div>
                <pre></pre>
              </div>
              <div className="sg-modal-actions"><button className="form-btn-secondary" type="button"
                  data-action="closeModal">닫기</button><button className="form-btn-primary" type="button"
                  data-action="closeModal">확인</button></div>
            </div>
          </div>
        </div>
      </div>
    );
}