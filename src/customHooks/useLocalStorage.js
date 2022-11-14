import { useState, useEffect } from "react";

function getObject (key, initialValue) {
  const savedObject = localStorage.getItem(key);
  const initial = JSON.parse(savedObject);
  return initial || initialValue;
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getObject (key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
