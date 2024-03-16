let IDX = 36,
  HEX = ''
while (IDX--) HEX += IDX.toString(36)


/**生成unique id,最开始被用作form上 */
export function uid(len?: number) {
    let str = '',
      num = len || 11
    while (num--) str += HEX[(Math.random() * 36) | 0]
    return str
  }
  