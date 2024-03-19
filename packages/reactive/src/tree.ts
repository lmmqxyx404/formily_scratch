import { ObModelNodeSymbol, RawNode } from "./environment";

export class DataNode {
  target: any;
  key: PropertyKey;
  value: any;

  constructor(target: any, key: PropertyKey, value: any) {
    this.target = target;
    this.key = key;
    this.value = value;
  }
}

/**获取数据对应的节点 */
export const getDataNode = (raw: any) => {
  if (raw?.[ObModelNodeSymbol]) {
    return raw[ObModelNodeSymbol];
  }
  return RawNode.get(raw);
};
