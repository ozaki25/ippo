const detectHashtag = text => {
  const result = text.match(/#(.+?\s|.+$)/g);
  return result ? result.map(t => t.replace(/\s/g, '')) : [];
};

const detectUrl = text => {
  const result = text.match(
    /https?(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#\u3041-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+)/g,
  );
  return result || [];
};

export default {
  detectHashtag,
  detectUrl,
};
