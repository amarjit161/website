import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ThreeDContextType {
  is3DEnabled: boolean;
  toggle3D: () => void;
}

const ThreeDContext = createContext<ThreeDContextType | undefined>(undefined);

export function ThreeDProvider({ children }: { children: ReactNode }) {
  const [is3DEnabled, setIs3DEnabled] = useState<boolean>(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('threeD_enabled');
    return saved !== null ? JSON.parse(saved) : true; // Default to enabled
  });

  // Save to localStorage whenever 3D state changes
  useEffect(() => {
    localStorage.setItem('threeD_enabled', JSON.stringify(is3DEnabled));
    // Apply class to document root for global CSS access
    if (is3DEnabled) {
      document.documentElement.classList.add('threeD-enabled');
    } else {
      document.documentElement.classList.remove('threeD-enabled');
    }
  }, [is3DEnabled]);

  const toggle3D = () => {
    setIs3DEnabled((prev) => !prev);
  };

  return (
    <ThreeDContext.Provider value={{ is3DEnabled, toggle3D }}>
      {children}
    </ThreeDContext.Provider>
  );
}

export function useThreeD() {
  const context = useContext(ThreeDContext);
  if (context === undefined) {
    throw new Error('useThreeD must be used within a ThreeDProvider');
  }
  return context;
}
