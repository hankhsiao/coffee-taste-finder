'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';

interface StickyComponentProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  onStickyChange?: (isSticky: boolean) => void;
}

export default function StickyComponent({ 
  children, 
  className = '',
  yOffset = 0,
  onStickyChange 
}: StickyComponentProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  // Set initial sticky state on mount
  useEffect(() => {
    if (sentinelRef.current) {
      const rect = sentinelRef.current.getBoundingClientRect();
      setIsSticky(rect.top < yOffset);
    }
  }, [yOffset]);

  // Observe scroll to detect when container should become sticky
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const handleScroll = () => {
      const sentinelTop = sentinel.getBoundingClientRect().top;
      const newIsSticky = sentinelTop < yOffset;

      if (newIsSticky !== isSticky) {
        setIsSticky(newIsSticky);
        onStickyChange?.(newIsSticky);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky, yOffset, onStickyChange]);

  // Track container height to maintain space in placeholder
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      setContainerHeight(container.offsetHeight);
    });

    resizeObserver.observe(container);
    // Set initial height
    setContainerHeight(container.offsetHeight);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel: tiny element that triggers sticky when it leaves viewport */}
      <div ref={sentinelRef} className="h-0" />
      
      {/* Placeholder to maintain space when content becomes fixed */}
      <div 
        ref={placeholderRef}
        className={isSticky ? className : 'hidden'}
        style={{ height: isSticky ? containerHeight : 'auto' }}
      />
      
      {/* Actual content container */}
      <div
        ref={containerRef}
        className={`${className} ${isSticky ? 'fixed left-0 z-40' : 'relative'}`}
        style={isSticky ? { top: `${yOffset}px` } : undefined}
      >
        {children}
      </div>
    </>
  );
}
