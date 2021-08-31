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
import NewsCard from '../components/NewsCard.vue';

export default {
  computed: {
    articles () {
      return this.$store.state.articles
    }
  },
  components: { NewsCard },
  methods: {
  updateMessage: async function () {
    this.message = 'updated'
    console.log(this.$el.textContent) // => 'not updated'
    await this.$nextTick()
    console.log(this.$el.textContent) // => 'updated'
  }
  }    
}
</script>

<style>

</style>