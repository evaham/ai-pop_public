// AI 이미지 리스트 컴포넌트

'use client';

import { useState } from 'react';

export default function ImageGenerationList({ items, onOpenPreview, onRetryPrompt }) {
  const [expandedIds, setExpandedIds] = useState(() => new Set());

  const togglePrompt = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };
  // 초기 데이터가 없을 때 보여줄 UI
  if (!items || items.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 py-10 text-center text-gray-700">
        <h1 className={`flex items-baseline sm:-mt-50 text-4xl font-bold text-center text-gray-800`}>
          <div className='mr-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-14 fill-violet-500' width="206" height="202" viewBox="0 0 206 202" fill="none">
            <path d="M112.032 105.009C112.032 100.276 113.443 96.8167 116.265 94.6321C119.087 92.4475 122.409 91.3552 126.232 91.3552C130.055 91.3552 133.377 92.4475 136.199 94.6321C139.021 96.8167 140.432 100.276 140.432 105.009V201.813H112.032V105.009Z" />
            <path d="M35.0897 102.688C36.4551 98.8647 38.7762 96.043 42.0531 94.2225C45.4209 92.311 48.9709 91.3552 52.7029 91.3552C56.1618 91.3552 59.4841 92.311 62.67 94.2225C65.9468 96.134 68.2224 98.9557 69.4968 102.688L105.133 201.813H75.0947L69.7699 184.882H34.6801L29.4918 201.813H0L35.0897 102.688ZM41.78 161.808H62.67L52.2933 127.81L41.78 161.808Z" />
            <path d="M154.255 10.8412C155.633 7.11719 160.9 7.11718 162.278 10.8412L170.292 32.499C170.726 33.6698 171.649 34.5929 172.82 35.0261L194.477 43.0402C198.201 44.4183 198.201 49.6854 194.477 51.0635L172.82 59.0776C171.649 59.5108 170.726 60.4339 170.292 61.6047L162.278 83.2625C160.9 86.9865 155.633 86.9865 154.255 83.2625L146.241 61.6047C145.808 60.4339 144.885 59.5108 143.714 59.0776L122.056 51.0635C118.332 49.6854 118.332 44.4183 122.056 43.0402L143.714 35.0261C144.885 34.5929 145.808 33.6698 146.241 32.499L154.255 10.8412Z" />
            <path d="M72.9826 36.505C74.3606 32.781 79.6278 32.781 81.0058 36.505L83.2435 42.5521C83.6767 43.7229 84.5998 44.646 85.7706 45.0792L91.8177 47.3169C95.5417 48.6949 95.5417 53.9621 91.8177 55.3401L85.7706 57.5777C84.5998 58.0109 83.6767 58.934 83.2435 60.1049L81.0058 66.1519C79.6278 69.8759 74.3606 69.8759 72.9826 66.1519L70.745 60.1049C70.3118 58.934 69.3887 58.0109 68.2178 57.5777L62.1708 55.3401C58.4468 53.9621 58.4468 48.6949 62.1708 47.3169L68.2178 45.0792C69.3887 44.646 70.3118 43.7229 70.745 42.5521L72.9826 36.505Z" />
            <path d="M175.642 122.054C177.02 118.33 182.287 118.33 183.665 122.054L185.903 128.101C186.336 129.272 187.259 130.195 188.43 130.628L194.477 132.866C198.201 134.244 198.201 139.511 194.477 140.889L188.43 143.127C187.259 143.56 186.336 144.483 185.903 145.654L183.665 151.701C182.287 155.425 177.02 155.425 175.642 151.701L173.404 145.654C172.971 144.483 172.048 143.56 170.877 143.127L164.83 140.889C161.106 139.511 161.106 134.244 164.83 132.866L170.877 130.628C172.048 130.195 172.971 129.272 173.404 128.101L175.642 122.054Z" />
            </svg>
          </div>
          <span className='text-gray-700 tracking-tight'>POP</span>
        </h1>
        <div className="text-lg font-medium">이미지를 생성해주세요!</div>
      </div>
    );
  }
  return (
    <ul className="flex flex-col divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="flex flex-col py-3">
          <div className="flex items-center gap-2 text-gray-700 font-bold">{item.createdAt}
            {item.status === 'failed' && (
              <button
                type="button"
                className="ml-1 rounded border border-violet-200 bg-violet-50 px-2 py-0.5 text-xs font-normal text-violet-600 hover:bg-violet-100"
                onClick={() => onRetryPrompt?.(item.prompt)}
              >
                재시도
              </button>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 leading-tight">
            <span>
              {item.prompt && item.prompt.length > 60 && !expandedIds.has(item.id)
                ? `${item.prompt.slice(0, 60)}...`
                : item.prompt}
            </span>
            {item.prompt && item.prompt.length > 60 && (
              <button
                type="button"
                className="text-xs text-gray-800 underline cursor-pointer"
                onClick={() => togglePrompt(item.id)}
              >
                {expandedIds.has(item.id) ? '접기' : '내용전체보기'}
              </button>
            )}
          </div>
          {/* 로딩중 보여줄 UI */}
          {item.status === 'loading' && (
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="flex-1 flex flex-col items-center min-h-34 text-gray-600 bg-white p-4 rounded-lg border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-animation size-22 fill-violet-500" width="90" height="90" viewBox="0 0 348 342" fill="none">
                  <g>
                    <path d="M183.373 175.102C183.373 170.369 184.784 166.91 187.605 164.726C190.427 162.541 193.75 161.449 197.573 161.449C201.396 161.449 204.718 162.541 207.54 164.726C210.361 166.91 211.772 170.369 211.772 175.102V271.906H183.373V175.102Z" />
                    <path d="M106.431 172.781C107.796 168.958 110.117 166.137 113.394 164.316C116.762 162.405 120.312 161.449 124.044 161.449C127.503 161.449 130.825 162.405 134.011 164.316C137.288 166.228 139.563 169.049 140.838 172.781L176.473 271.906H146.436L141.111 254.976H106.021L100.833 271.906H71.3408L106.431 172.781ZM113.121 231.901H134.011L123.634 197.904L113.121 231.901Z" />
                  </g>
                  <path d="M225.596 80.9348C226.974 77.2108 232.241 77.2108 233.619 80.9348L241.633 102.593C242.066 103.763 242.989 104.687 244.16 105.12L265.818 113.134C269.542 114.512 269.542 119.779 265.818 121.157L244.16 129.171C242.989 129.604 242.066 130.528 241.633 131.698L233.619 153.356C232.241 157.08 226.974 157.08 225.596 153.356L217.582 131.698C217.148 130.528 216.225 129.604 215.054 129.171L193.397 121.157C189.673 119.779 189.673 114.512 193.397 113.134L215.054 105.12C216.225 104.687 217.148 103.763 217.582 102.593L225.596 80.9348Z" />
                  <path d="M144.323 106.599C145.701 102.875 150.969 102.875 152.347 106.599L154.584 112.646C155.018 113.817 155.941 114.74 157.111 115.173L163.159 117.41C166.883 118.788 166.883 124.056 163.158 125.434L157.111 127.671C155.941 128.105 155.018 129.028 154.584 130.198L152.347 136.246C150.969 139.97 145.701 139.97 144.323 136.246L142.086 130.198C141.653 129.028 140.729 128.105 139.559 127.671L133.512 125.434C129.788 124.056 129.788 118.788 133.512 117.41L139.559 115.173C140.729 114.74 141.653 113.817 142.086 112.646L144.323 106.599Z" />
                  <path d="M246.983 192.147C248.361 188.423 253.628 188.423 255.006 192.147L257.243 198.195C257.677 199.365 258.6 200.288 259.771 200.722L265.818 202.959C269.542 204.337 269.542 209.605 265.818 210.983L259.771 213.22C258.6 213.653 257.677 214.576 257.243 215.747L255.006 221.794C253.628 225.518 248.361 225.518 246.983 221.794L244.745 215.747C244.312 214.576 243.389 213.653 242.218 213.22L236.171 210.983C232.447 209.605 232.447 204.337 236.171 202.959L242.218 200.722C243.389 200.288 244.312 199.365 244.745 198.195L246.983 192.147Z" />
                </svg>
                <p className="text-center">
                  <span>AI 이미지를 생성중입니다.</span><br />
                  <span>생성된 이미지는 이미지 클라우드에 자동 저장됩니다.</span>
                </p>
              </div>
            </div>
          )}
          {/* 성공시 보여줄 UI */}
          {item.status === 'done' && (
            <div className="flex flex-wrap gap-1 mt-2">
              {[item.imageUrl, item.imageUrl2, item.imageUrl3, item.imageUrl4].map((imageUrl, index) => (
                <div key={`${item.id}-${index}`} className="overflow-hidden flex flex-col w-34 h-34 border border-black/10 rounded-lg bg-white">
                  <div className="flex items-center justify-center w-full h-26 p-2">
                    <img src={imageUrl} alt="생성된 이미지" className="max-w-full max-h-full object-cover" />
                  </div>
                  <div className="flex-1 flex items-center justify-center px-1.5 pb-1.5 gap-1 divide-gray-200">
                    <button
                      className="flex-1 h-full border border-gray-200 rounded text-xs text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 hover:text-gray-700 tracking-tight transition cursor-pointer"
                      onClick={() =>
                        onOpenPreview({
                          imageUrl,
                          createdAt: item.createdAt,
                          prompt: item.prompt
                        })
                      }
                    >
                      크게보기
                    </button>
                    <button className="flex-1 h-full border border-gray-200 rounded text-xs text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 hover:text-gray-700 tracking-tight transition cursor-pointer">
                      다운로드
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* 실패시 보여줄 UI */}
          {item.status === 'failed' && (
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="flex-1 flex flex-col items-center min-h-34 text-gray-600 bg-white p-4 rounded-lg border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-14 fill-violet-500" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm330.5-51.5Q520-263 520-280t-11.5-28.5Q497-320 480-320t-28.5 11.5Q440-297 440-280t11.5 28.5Q463-240 480-240t28.5-11.5ZM440-360h80v-200h-80v200Zm40-100Z"/></svg>
                <p className='mt-2 text-center leading-tight'>
                  <span className=''>이미지 생성에 실패했습니다.<br />다시 시도해 주세요</span>
                  <span className='block mt-2 text-sm border border-gray-100 rounded p-2 px-3 bg-gray-50'>차감된 TS는 즉시 환불되어, AI 이용현황에서 확인 가능합니다.</span>
                </p>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
