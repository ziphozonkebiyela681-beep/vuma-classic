import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ImageSlots {
  heroBg?: string;
  customLogo?: string;
  // Menu items:
  'beef-stew'?: string;
  'hardbody-chicken'?: string;
  'mogodu'?: string;
  'inyama-yenhloko'?: string;
  'liver'?: string;
  'quarter-chicken-meal'?: string;
  'half-chicken-meal'?: string;
  'full-chicken-meal'?: string;
  'steak-meal'?: string;
  'wors-meal'?: string;
  'steak-and-wors-meal'?: string;
  // Customer & Ugqoko Platter showcase slot:
  customersPlatter?: string;
  // Outside of the place / storefront slot:
  outsideStorefront?: string;
  // Vibe & Ugqoko slots:
  ugqokoDombolo?: string;
  braaiMaster?: string;
  kitchenBuffet?: string;
  mabonengVibe?: string;
  // Allow dynamic slot keys:
  [key: string]: string | undefined;
}

interface ImageCustomizerContextType {
  customImages: ImageSlots;
  setSlotImage: (slot: string, dataUrl: string) => void;
  resetSlot: (slot: string) => void;
  resetAll: () => void;
  isManagerOpen: boolean;
  setIsManagerOpen: (open: boolean) => void;
  activeSlotToEdit: string | null;
  openManagerForSlot: (slot: string) => void;
}

const STORAGE_KEY = 'vuma_custom_restaurant_photos_v2';

const ImageCustomizerContext = createContext<ImageCustomizerContextType | undefined>(undefined);

export const ImageCustomizerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customImages, setCustomImages] = useState<ImageSlots>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read from localStorage:', e);
    }
    return {};
  });

  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [activeSlotToEdit, setActiveSlotToEdit] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customImages));
    } catch (e) {
      console.warn('Could not save to localStorage (quota limit reached?):', e);
    }
  }, [customImages]);

  const setSlotImage = (slot: string, dataUrl: string) => {
    setCustomImages((prev) => ({
      ...prev,
      [slot]: dataUrl
    }));
  };

  const resetSlot = (slot: string) => {
    setCustomImages((prev) => {
      const next = { ...prev };
      delete next[slot];
      return next;
    });
  };

  const resetAll = () => {
    setCustomImages({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const openManagerForSlot = (slot: string) => {
    setActiveSlotToEdit(slot);
    setIsManagerOpen(true);
  };

  return (
    <ImageCustomizerContext.Provider
      value={{
        customImages,
        setSlotImage,
        resetSlot,
        resetAll,
        isManagerOpen,
        setIsManagerOpen,
        activeSlotToEdit,
        openManagerForSlot
      }}
    >
      {children}
    </ImageCustomizerContext.Provider>
  );
};

export const useImageCustomizer = () => {
  const context = useContext(ImageCustomizerContext);
  if (!context) {
    throw new Error('useImageCustomizer must be used within an ImageCustomizerProvider');
  }
  return context;
};
