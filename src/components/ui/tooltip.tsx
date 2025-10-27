'use client'

import React, { useState, useRef } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = 'bottom'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipId = useRef(`tooltip-${Math.random().toString(36).slice(2)}`).current;

  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };

  const alignmentClasses = {
    top: 'left-1/2 -translate-x-1/2',
    bottom: 'left-1/2 -translate-x-1/2',
    left: 'top-1/2 -translate-y-1/2',
    right: 'top-1/2 -translate-y-1/2',
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        aria-describedby={isOpen ? tooltipId : undefined}
      >
        {children}
      </div>

      {isOpen && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`absolute z-50 px-2 py-1.5 text-xs font-medium whitespace-nowrap rounded bg-foreground text-background pointer-events-none transition-opacity duration-200 ${positionClasses[side]} ${alignmentClasses[side]}`}
        >
          {content}
          <div
            className={`absolute w-2 h-2 bg-foreground ${
              side === 'bottom'
                ? '-top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45'
                : side === 'top'
                ? '-bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45'
                : side === 'right'
                ? '-left-1 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45'
                : '-right-1 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45'
            }`}
          />
        </div>
      )}
    </div>
  );
};
