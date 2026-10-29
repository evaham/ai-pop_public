"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import "./globals.css";
import "./new_ai_pop_common.css";
import TsMoney from "./components/TsMoney";


import React, { useState, useRef, useEffect } from "react";


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const tabClass = (href) => `level1 tab${pathname === href ? " selected" : ""}`;
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return;
      if (isDetailOpen && !containerRef.current.contains(e.target)) {
        setIsDetailOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isDetailOpen]);

  const toggleDetail = () => setIsDetailOpen((v) => !v);
  const closeDetail = () => setIsDetailOpen(false);

  return (
    <html lang="ko" className="h-full">
      <body className={`w-full h-full antialiased`}>
        <div className="page-shell">
          <div className="page-content">
            <div className="page-tabs">
              <div className="tabs page-tab-inner" id="menuTab">
                <ul className="level1 static">
                  <li role="menuitem">
                    <Link href="/aiRequest_pop" className={tabClass("/aiRequest_pop")}>AI POP 만들기</Link>
                  </li>
                  <li role="menuitem">
                    <Link href="/aiRequest_pc" className={tabClass("/aiRequest_pc")}>프라이스카드 만들기</Link>
                  </li>
                  <li role="menuitem">
                    <Link href="/aiImage" className={tabClass("/aiImage")}>AI이미지관리</Link>
                  </li>
                  <li role="menuitem">
                    <Link href="/aiStatics" className={tabClass("/aiStatics")}>AI이용현황</Link>
                  </li>
                  {/* <li role="menuitem">
                    <Link href="/uiView" className={tabClass("/uiView")}>UI 뷰</Link>
                  </li> */}
                </ul>
                <div className="tsmoney-info" ref={containerRef}>
                  <button className="tsmoney-info-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z"></path></svg>
                  </button>
                  사용 가능TS
                  <div className="tsmoney-info-amount" onClick={toggleDetail}>
                    <span>235,300</span>.0
                  </div>
                  <div className={`tsmoney-info-detail ${isDetailOpen ? "" : "hidden"}`}>
                    <TsMoney onClose={closeDetail} />
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
