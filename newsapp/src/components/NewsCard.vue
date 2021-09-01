<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      back
      :src="
        article.urlToImage == null
          ? 'https://via.placeholder.com/200'
          : article.urlToImage
      "
      @mouseover="hover = true"
      @mouseleave="hover = false"
      gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.7)"
    >
      <v-btn color="#dce0e6" text top right absolute>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <v-card-subtitle>{{ article.publishedAt | formatDate }}</v-card-subtitle>
      <v-card-title>
        <a :href="article.url">{{ article.title | excerpt }}</a></v-card-title
      >
      <transition name="slide-fade">
        <v-card-subtitle v-if="hover"
          ><a :href="article.url">{{
            article.description | excerpt
          }}</a></v-card-subtitle
        >
      </transition>
    </v-img>

    <v-card-actions>
      <v-btn color="orange" text @click="editItem(article)">
        Edit
      </v-btn>
      <a>
        <v-btn color="orange" text :href="this.article.url">
          Open
        </v-btn>
      </a>
    </v-card-actions>

    <edit-headline
      :editedId="editedId"
      :dialog.sync="dialog"
      @close-dialog="
        editedId = null;
        dialog = false;
      "
    />
  </v-card>
</template>

<script>
import EditHeadline from "../components/EditHeadline.vue";
export default {
  name: "NewsCard",
  props: ["article"],
  data() {
    return {
      hover: false,
      editHeadline: false,
      dialog: false,
      myDialogVisible: false,
      editedId: null,
      dialog: false,
    };
  },
  components: {
    EditHeadline,
  },
  methods: {
    addItem() {
      this.dialog = true;
    },
    editItem(item) {
      this.editedId = item.title;
      this.dialog = true;
    },
    updateheadline() {
      alert("h ah aha");
    },
  },
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.overlay-image {
  object-fit: cover;
  filter: brightness(0.4);
}
a:link,
a:visited {
  color: #ffffff;
  text-decoration: none;
}
</style>
