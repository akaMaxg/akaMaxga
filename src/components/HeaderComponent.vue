<template>
  <v-app>
    <v-container>
      <v-app-bar color="primary" :elevation="1">
        <template v-slot:prepend>
        </template>
      
        <v-app-bar-title >
          <span style="color: orange;">&lt; </span>
          <span style="color: white;">Comerit </span>
          <span style="color: orange;"> /&gt;</span>
        </v-app-bar-title>
      
      
          <v-btn color="primary-lighten-2" :to="'/'">
          Startsida
          </v-btn>

          <v-btn :to="'/about'">
          Om oss
          </v-btn>
          
          <v-btn :to="'/career'">
          Karriär
          </v-btn>

      </v-app-bar>
    </v-container>
  </v-app>
</template>
