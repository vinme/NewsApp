import Vue from 'vue'

export default {
    setNewsHeadlines(state, articles) {
        Vue.set(state, 'newsHeadlines', articles);
    },
    setTopHeadlines(state, articles) {
        Vue.set(state, 'topHeadlines', articles);
    },
    setPage(state, page) {
        Vue.set(state.pagination, 'page', page);
    },
    searchText(state, searchText) {
        Vue.set(state, 'searchText', searchText);
    },
    setSource(state, sources) {
        Vue.set(state, 'sources', sources);
    },
    setSourceId(state, sourceId) {
        Vue.set(state, 'sourceId', sourceId);
    },
    setErrorMessage(state, errorMessage) {
        Vue.set(state, 'errorMessage', errorMessage);
    }
};