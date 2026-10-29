"use client";

import { useState } from "react";
import resolveImageSrc from "../lib/resolveImageSrc";
import PcSideContentsLayout from "../components/PcSideContentsLayout";
import LayerPopupView from "../components/LayerPopupView";

export default function AiRequestPc() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("elements");
  return (
		<div className="wrap-layout">
			{/* <!-- 왼쪽 화면 --> */}
			<PcSideContentsLayout onOpenPopup={() => setIsPopupOpen(true)} />

			{/* <!-- 오른쪽 화면 --> */}
			<div className="main-contents-layout">
				<div className="workspace-preview">
					<div className="flex h-full">
						{/* 템플릿 화면 */}
						<div style={{width: "810px", height: "810px", overflow: "auto", flexShrink: 0}}>
							<div id="pricecardFrame" className="workspace-preview-frame">
								<div id="pricecardCanvas" className="workspace-preview-canvas"></div>
								<div id="pricecardEditor" className="workspace-preview-canvas-editor" style={{width: "566px", height: "800px", transformOrigin: "left top"}}></div>
							</div>
						</div>

						{/* 편집 UI 화면 */}
						<div className="workspace-editor" style={{width: "450px", height: "810px"}}>
							<div className="workspace-save-group">
								<button type="button" className="form-btn-primary">
									<div>이미지 생성하기</div>
								</button>
								<button type="button" className="form-btn-secondary">
									<div>템플릿으로 저장</div>
								</button>
							</div>
							{/* <!-- 배율 --> */}
							<div className="workspace-flex-row">
								<div className="workspace-title">화면 확대
									<div className="workspace-help tooltip1 ml-1" data-tooltip="· 왼쪽 편집창 영역을 클릭 후 아래의 키를 동시에 누르시면 배율을 더 세밀하게 조정하실 수 있습니다.
									① Ctrl키와 +키 : 0.2씩 확대
									② Ctrl키와 -키 : 0.2씩 축소">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path></svg>
									</div>
								</div>
								<div id="selPricecardScale" className="workspace-zoom flex">
									<button type="button" className="form-btn-secondary selected" style={{width: "80px"}}>
										<div className="" style={{letterSpacing: "0"}}>1×</div>
									</button>
									<button type="button" className="form-btn-secondary" style={{width: "80px"}}>
										<div className="" style={{letterSpacing: "0"}}>2×</div>
									</button>
									<button type="button" className="form-btn-secondary" style={{width: "80px"}}>
										<div className="" style={{letterSpacing: "0"}}>3×</div>
									</button>
								</div>
							</div>

							<div className="workspace-tab">
								<button type="button" className={`item ${activeTab === 'elements' ? 'selected' : ''}`} onClick={() => setActiveTab('elements')}>
									요소 추가/삭제
								</button>
								<button type="button" className={`item ${activeTab === 'props' ? 'selected' : ''}`} onClick={() => setActiveTab('props')}>
									속성 편집
								</button>
							</div>

							{/* 요소 추가/삭제 탭을 누르면 보여짐 */}
							{activeTab === 'elements' && (
								<div className="flex-1 small-scroll">
									<div className="workspace-flex-row">
										<div className="workspace-title">요소 추가 / 삭제
											<div className="workspace-help tooltip1 ml-1" data-tooltip="· 텍스트 레이어를 더블클릭하시면 내용을 편집할 수 있습니다.
										· 편집창에서 레이어 선택 후 Ctrl키와 Delete키, 또는 Ctrl키와 ←키(Backspace)를 동시에 누르셔도 삭제됩니다.">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path></svg>
										</div>
											<button type="button" className="form-btn ml-auto font-normal">
												초기화
											</button>
										</div>
									</div>
									<div className="workspace-element-group">
										<button type="button" className="form-btn-secondary">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.3641 4.22168L19.7781 5.63589L5.50012 20L4.08594 18.5857L18.3641 4.22168Z" fill="black"/></svg>
											<span>선</span>
										</button>
										<button type="button" className="form-btn-secondary">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path></svg>
											<span>사각형</span>
										</button>
										<button type="button" className="form-btn-secondary">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
											<span>타원형</span>
										</button>
										<button type="button" className="form-btn-secondary">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM4.20568 19.0002H19.7941L11.9999 5.50017L4.20568 19.0002Z"></path></svg>
											<span>삼각형</span>
										</button>
										<button type="button" className="form-btn-secondary">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>
											<span>텍스트</span>
										</button>
										<button type="button" className="form-btn-secondary">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
											<span>이미지파일</span>
										</button>
										<input type="file" id="pricecardImageFile" accept="image/jpeg,image/png" style={{display: "none"}} />
									</div>

									<div className="workspace-element-group">
										<hr className="col-span-3 my-2 border-gray-200" />
										<button type="button" className="form-btn-secondary">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
											<span>복사하기</span>
										</button>
										<button type="button" className="form-btn-secondary">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
											<span>삭제하기</span>
										</button>
									</div>
								</div>
							)}



							{/* 속성편집 탭을 누르면 보여짐 */}
							{activeTab === 'props' && (
								<div className="flex-1 small-scroll">
									{/* <!-- 속성 편집 --> */}
									<div className="workspace-flex-row">
										<div className="workspace-title">속성 편집
											{/* <!-- 편집모드 --> */}
											<div className="workspace-switch ml-auto">
												<div className="workspace-help tooltip2" data-tooltip="· 일괄모드
											: 첫번째 상품 편집창만 활성화되고, 첫번째 상품의 스타일이 모든 상품에 적용됩니다.
											· 개별모드 
											: 특정 상품의 레이어를 첫번째 상품의 스타일과 다르게 편집할 수 있습니다. 작업 내용이 해당 상품에만 적용됩니다.
											· 개별모드로 전환한 후 편집창에서 편집하고 싶은 상품 영역을 더블클릭하시면 해당 상품의 편집창이 활성화되어 레이어 편집이 가능해집니다.
											· 개별모드에서는 레이아웃 변경, 템플릿 사용, 상품 데이터 컬럼 선택 등이 제한됩니다.">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path></svg>
												</div>
												일괄편집
												<label className="workspace-switch-check">
													<input type="checkbox" id="pricecardAllMode"  />
													<span className="workspace-switch-slider"></span>
												</label>
												개별편집
											</div>
										</div>
									</div>
									<div className="workspace-box">
										<div className="workspace-box-title">크기 및 위치</div>
										<div id="pricecardEditShape" className="workspace-grid-tbl">
											{/* <!-- 크기정보 --> */}
											<div className="workspace-grid-th">크기</div>
											<div className="workspace-grid-td">
												가로
												<input type="number" id="pricecardWidth" className="form-input w-14 text-right" step="5" min="0" defaultValue="0" />
												<span>px</span>
												세로 
												<input type="number" id="pricecardHeight" className="form-input w-14 text-right" step="5" min="0" defaultValue="0" />
												<span>px</span>
											</div>
											{/* <!-- 위치정보 --> */}
											<div className="workspace-grid-th">위치</div>
											<div className="workspace-grid-td" >
												<button type="button" id="pricecardUp" className="form-btn-secondary">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path></svg>
												</button>
												<button type="button" id="pricecardDown" className="form-btn-secondary">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path></svg>
												</button>
												<button type="button" id="pricecardLeft" className="form-btn-secondary">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
												</button>
												<button type="button" id="pricecardRight" className="form-btn-secondary">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
												</button>
											</div>
											<div className="workspace-grid-th">회전</div>
											<div className="workspace-grid-td">
												<div className="flex items-center gap-2">
													<button type="button" className="form-btn-secondary selected">
														<div> 1˚</div>
													</button>
													<button type="button" className="form-btn-secondary">
														<div>15˚</div>
													</button>
												</div>
												<button type="button" id="pricecardTurnLeft" className="form-btn-secondary" data-angleunit="1">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 9H21C21.5522 9 22 9.44772 22 10V20C22 20.5523 21.5522 21 21 21H11C10.4477 21 9.99996 20.5523 9.99996 20V10C9.99996 9.44772 10.4477 9 11 9ZM12 11V19H20V11H12ZM5.99996 10.5858L7.82839 8.75736L9.24261 10.1716L4.99996 14.4142L0.757324 10.1716L2.17154 8.75736L3.99996 10.5858V8C3.99996 5.23858 6.23854 3 8.99996 3H13V5H8.99996C7.34311 5 5.99996 6.34315 5.99996 8V10.5858Z"></path></svg>
												</button>
												<input type="number" id="pricecardAngle" className="form-input w-14 text-right" step="5" defaultValue="360" autoComplete="off" />
												<span className="w-1">˚</span>
												<button type="button" id="pricecardTurnRight" className="form-btn-secondary" data-angleunit="1">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 10.5858L21.8284 8.75736L23.2426 10.1716L19 14.4142L14.7574 10.1716L16.1716 8.75736L18 10.5858V8C18 6.34315 16.6569 5 15 5H11V3H15C17.7614 3 20 5.23858 20 8V10.5858ZM13 9C13.5523 9 14 9.44772 14 10V20C14 20.5523 13.5523 21 13 21H3C2.44772 21 2 20.5523 2 20V10C2 9.44772 2.44772 9 3 9H13ZM12 11H4V19H12V11Z"></path></svg>
												</button>
											</div>
											{/* <!-- 색상 --> */}
											<div data-edit="fill" className="workspace-grid-th">채우기 색상</div>
											<div data-edit="fill" className="workspace-grid-td">
												<input type="color" id="pricecardColorSelector" className="workspace-color-box" />
												<div id="pricecardColor" className="mr-2">#000000</div>
											</div>
											{/* <!-- 선 굵기 --> */}
											<div data-edit="line" className="workspace-grid-th hidden">선 굵기</div>
											<div data-edit="line" className="workspace-grid-td hidden">
												<input type="text" id="pricecardLineWidth" className="form-input" defaultValue="0" />
												<div className="" style={{display: "inline-block"}}>px</div>
											</div>
											{/* <!-- 선 끝모양 --> */}
											<div data-edit="line" className="workspace-grid-th">선 끝모양</div>
											<div className="workspace-grid-td">
												<select id="pricecardLineCap" data-edit="line" className="form-select">
													<option defaultValue={"square"} >사각 모양</option>
													<option defaultValue={"round"}>둥근 모양</option>
													<option defaultValue={"arrow"}>화살표</option>
												</select>
											</div>

											{/* <!-- 테두리 색상 --> */}
											<div data-edit="border" className="workspace-grid-th">테두리 색상</div>
											<div data-edit="border" className="workspace-grid-td">
												<input type="color" id="pricecardBorderColorSelector" className="workspace-color-box" />
												<div id="pricecardBorderColor" className="mr-2">#000000</div>
												<input type="number" id="pricecardBorderWidth" className="form-input w-14 text-right" step="5" defaultValue="1" />
												<span>px</span>
												<label className="workspace-switch-check">
													<input type="checkbox" id="pricecardBorder"  />
													<span className="workspace-switch-slider"></span>
												</label>
												<div id="pricecardBorderColorless" style={{width: "23px", height: "22px", border: "1px solid #777", marginLeft: "3px", display: "inline-block", background: "linear-gradient(to left top, transparent 46%, red 49%, transparent 52%) white"}}>
												</div>
											</div>
										</div>
									</div>
									

									{/* 텍스트 설정 */}
									<div id="pricecardEditFont" className="workspace-box">
										<div className="workspace-box-title">텍스트</div>
										<div className="workspace-grid-tbl">
											<div className="workspace-grid-th">내용</div>
											<div className="workspace-grid-td">
												<input type="text" className="form-input w-full" />
											</div>

											{/* <!-- 글꼴 --> */}
											<div className="workspace-grid-th">글꼴 </div>
											<div className="workspace-grid-td">
												<select id="pricecardFont" className="form-select">
													<option defaultValue="">프리텐다드(기본)</option>
													<option defaultValue="workspace-webfont-1">G마켓산스</option>
													<option defaultValue="workspace-webfont-2">페이퍼로지</option>
													<option defaultValue="workspace-webfont-3">학교안심둥근미소</option>
													<option defaultValue="workspace-webfont-4">경기천년제목체</option>
													<option defaultValue="workspace-webfont-5">가나초콜릿체</option>
													<option defaultValue="workspace-webfont-6">세방고딕</option>
													<option defaultValue="workspace-webfont-7">푸라닭젠틀고딕</option>
													<option defaultValue="workspace-webfont-8">넥센타이어</option>
													<option defaultValue="workspace-webfont-9">KBIZ한마음명조체</option>
													<option defaultValue="workspace-webfont-10">김포평화바탕</option>
												</select>
												<button type="button" className="form-btn-secondary">
													<div className="">보기</div>
												</button>
											</div>
											{/* <!-- 글씨 굵기 --> */}
											<div className="workspace-grid-th">크기/서식</div>
											<div className="workspace-grid-td">
												<input type="number" id="pricecardFontSize" className="form-input w-14 text-right" step="5" min="5" defaultValue="0" />
												<span>px</span>
												<button type="button" className="form-btn-secondary" id="pricecardFontWeight">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 11H12.5C13.8807 11 15 9.88071 15 8.5C15 7.11929 13.8807 6 12.5 6H8V11ZM18 15.5C18 17.9853 15.9853 20 13.5 20H6V4H12.5C14.9853 4 17 6.01472 17 8.5C17 9.70431 16.5269 10.7981 15.7564 11.6058C17.0979 12.3847 18 13.837 18 15.5ZM8 13V18H13.5C14.8807 18 16 16.8807 16 15.5C16 14.1193 14.8807 13 13.5 13H8Z"></path></svg>
												</button>
												<button type="button" className="form-btn-secondary italic" id="pricecardFontStyle">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 20H7V18H9.92661L12.0425 6H9V4H17V6H14.0734L11.9575 18H15V20Z"></path></svg>
												</button>
												<div id="pricecardFontAlign" className="flex gap-2">
													<button type="button" id="pricecardFontAlignLeft" className="form-btn-secondary" data-align="left" defaultValue="left">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 19H17V21H3V19ZM3 14H21V16H3V14ZM3 9H17V11H3V9Z"></path></svg>
													</button>
													<button type="button" id="pricecardFontAlignCenter" className="form-btn-secondary" data-align="center" defaultValue="center">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM3 14H21V16H3V14ZM3 9H21V11H3V9Z"></path></svg>
													</button>
													<button type="button" id="pricecardFontAlignRight" className="form-btn-secondary" data-align="right" defaultValue="right">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM7 19H21V21H7V19ZM3 14H21V16H3V14ZM7 9H21V11H7V9Z"></path></svg>
													</button>
												</div>
											</div>
											{/* <!-- 줄바꿈 허용 --> */}
											<div className="workspace-grid-th">줄바꿈 허용</div>
											<div className="workspace-grid-td" style={{height:"28px"}}>
												<label className="workspace-switch-check">
													<input type="checkbox" id="pricecardWrap"  /> 
													<span className="workspace-switch-slider"></span>
												</label>
												<div className="workspace-help tooltip3" data-tooltip="· 줄바꿈 허용 상태 : 글자가 변형되지 않고 레이어의 가로 길이에 맞춰 줄바꿈됩니다.
												· 줄바꿈하고 싶은 위치에서 Shift키와 Enter키를 동시에 누르시면 입력란에는 {줄바꿈}으로 표시되고 편집창에는 줄바꿈 되어 나타납니다. 
													① 상품 데이터 레이어 : 데이터 입력란에서 Shift키와 Enter키를 동시에 누르십시오.
													② 사용자 생성 텍스트 레이어 : 레이어를 더블클릭하여 수정모드에서 Shift키와 Enter키를 동시에 누르십시오.">
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path></svg>
													</div>
											</div>
											{/* <!-- 단위 크기 --> */}
											<div data-edit="unit" className="workspace-grid-th">원표기 크기</div>
											<div data-edit="unit" className="workspace-grid-td">
												<input type="number" id="pricecardUnitSize" className="form-input w-14 text-right" step="5" min="5" defaultValue="0"/>
												<span>px</span>
											</div>
										</div>
									</div>
								</div>
							)}

							{/* <!-- 레이어 순서는 하단에 고정 --> */}
							<div className="workspace-layer-group">
								<div className="workspace-title">레이어 순서<span className="workspace-sub-text">(위에 있는 요소가 앞에 표시됩니다.)</span></div>
								<div className="workspace-grid-tbl my-1!">
									<div className="workspace-grid-th flex-col gap-2">
										<button type="button" className="form-btn-secondary w-full">맨위로</button>
										<button type="button" className="form-btn-secondary w-full">위로</button>
										<button type="button" className="form-btn-secondary w-full">밑으로</button>
										<button type="button" className="form-btn-secondary w-full">맨밑으로</button>
									</div>
									<div className="workspace-grid-td">
										<div id="pricecardLayerOrder" className="workspace-layer-list small-scroll">
											<button type="button" className="workspace-layer-btn">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>
												텍스트
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
												</span>
											</button>
											<button type="button" className="workspace-layer-btn">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.3641 4.22168L19.7781 5.63589L5.50012 20L4.08594 18.5857L18.3641 4.22168Z" fill="black"></path></svg>
												선
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
												</span>
											</button>
											<button type="button" className="workspace-layer-btn">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>
												텍스트
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
												</span>
											</button>
											<button type="button" className="workspace-layer-btn">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path></svg>
												사각형
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
												</span>
											</button>
											<button type="button" className="workspace-layer-btn selected">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM8 5V8H4V5H8ZM4 14V10H8V14H4ZM4 16H8V19H4V16ZM10 16H20V19H10V16ZM20 14H10V10H20V14ZM20 5V8H10V5H20Z"></path></svg>
												할인판매가
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
												</span>
											</button>
											<button type="button" className="workspace-layer-btn">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path></svg>
												상품명
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-0 left-0 flex w-[810px] z-2 p-1 text-sm border-b border-gray-200 bg-white">
					<div className="workspace-flex-row mx-auto w-90!">
						<div className="workspace-title">화면 확대
							<div className="workspace-help tooltip1 ml-1" data-tooltip="· 왼쪽 편집창 영역을 클릭 후 아래의 키를 동시에 누르시면 배율을 더 세밀하게 조정하실 수 있습니다.
							① Ctrl키와 +키 : 0.2씩 확대
							② Ctrl키와 -키 : 0.2씩 축소">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path></svg>
							</div>
						</div>
						<div id="selPricecardScale" className="workspace-zoom flex">
							<button type="button" className="form-btn-secondary selected" style={{width: "80px"}}>
								<div className="" style={{letterSpacing: "0"}}>1×</div>
							</button>
							<button type="button" className="form-btn-secondary" style={{width: "80px"}}>
								<div className="" style={{letterSpacing: "0"}}>2×</div>
							</button>
							<button type="button" className="form-btn-secondary" style={{width: "80px"}}>
								<div className="" style={{letterSpacing: "0"}}>3×</div>
							</button>
						</div>
					</div>
				</div>
			</div>
			{isPopupOpen && (
				<LayerPopupView onClose={() => setIsPopupOpen(false)} />
			)}
		</div>
  );
}



