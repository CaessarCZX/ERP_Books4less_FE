import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  children: React.ReactNode; // elemento sobre el que aparece el tooltip
  content: React.ReactNode; // contenido del tooltip
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  delay = 150,
}) => {
  const [visible, setVisible] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    console.log('mouse enter');
    setVisible(true);
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  const toggleTouch = () => setVisible((v) => !v);

  const handleClickOutside = (e: Event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={toggleTouch}
      ref={tooltipRef}
    >
      {children}

      {visible && (
        <div
          className={`absolute z-50 rounded-lg bg-gray-800 px-3 py-2 text-sm whitespace-nowrap text-white shadow-md transition-opacity ${positionClasses[position]}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
