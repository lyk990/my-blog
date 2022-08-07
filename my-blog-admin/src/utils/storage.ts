export const getItem = <T>(key: string) => {
  const data = window.localStorage.getItem(key);
  if (!data) return null;
  try {
    return JSON.parse(data) as T;
  } catch (err) {
    return null;
  }
};

export const setItem = (key: string, value: object | string | null) => {
  if (typeof value == "object") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};
