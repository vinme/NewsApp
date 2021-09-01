<template>
  <v-container>
    <div class="text-center">
      <br />
      <v-progress-circular
        v-if="isLoading"
        :size="50"
        :width="7"
        color="amber"
        indeterminate
        class="center"
        absolute
      ></v-progress-circular>
    </div>
        <v-row class="text-center" v-if="getErrors">
          <v-col cols="12" md="8">
              {{getErrors}}
          </v-col>
      </v-row>
    <v-container>
      <v-row>
        <v-col v-for="article in getArticles" :key="article.title" cols="4">
          <news-card :article="article" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import NewsCard from "../components/NewsCard.vue";
export default {
  components: { NewsCard },
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: "",
    souurceId: "",
  }),
  mounted() {
    this.$store.dispatch("loadNewsHeadlines");
  },
  computed: {
    getArticles() {
      return this.$store.getters.newsHeadlines;
    },
    getErrors() {
        return this.$store.getters.errorMessage;
    }
  },
};
</script>
