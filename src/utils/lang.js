/**
 * 获得一个每一项为 {generator( {index} )} 的长度为 {length} 的数组
 * 默认 generator 为 i => i
 * @method generateList
 * @author Yoonthe
 * @param {Number} length
 * @return {Object[]} list
 */
const generateList = (length, generator = i => i) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(generator(i));
  }
  return arr;
};

/**
 * @method getValueSalf
 * @param {Object} obj
 * @param {String} key
 * @param {Object} defaultVal
 * @return {Object} obj[key] || defaultVal
 */
const getValueSalf = (obj, key, defaultVal = '') => (obj ? (obj[key] || defaultVal) : defaultVal);

export {
  generateList,
  getValueSalf,
};

export const xyToId = (x, y) => (x << 16) + y;
export const idToXy = id => ({ x: id >>> 16, y: id & 0x0ffff });

export const getMapAndOptionsFromList = (list = [], labelKey = 'displayName', valueKey = 'id') => {
  const map = {};
  const options = [];
  list.forEach((item) => {
    const label = item[labelKey];
    const value = item[valueKey];
    map[value] = label;
    options.push({ label, value });
  });
  return { map, options };
};

export const filtConditionsEmpty = (c) => {
  const t = {};
  Object.keys(c).forEach((k) => {
    if (c[k] === '' || typeof c[k] === 'undefined' || toString.call(c[k]) === '[object Null]' || (Array.isArray(c[k] && c[k].length === 0))) {
      return;
    }
    t[k] = c[k];
  });
  return t;
};
