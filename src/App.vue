<template>
  <v-app>
    <v-app-bar app>
  <HeaderComponent/>
</v-app-bar>
    <v-main>
      <v-container style="width: 80%;">
        <router-view />
    </v-container>
    </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',

  components: {
    FooterComponent,
    HeaderComponent,
  },

  data: () => ({
    //
  }),
};
</script>
