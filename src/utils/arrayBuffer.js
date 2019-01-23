function str2buf(str) {
  return Uint8Array.from(window.atob(str), c => c.charCodeAt(0));
}

function buf2str(buf) {
  let str = '';
  if (!(buf.constructor === Uint8Array)) buf = new Uint8Array(buf);
  buf.map(x => (str += String.fromCharCode(x)));
  return str;
}

export default {
  str2buf,
  buf2str,
};
