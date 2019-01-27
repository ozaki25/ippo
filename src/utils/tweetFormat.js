const detectHashtag = text => {
  const result = text.match(/#(.+?\s|.+$)/g);
  return result ? result.map(t => t.replace(/\s/g, '')) : [];
};

const detectUrl = text => {
  const result = text.match(/https?(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/g);
  return result || [];
};

export default {
  detectHashtag,
  detectUrl,
};
