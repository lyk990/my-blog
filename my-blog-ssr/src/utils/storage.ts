// localStorage
export const getItem = <T>(key: string) => {
  const data = window.localStorage.getItem(key);
  if (!data) return null;
  return data as any;
};

export const setItem = (key: string, value: object | string | null) => {
  if (typeof value == 'object') {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};

// sessionStorage
export const sessionGetItem = <T>(key: string) => {
  const data = window.sessionStorage.getItem(key);
  if (!data) return null;
  return data as any;
};

export const sessionSetItem = (key: string, value: object | string | null) => {
  if (typeof value == 'object') {
    value = JSON.stringify(value);
  }
  window.sessionStorage.setItem(key, value);
};
