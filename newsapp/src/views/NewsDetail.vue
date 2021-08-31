<template>
  <v-container>
    <v-breadcrumbs :items="article.items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
      <v-row align="center"
      justify="center">
      <v-col>
            <h1>{{article.title}}</h1>
            <div class="text-caption font-italic">{{article.publishedAt | formatDate}}</div>
            <div class="text-caption font-italic">{{article.author}}</div>
            <v-img v-if="article.urlToImage" :src="article.urlToImage"></v-img>
            <br />
            <p class="text-justify">{{article.content}}
                <a :href="article.url">Read More</a>
            </p>
      </v-col>
  </v-row>
  </v-container>

</template>

<script>
export default {
    computed: {
    article () {
        var title = decodeURIComponent(this.$route.params.id);
        var article = this.$store.state.articles.find(x => x.title === title);
        article.items = [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: title,
          disabled: true,
          href: 'breadcrumbs_link_1',
        }
      ]
        return article;
    },
  },
}
</script>

<style>

</style>