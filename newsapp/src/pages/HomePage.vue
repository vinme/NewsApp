<template>
      <v-container>
        <v-row>
          <v-col
            v-for="article in articles"
            :key="article.title"
            cols="4"
          >
            <news-card :article="article" />
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import NewsCard from '../layouts/NewsCard.vue';
export default {
  computed: {
    articles () {
      return this.$store.state.articles
    }
  },
  components: { NewsCard },
  
    
}
</script>

<style>

</style>