export default {
  newsHeadlines(state) {
    return state.newsHeadlines.articles;
  },
  topHeadlines(state) {
    return state.topHeadlines.articles;
  },
  errorMessage(state) {
    return state.errorMessage;
  },
  page(state) {
    return state.pagination.page;
  },

  pageSize(state) {
    return state.pagination.pageSize;
  },

  totalResults(state) {
    return state.newsHeadlines.totalResults;
  },

  pageCount(state, getters) {
    var pageCount = 0;
    if (!isNaN(getters.totalResults) && !isNaN(getters.pageSize)) {
      pageCount = Math.ceil(getters.totalResults / getters.pageSize);
    }
    return pageCount;
  },

  urlParamsString(state, getters) {
    var paramsObj = {};
    paramsObj.page = getters.page;
    paramsObj.pageSize = getters.pageSize;
    paramsObj.language = "en";
    if (state.searchText) paramsObj.q = state.searchText;
    paramsObj.apiKey = state.apiKey;
    if (state.sourceId) paramsObj.sources = state.sourceId;
    return Object.entries(paramsObj)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
  },

  searchText(state) {
    return state.searchText;
  },
  sources(state) {
    return state.sources;
  },
  sourceId(state) {
    return state.sourceId;
  },
};
