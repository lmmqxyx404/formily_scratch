import { ProxyRaw } from "./environment";
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

  // todo: 不支持 observable

  return value;
};
