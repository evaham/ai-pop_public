// 이미지 미리보기 모달 컴포넌트

'use client';

export default function ImagePreviewModal({ detail, onClose, onRegisterImage }) {
  if (!detail) {
    return null;
  }

  const { imageUrl, createdAt, prompt } = detail;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/60"
      role="dialog"
      aria-modal="true"
      aria-label="이미지 크게보기"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-[90%] max-w-3xl overflow-y-auto overscroll-contain rounded-2xl bg-white shadow-2xl sm:overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <div className="font-semibold text-gray-800">이미지 크게보기</div>
          <button
            type="button"
            className="rounded-md px-2 py-1 text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-700" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/></svg>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row bg-gray-50">
          <div className="flex max-h-[75vh] items-center justify-center p-4">
            <img src={imageUrl} alt="확대 이미지" className="max-h-[70vh] w-full max-w-full object-contain" />
          </div>
          {/* 이미지 상세정보 */}
          <div className="flex flex-1 sm:max-h-[75vh]">
            <div className="overflow-y-auto flex-1 flex flex-col gap-3 p-4 sm:border-l sm:border-gray-200 bg-white min-w-[220px]">
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-lg px-3 py-2 text-sm text-white bg-gray-800 hover:bg-gray-700 transition cursor-pointer"
                  onClick={() => onRegisterImage?.(imageUrl)}
                >
                  AI 생성
                </button>              
                <button
                  type="button"
                  className="rounded-lg px-3 py-2 text-sm text-white bg-gray-800 hover:bg-gray-700 transition cursor-pointer"
                >
                  이미지 다운로드
                </button>
              </div>
              <div className="flex flex-col gap-x-3 gap-y-2 text-sm">
                <span className="text-gray-500">생성일</span>
                <span className="font-medium text-gray-800">{createdAt || '-'}</span>
                <span className="text-gray-500">프롬프트</span>
                <span className="text-gray-700">{prompt || '-'}</span>
                <span className="text-gray-500">보관기간</span>
                <span className="text-gray-700">2024-04-30 까지</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
