import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

export default {
  loadSources(context) {
    var sources = `https://newsapi.org/v2/top-headlines/sources?&apiKey=${context.state.apiKey}`;
    Vue.http
      .get(sources)
      .then((response) => {
        console.log(response);
        context.commit("setSource", response.body);
      })
      .catch(function(error) {
        context.commit("setErrorMessage", "Error retrieving data");
      });
  },

  loadNewsHeadlines(context) {
    var urlParamsString = context.getters.urlParamsString,
      topNewsApiUrl = `https://newsapi.org/v2/top-headlines?${urlParamsString}`;
    Vue.http
      .get(topNewsApiUrl)
      .then((response) => {
        context.commit("setNewsHeadlines", response.body);
      })
      .catch(function(error) {
        context.commit("setErrorMessage", "Error retrieving data");
      });
  },
};
