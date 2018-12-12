const paging = (target, totalCount, perPage) => ({
  current: Math.ceil(target / perPage),
  total: Math.floor(totalCount / perPage),
});

export default {
  paging,
};
