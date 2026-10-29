'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function ToolTip({
  children,
  content,
  className = '',
  tooltipClassName = '',
  placement = 'bottom'
}) {
  const anchorRef = useRef(null);
  const tooltipRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const updatePosition = () => {
    const anchor = anchorRef.current;
    if (!anchor) {
      return;
    }

    const rect = anchor.getBoundingClientRect();
    const tooltipWidth = tooltipRef.current?.offsetWidth || 256;
    const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    const gap = 8;

    const alignLeft = rect.left + scrollX;
    const alignCenter = rect.left + scrollX + rect.width / 2 - tooltipWidth / 2;
    const alignRight = rect.right + scrollX - tooltipWidth;
    const topY = rect.top + scrollY - tooltipHeight - gap;
    const bottomY = rect.bottom + scrollY + gap;
    const middleY = rect.top + scrollY + rect.height / 2 - tooltipHeight / 2;

    const placementMap = {
      bottom: { top: bottomY, left: alignLeft },
      top: { top: topY, left: alignLeft },
      right: { top: middleY, left: rect.right + scrollX + gap },
      left: { top: middleY, left: rect.left + scrollX - tooltipWidth - gap },
      'bottom-left': { top: bottomY, left: alignLeft },
      'bottom-center': { top: bottomY, left: alignCenter },
      'bottom-right': { top: bottomY, left: alignRight },
      'top-left': { top: topY, left: alignLeft },
      'top-center': { top: topY, left: alignCenter },
      'top-right': { top: topY, left: alignRight }
    };

    let nextPosition = placementMap[placement] || placementMap.bottom;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const viewportPadding = 8;

    if (String(placement).startsWith('bottom')) {
      const wouldOverflowBottom = nextPosition.top + tooltipHeight > scrollY + viewportHeight - viewportPadding;
      const canFlipTop = topY >= scrollY + viewportPadding;
      if (wouldOverflowBottom && canFlipTop) {
        const topPlacement = String(placement).replace('bottom', 'top');
        nextPosition = placementMap[topPlacement] || placementMap.top;
      }
    }

    if (String(placement).startsWith('top')) {
      const wouldOverflowTop = nextPosition.top < scrollY + viewportPadding;
      const canFlipBottom = bottomY + tooltipHeight <= scrollY + viewportHeight - viewportPadding;
      if (wouldOverflowTop && canFlipBottom) {
        const bottomPlacement = String(placement).replace('top', 'bottom');
        nextPosition = placementMap[bottomPlacement] || placementMap.bottom;
      }
    }

    const minLeft = scrollX + viewportPadding;
    const maxLeft = scrollX + viewportWidth - tooltipWidth - viewportPadding;
    const minTop = scrollY + viewportPadding;
    const maxTop = scrollY + viewportHeight - tooltipHeight - viewportPadding;

    nextPosition = {
      top: Math.min(Math.max(nextPosition.top, minTop), maxTop),
      left: Math.min(Math.max(nextPosition.left, minLeft), maxLeft)
    };

    setPosition(nextPosition);
  };

  const handleEnter = () => {
    updatePosition();
    setIsOpen(true);
  };

  const handleLeave = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleScroll = () => updatePosition();
    const handleResize = () => updatePosition();

    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, placement]);

  return (
    <span
      ref={anchorRef}
      className={`inline-flex ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      tabIndex={0}
    >
      {children}
      {isMounted &&
        createPortal(
          <div
            ref={tooltipRef}
            className={`fixed w-64 px-4 py-3 rounded-lg bg-gray-800 text-gray-300 text-sm shadow-md transition-opacity pointer-events-none z-50 ${tooltipClassName}`}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              opacity: isOpen ? 1 : 0
            }}
            role="tooltip"
          >
            {content}
          </div>,
          document.body
        )}
    </span>
  );
}
