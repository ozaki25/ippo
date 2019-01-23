function str2buf(str) {
  return Uint8Array.from(window.atob(str), c => c.charCodeAt(0));
}

function buf2str(buf) {
  if (!(buf.constructor === Uint8Array)) buf = new Uint8Array(buf);
  return buf.map(x => String.fromCharCode(x)).join(',');
}

export default {
  str2buf,
  buf2str,
};
