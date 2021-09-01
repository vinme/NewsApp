<template>
  <v-row>
    <v-app-bar flat height="100" app color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-col class="d-flex" col="12" md="8" sm="8" xs="6">
        <v-autocomplete
          v-model="model"
          :loading="isLoading"
          :search-input.sync="search"
          hide-no-data
          hide-selected
          item-text="Description"
          item-value="API"
          label="News"
          placeholder="Start typing to Search"
          prepend-icon="mdi-database-search"
          return-object
          outlined
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex" cols="12" md="3" sm="3" xs="6">
        <v-select
          :items="sources"
          item-text="name"
          label="Source"
          v-model="defaultSelected"
          outlined
          v-on:change="filterNews"
          return-object
        ></v-select>
      </v-col>
    </v-app-bar>
  </v-row>
</template>

<script>
export default {
  name: "TopToolbar",
  props: {
    imgUrl: String,
    drawer: Boolean,
  },
  data() {
    return {
      drawer: null,
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: "",
      searchText: this.$store.getters.searchText,
      defaultSelected: {
        name: "All",
        id: "",
      },
    };
  },
  methods: {
    onToggleNavigationIconClick() {
      this.$emit("ToggleNavigationDrawer");
    },
    filterNews() {
      this.$store.commit("searchText", this.searchText);
      if (this.defaultSelected.id !== null && this.defaultSelected.id != "") {
        this.$store.commit("setSourceId", this.defaultSelected.id);
      }
      this.$store.dispatch("loadNewsHeadlines");
    },
  },
  computed: {
    getArticles() {
      return this.$store.getters.articles;
    },
    sources() {
      return this.$store.getters.sources.sources;
    },
  },
  watch: {
    search(val) {
      this.$store.commit("searchText", val);
      if (this.defaultSelected.id !== null && this.defaultSelected.id != "") {
        this.$store.commit("setSourceId", this.defaultSelected.id);
      }
      this.$store.dispatch("loadNewsHeadlines");
    },
  },
  mounted() {
    this.$store.commit("sources");
    this.$store.dispatch("loadSources");
  },
};
</script>
<style scoped></style>
