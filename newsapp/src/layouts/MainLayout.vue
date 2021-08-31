<template>
  <v-app id="inspire">

    <v-app-bar flat height="100" app color="white">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-layout align-center>
        <v-flex>
            <v-text-field
            color="grey"
            placeholder="Search"
            class="mt-7"
            flat
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            />
        </v-flex>

        <v-btn height="45" class="mx-2 ml-4">
            <v-icon> mdi-compare-vertical </v-icon>
        </v-btn>
        <v-btn height="45" class="ml-2" dark>
            <v-icon> mdi-plus </v-icon>
        </v-btn>
        </v-layout>
    </v-app-bar>


    <v-navigation-drawer 
    v-model="drawer"
    app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
              <v-img lazy-src="../assets/images/logo.png" src="../assets/images/logo.png" />
          </v-list-item-title>
          <v-list-item-subtitle>
            24/7 News Updates
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
         <v-list-item-avatar 
         v-if="item.title=='Recent'" 
         size="30" 
         color="orange" class="white-text subtitle-2">12</v-list-item-avatar>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from '../views/Home.vue'
export default {
  components: { HomePage },

  data: () => ({ 
    drawer: null,
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Recent', icon: 'mdi-help-box', to: '/about' },
        ],
     }),

}
</script>

<style>

</style>