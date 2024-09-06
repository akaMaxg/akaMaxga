<template>
  <v-app>
    <v-main>
        <StartView/>
        <WelcomeView/>
        <ServicesView/>
        <WhyComeritView/>
        <QuoteView/>
        <FounderView/>
        <ParallaxView/>
        </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import WelcomeView from './views/WelcomeView.vue';
import StartView from './views/StartView.vue';
import QuoteView from './views/QuoteView.vue';
import ServicesView from './views/ServicesView.vue';
import ParallaxView from './views/ParallaxView.vue';
import FounderView from './views/FounderView.vue';
import WhyComeritView from './views/WhyComeritView.vue';

export default {
  name: 'App',

  components: {
    FooterComponent,
    WelcomeView,
    StartView,
    ServicesView,
    QuoteView,
    ParallaxView,
    FounderView,
    WhyComeritView
  },

  data: () => ({
    //
  }),
};
</script>
