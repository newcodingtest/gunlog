export const substrToByte = (target: string, maxByte: number) => {
    let buffer = 0;
    let idx = 0;
    while (true) {
      const unicode = target.charCodeAt(idx);
      buffer += unicode > 127 ? 2 : 1;
  
      if (buffer > maxByte) break;
      idx++;
    }
    return target.substring(0, idx);
}
export const getByteLength = (target: string) => {
    let buffer = 0;
    let idx = 0;
    while (true) {
      const unicode = target.charCodeAt(idx);
      buffer += unicode > 127 ? 2 : 1;
  
      idx++;

      if(target.length-1 == idx){
        break;
      }
    }
    return buffer
}
export const removeHtml = (target: string) => {
    return target.replace(/(<([^>]+)>)/ig,"")
}