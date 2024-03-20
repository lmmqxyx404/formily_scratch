import {
  isValid,
  isFn,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isPlainObj,
  isArr,
} from "./checkers";

const RAW_TYPE = Symbol('RAW_TYPE')
const OBSERVABLE_TYPE = Symbol('OBSERVABLE_TYPE')

export const isSupportObservable = (target: any) => {
  if (!isValid(target)) return false;
  if (isArr(target)) return true;
  if (isPlainObj(target)) {
    if (target[RAW_TYPE]) {
      return false;
    }
    if (target[OBSERVABLE_TYPE]) {
      return true;
    }
    if ("$$typeof" in target && "_owner" in target) {
      return false;
    }
    if (target["_isAMomentObject"]) {
      return false;
    }
    if (target["_isJSONSchemaObject"]) {
      return false;
    }
    if (isFn(target["toJS"])) {
      return false;
    }
    if (isFn(target["toJSON"])) {
      return false;
    }
    return true;
  }
  if (isMap(target) || isWeakMap(target) || isSet(target) || isWeakSet(target))
    return true;
  return false;
};
