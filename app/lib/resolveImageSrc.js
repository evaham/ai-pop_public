
// github page 로컬 이미지경로 해결 함수
export default function resolveImageSrc(src) {
  return src && src.startsWith("/")
    ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`
    : src;
}
