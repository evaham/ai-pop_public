'use client';
import React from 'react';
export default function TsMoney() {
  return (
    <div className="ts-wrap">
      <div className="ts-sticky">
        <div className="ts-card">
          <div>
            <div>
              <div className="ts-title">투게더마트</div>
            </div>
            <div className="ts-info-box">
              <div className="ts-info-box-row">
                <div className="ts-info-box-left">TS머니</div>
                <div className="flex">
                  <span id="remainMoney" className="text-red-600">682,480</span>
                  <span id="remainMoneyDecimal" className="ts_decimal_part text-gray-500">.5</span>
                </div>
              </div>
              <div className="ts-info-box-row">
                <div className="ts-info-box-left">TS포인트</div>
                <div className="flex">
                  <span id="remainPoint" className="text-blue-500">0</span>
                  <span id="remainPointDecimal" className="ts_decimal_part text-gray-500">.0</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="ts-hr" />
          <div className="ts-title">TS머니 전용계좌</div>
          <div id="tsBank" className="ts-bank">기업은행 431-192047-97-437</div>
          <div>
            예금주 : <span id="tsHolder" className="font-semibold text-gray-800">테스트그룹</span>
          </div>
        </div>
      </div>
    </div>
  )
}