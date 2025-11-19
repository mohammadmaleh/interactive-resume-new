import { useState, useCallback, useRef, useEffect } from 'react';

interface TooltipState {
  text: string;
  show: boolean;
  x: number;
  y: number;
}

export const useTooltip = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    text: '',
    show: false,
    x: 0,
    y: 0,
  });

  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const showTooltip = useCallback((text: string, x: number, y: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setTooltip({ text, show: true, x, y });
  }, []);

  const hideTooltip = useCallback(() => {
    setTooltip((prev) => ({ ...prev, show: false }));
  }, []);

  const updatePosition = useCallback((x: number, y: number) => {
    setTooltip((prev) => ({ ...prev, x, y }));
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current as any);
      }
    };
  }, []);

  return { tooltip, showTooltip, hideTooltip, updatePosition };
};

