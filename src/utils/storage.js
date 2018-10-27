export const getStorage =(key) => JSON.parse(localStorage.getItem(key));

export const setStorage  =(key,val) => localStorage.setItem(key,JSON.stringify(val));
