import { useState, useEffect } from "react";

const getStoradgeValue = <T>(key: string, defaultValue: T) => {
  const saved = localStorage.getItem(key);
  if (saved === null) {
    return defaultValue;
  }
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(() => {
    return getStoradgeValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
