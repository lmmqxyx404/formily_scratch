/**值不能是 null 也不能是 undefined */
export const isValid = (val: any) => val !== null && val !== undefined;

export const isArr = Array.isArray;

const toString = Object.prototype.toString;
export const isPlainObj = (val: any): val is object =>
  toString.call(val) === "[object Object]";

export const isMap = (val: any): val is Map<any, any> =>
  val && val instanceof Map;
export const isSet = (val: any): val is Set<any> => val && val instanceof Set;
export const isWeakMap = (val: any): val is WeakMap<any, any> =>
  val && val instanceof WeakMap;
export const isWeakSet = (val: any): val is WeakSet<any> =>
  val && val instanceof WeakSet;

export const isFn = (val: any): val is Function => typeof val === "function";
