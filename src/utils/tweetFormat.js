const detectHashtag = text => {
  const result = text.match(/#(.+?\s|.+$)/g);
  return result ? result.map(t => t.replace(/\s/g, '')) : [];
};

export default {
  detectHashtag,
};
