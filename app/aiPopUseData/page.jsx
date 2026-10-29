'use client';

import { useState } from 'react';

const sampleItems = [
  {
    id: 1,
    createdAt: '2024-03-27 13:45',
    prompt: '여름 행사 배너 이미지 생성',
    result: '생성완료',
    tsMoney: -500,
    tsPoint: 0
  },
  {
    id: 2,
    createdAt: '2024-03-27 14:10',
    prompt: '신규 상품 소개 POP 디자인',
    result: '생성완료',
    tsMoney: -500,
    tsPoint: 0
  },
  {
    id: 3,
    createdAt: '2024-03-28 09:02',
    prompt: '주말 특가 프로모션 문구',
    result: '생성실패',
    tsMoney: -500,
    tsPoint: 0
  },
  {
    id: 4,
    createdAt: '2024-03-28 11:22',
    prompt: '간편식 모음 행사 이미지',
    result: '생성완료',
    tsMoney: 0,
    tsPoint: -500
  },
  {
    id: 5,
    createdAt: '2024-03-29 10:05',
    prompt: '타임세일 팝업 배너',
    result: '생성완료',
    tsMoney: -500,
    tsPoint: 0
  },
  {
    id: 6,
    createdAt: '2024-03-29 12:30',
    prompt: '봄 시즌 한정 이벤트',
    result: '생성완료',
    tsMoney: -500,
    tsPoint: 0
  },
  {
    id: 7,
    createdAt: '2024-03-29 16:18',
    prompt: '매장 오픈 프로모션',
    result: '생성실패',
    tsMoney: -500,
    tsPoint: 0
  },
  {
    id: 8,
    createdAt: '2024-03-30 09:40',
    prompt: '가격표 강조형 POP',
    result: '생성완료',
    tsMoney: 0,
    tsPoint: -500
  },
  {
    id: 9,
    createdAt: '2024-03-30 11:55',
    prompt: '배송비 무료 안내 이미지',
    result: '생성완료',
    tsMoney: 0,
    tsPoint: -500
  },
  {
    id: 10,
    createdAt: '2024-03-30 13:20',
    prompt: '신선식품 할인 배너 요청',
    result: '생성완료',
    tsMoney: -500,
    tsPoint: 0
  },
  {
    id: 11,
    createdAt: '2024-03-30 15:05',
    prompt: '간편식 모음 행사 이미지',
    result: '생성실패',
    tsMoney: 0,
    tsPoint: -500
  },
  {
    id: 12,
    createdAt: '2024-03-30 16:42',
    prompt: '주말 특가 프로모션 문구',
    result: '생성완료',
    tsMoney: -500,
    tsPoint: 0
  },
  {
    id: 13,
    createdAt: '2024-03-30 18:10',
    prompt: '여름 행사 배너 이미지 생성',
    result: '생성완료',
    tsMoney: 0,
    tsPoint: -500
  },
  {
    id: 14,
    createdAt: '2024-03-30 19:30',
    prompt: '가격표 강조형 POP',
    result: '생성실패',
    tsMoney: 0,
    tsPoint: -500
  }
];

