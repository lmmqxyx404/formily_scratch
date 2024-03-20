import { DataNode } from "./tree";

export const ProxyRaw = new WeakMap();
export const RawNode = new WeakMap<object, DataNode>();

export const ObModelNodeSymbol = Symbol("ObModelNodeSymbol");
export const RawShallowProxy = new WeakMap()
