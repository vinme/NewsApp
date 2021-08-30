<template>

<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
        class="white--text align-end"
        height="200px"
        back
        :src="article.urlToImage == null ? 'https://via.placeholder.com/200' : article.urlToImage"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.7)"
    >

    <v-btn
                color="#dce0e6"
                text
                top
                right
                absolute
            >
    <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
    <v-card-title v-card-title><a href="/news-detail/1">{{article.title}}</a></v-card-title>
    <transition name="slide-fade">
        <v-card-subtitle v-if="hover"><a href="/news-detail/1">{{article.description}}</a></v-card-subtitle>
        </transition>

    </v-img>

    
    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>



  </v-card>

</template>

<script>
export default {
    name: 'NewsCard',
    props: ['article'],
    data() {
    return {
      hover: false,
    };
  }
}
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.overlay-image{
    object-fit: cover;
  filter: brightness(.4);
    }
a:link {
  color: #FFFFFF;
  text-decoration: none;
}
</style>