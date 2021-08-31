<template>
  <div class="container">

    <v-row>
        <v-col
        class="d-flex"
        cols="12"
        md="8"
        >
        
        <v-autocomplete
            v-model="model"
            :loading="showloader"
            :search-input.sync="search"
            color="white"
            hide-no-data
            hide-selected
            item-text="Description"
            item-value="API"
            label="Search for news"
            placeholder="Start typing to Search"
            prepend-icon="mdi-newspaper"
            return-object
            outlined
            dense
        >
      </v-autocomplete>
        </v-col>
        <v-col
        class="d-flex"
        cols="12"
        md="4"
        >
        <v-select
          :items="sources"
          item-text="name"
          label="Outlined style"
          v-model="defaultSelected"
          outlined
        ></v-select>
        </v-col>
    </v-row>
    
<div class="text-center">
    <v-progress-circular
        v-if="isBusy"
      :size="50"
      :width="7"
      color="amber"
      indeterminate
      class="center"
    ></v-progress-circular>
</div>
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

    <div ref="infinitescrolltrigger" id="scroll-trigger">
      <i v-if="showloader" class="fas fa-spinner fa-spin"></i>
    </div>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue';

  export default {
    components:{NewsCard},
    props: [
      'apiKey'
    ],
    data: () => {
      return {
        apiUrl: '',
        isBusy: false,
        showloader: false,
        currentPage: 1,
        totalResults: 0,
        maxPerPage: 20,
        searchword: '',
        articles: [],
        sources:[],
        country: 'us',
        descriptionLimit: 60,
        isLoading: false,
        model: null,
        search: null,
        defaultSelected: {
            name: "All",
        }  
      }
    },
    computed: {
      pageCount() {
        return Math.ceil(this.totalResults/this.maxPerPage);
      },
    },
      
    methods: {
      navTo(url) {
        window.open(url);
      },
      resetData() {
        this.currentPage = 1;
        this.articles = [];
      },
      fetchSource(){
        this.isLoading = true
         this.apiUrl = 'https://newsapi.org/v2/top-headlines/sources?apiKey=' + this.apiKey;
        let req  = new Request(this.apiUrl);
        this.sources.push({id: '', name: 'All'})
        fetch(req)
          .then((resp) => resp.json())
          .then((data) => {
            data.sources.forEach(element => {
              this.sources.push(element);
            });
          })
          .catch((error) => {
            console.log(error);
          })
      },
      fetchSearchNews() {
        if(this.searchword !== '')
        {        
          this.apiUrl = 'https://newsapi.org/v2/everything?q=' + this.searchword +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + this.apiKey;
          this.isBusy = true;
          this.resetData();
          this.fetchData();
        }
        else {
          //this.fetchTopNews();
        }
      },
      fetchTopNews() {
        this.apiUrl = 'https://newsapi.org/v2/top-headlines?country=' + this.country +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + this.apiKey;
        this.isBusy = true;
        this.searchword = '';
        
        this.resetData();
        this.fetchData();
      },
      fetchData() {
        let req  = new Request(this.apiUrl + '&page=' + this.currentPage);
        fetch(req)
          .then((resp) => resp.json())
          .then((data) => {
            this.totalResults = data.totalResults;
            data.articles.forEach(element => {
              this.articles.push(element);
            });
            this.isBusy = false;
            this.showloader = false;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      scrollTrigger() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
              this.showloader = true;
              this.currentPage += 1;
              this.fetchData();
            }
          });
        });
        observer.observe(this.$refs.infinitescrolltrigger);
      }
    },

    watch: {
    model (val) {
        console.log(val);
        if (val != null) this.tab = 0
        else this.tab = null
        
      },
      search (val) {
        if(val !== '')
        {        
          this.apiUrl = 'https://newsapi.org/v2/top-headlines?q=' + val +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + this.apiKey;
          this.isBusy = true;
          this.resetData();
          this.fetchData();
        }
      },
    },

    created() {
      //this.fetchTopNews();
      this.fetchSource();
    },
    mounted() {
      this.scrollTrigger();
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    .searchbar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 60px;
      font-size: 1.6rem;
      input {
        padding: 0 100px 0 20px;
        margin: 0;
        width: calc(100% - 120px);
        height: 60px;
        border: none;
        font-size: 2rem;
        color: #fff;
        background-color: #222;
        &:focus {
          outline: none;
        }
      }
      .search-icons {
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
        i {
          margin-left: 15px;
          cursor: pointer;
        }
      }
    }
    .result-list {
      padding-top: 60px;
    }
    article {
      display: grid;
      grid-template-columns: 200px auto 40px;
      grid-template-rows: 100px;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      cursor: pointer;
      header {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img {
          max-width: 100%;
          height: auto;
        }
        i {
          font-size: 2rem;
        }
      }
      section {
        margin: 0;
        padding: 10px;
        height: 100px;
      }
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        color: #888;
      }
    }
    #scroll-trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
      font-size: 1.6rem;
    }
  }
</style>