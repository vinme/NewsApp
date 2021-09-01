import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import getters from './getters.js'
import mutations from './mutations'
import newsApiKey from './data/NewsApiKey'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        pagination: {
            pageSize: 35,
            page: 1
        },
        apiKey: newsApiKey.key,
        newsHeadlines: false,
        topHeadlines: false,
        searchText: '',
        sources: '',
        sourceId: ''
    },
    actions,
    getters,
    mutations
});