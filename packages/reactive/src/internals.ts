import { ProxyRaw, RawShallowProxy } from "./environment";
import { isSupportObservable } from "./externals";
import { getDataNode } from "./tree";

export const createObservable = (
  target: any,
  key?: PropertyKey,
  value?: any,
  shallow?: boolean
) => {
  if (typeof value !== "object") return value;
  const raw = ProxyRaw.get(value);
  if (!!raw) {
    const node = getDataNode(raw);
    if (!node.target) node.target = target;
    node.key = key;
    return value;
  }

  // 不支持 observable
  if (!isSupportObservable(value)) return value;
  if (target) {
    const parentRaw = ProxyRaw.get(target) || target;
    const isShallowParent = RawShallowProxy.get(parentRaw);
    if (isShallowParent) return value;
  }

  // todo:   buildDataTree(target, key, value)

  return value;
};
