<template>
  <v-layout class="overflow-visible" style="height: 70px">
    <v-spacer></v-spacer>

    <v-bottom-navigation grow class="primary-lighten-2">
      
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 1.1rem;">
        <div style="display: flex; align-items: center;">
          <v-icon color="primary" size="22">mdi-copyright</v-icon>
          <span style="margin-left: 8px;">Comerit AB</span>
        </div>
        <div style="margin-top: 4px;">SE-ON-559494-3721</div>
      </div>
      
      <v-btn href="https://www.linkedin.com/company/comerit-ab/" target="_blank">
        <v-icon color="primary" size="42">mdi-linkedin</v-icon>
      </v-btn>

      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 1.1rem;">
        <div style="display: flex; align-items: center;" >
          <v-icon color="primary" size="22">mdi-email</v-icon>
        </div>
        <div style="margin-top: 4px;">info@comerit.se</div>
      </div>
      
    </v-bottom-navigation>
  
  </v-layout>
</template>

<script>
  export default {
  }
</script>
