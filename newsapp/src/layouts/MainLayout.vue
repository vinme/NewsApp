<template>
  <v-app id="inspire">

<top-bar></top-bar>
    <v-navigation-drawer 
    v-model="drawer"
    :drawer="drawer"
    app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
              <a href="/"><v-img lazy-src="../assets/images/logo.png" src="../assets/images/logo.png" /></a>
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
    <router-view :apiKey="apiKey"></router-view>
    <footer-view></footer-view>
    </v-main>

  </v-app>
  
</template>

<script>
import TopBar from '../components/TopBar.vue'
import HomePage from '../views/Home.vue'
import FooterView from './FooterView.vue'

export default {
    props: ['apiKey', 'drawer'],
    components: { HomePage, FooterView, TopBar },

    data: () => ({ 
        drawer: null,
        items: [
            { title: 'Home', icon: 'mdi-view-dashboard', to: '/' },
            { title: 'Recent', icon: 'mdi-help-box', to: '/about' },
            ],
        }),

}
</script>

<style>

</style>