export default function AiPopUseData() {
  const [items] = useState(sampleItems);

  return (
    <>
      <div className="flex-1 relative flex flex-col bg-white">
        <div className="flex flex-wrap gap-1 px-2 py-1.5 bg-gray-500/80 text-xs">
          <span className="flex items-center h-6.5 text-white">생성일</span>
          <input type="text" className="w-26 h-6.5 px-1 border border-gray-600/70 rounded-xs bg-white" />
          <span className="flex items-center h-6.5 text-white">~</span>
          <input type="text" className="w-26 h-6.5 px-1 border border-gray-600/70 rounded-xs bg-white" />
          <button className="inline-flex items-center h-6.5 px-2.5 border border-gray-600 rounded-xs text-white bg-gray-500 inset-shadow-xs inset-shadow-white/50 active:bg-gray-700/80 active:inset-shadow-none hover:bg-gray-500/80 cursor-pointer">1개월</button>
          <button className="inline-flex items-center h-6.5 px-2.5 border border-gray-600 rounded-xs text-white bg-gray-500 inset-shadow-xs inset-shadow-white/50 active:bg-gray-700/80 active:inset-shadow-none hover:bg-gray-500/80 cursor-pointer">3개월</button>
          <button className="inline-flex items-center h-6.5 px-2.5 border border-gray-600 rounded-xs text-white bg-gray-500 inset-shadow-xs inset-shadow-white/50 active:bg-gray-700/80 active:inset-shadow-none hover:bg-gray-500/80 cursor-pointer">6개월</button>
          <button className="inline-flex items-center h-6.5 px-2.5 border border-blue-600 rounded-xs text-white bg-blue-500 inset-shadow-xs inset-shadow-white/50 active:bg-blue-700/80 active:inset-shadow-none hover:bg-blue-500/80 cursor-pointer">조회</button>
        </div>
        <div className="flex flex-wrap gap-1.5 px-2 py-1.5 border border-gray-200 bg-gray-100 text-xs">
          <span className="flex items-center h-6.5 text-gray-700">결과</span>
          <select className="h-6.5 px-1 border border-gray-600/70 rounded-xs bg-white">
            <option value="">전체</option>
            <option value="success">성공</option>
            <option value="failure">실패</option>
          </select>
        </div>
        <div className="flex items-center gap-3 pt-3.5 pb-2.5 text-sm">
          <dl className="flex items-center text-gray-400 tracking-tight">
            <dt className="mr-1 before:content-['•'] before:mr-1 after:content-[':'] after:ml-1">누적 생성건수</dt>
            <dd>123건</dd>
          </dl>
          <dl className="flex items-center text-gray-400 tracking-tight">
            <dt className="mr-1 before:content-['•'] before:mr-1 after:content-[':'] after:ml-1">총 결제 TS머니</dt>
            <dd>4,560</dd>
            <dd>.0</dd>
          </dl>
          <dl className="flex items-center text-gray-400 tracking-tight">
            <dt className="mr-1 before:content-['•'] before:mr-1 after:content-[':'] after:ml-1">총 결제 TS포인트</dt>
            <dd>789,000</dd>
            <dd>.0</dd>
          </dl>
          <div className="flex gap-1 ml-auto">
            <select className="flex items-center border border-gray-400 rounded-xs h-5 text-xs text-gray-600 bg-blue-100/80">
              <option value="">생성된 이미지</option>
              <option value="prompt">프롬프트</option>
              <option value="result">결과</option>
            </select>
            <button className="inline-flex items-center h-5 px-1 border border-blue-500 rounded-xs text-xs text-blue-600 active:bg-blue-100 hover:bg-blue-50 cursor-pointer">엑셀다운</button>
          </div>
        </div>
        <div>
          <div className="overflow-auto min-h-100 border border-gray-300 bg-gray-200">
            <table className="hover overwidth table-auto -ml-px -mt-px mb-12 border border-gray-300 text-[13px] whitespace-nowrap">
              <thead className="[&_th]:p-0.5 [&_th]:border [&_th]:border-gray-300/70 [&_th]:text-gray-500 [&_th]:font-normal [&_th]:bg-gray-50">
                <tr>
                  <th className="px-3 py-2">No.</th>
                  <th className="px-3 py-2">이미지생성일</th>
                  <th className="px-3 py-2">내용</th>
                  <th className="px-3 py-2">결과</th>
                  <th className="px-3 py-2">결제 TS머니</th>
                  <th className="px-3 py-2">결제 TS포인트</th>
                </tr>
              </thead>
              <tbody className="[&_th,&_td]:px-1 [&_th,&_td]:py-0.5 [&_th,&_td]:border [&_th,&_td]:border-gray-300/70">
                {items.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-blue-50">
                    <td className="px-3 py-2 text-gray-400 text-center">{item.id}</td>
                    <td className="px-3 py-2 text-gray-400">{item.createdAt}</td>
                    <td className="px-3 py-2 text-gray-700">{item.prompt}</td>
                    <td className={`px-3 py-2 text-gray-700 ${item.result === '생성실패' ? 'text-rose-500' : ''}`}>
                      {item.result}
                    </td>
                    <td className={`px-3 py-2 text-right text-blue-400 ${item.result === '생성실패' && item.tsMoney !== 0 ? 'text-rose-500 line-through' : ''}`}>{item.tsMoney}</td>
                    <td className={`px-3 py-2 text-right text-blue-400 ${item.result === '생성실패' && item.tsPoint !== 0 ? 'text-rose-500 line-through' : ''}`}>{item.tsPoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
