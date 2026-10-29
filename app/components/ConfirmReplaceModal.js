// 입력 내용 변경 확인 모달 컴포넌트

'use client';

export default function ConfirmReplaceModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60"
      role="dialog"
      aria-modal="true"
      aria-label="입력 내용 변경 확인"
      onClick={onCancel}
    >
      <div
        className="w-[90%] max-w-sm rounded-2xl bg-white shadow-2xl p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-gray-900">입력된 내용을 변경할까요?</h3>
        <p className="mt-2 text-sm text-gray-500">
          현재 입력된 내용이 삭제되고 예시 문구로 변경됩니다.
        </p>
        <div className="mt-5 flex items-center justify-end gap-2">
          <button
            type="button"
            className="rounded-md px-3 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={onCancel}
          >
            취소
          </button>
          <button
            type="button"
            className="rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 cursor-pointer"
            onClick={onConfirm}
          >
            변경하기
          </button>
        </div>
      </div>
    </div>
  );
}
