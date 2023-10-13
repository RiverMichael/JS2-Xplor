export function getFromStorage(key) {
  const value = localStorage.getItem(key);

  return value;
}
