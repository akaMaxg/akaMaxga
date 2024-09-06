<template>
  <div class="services-page">
    <!-- Hero Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8">
          <v-card class="founder-card">
            <v-row no-gutters>
              <!-- Bildsektion -->
              <v-col cols="12" md="4">
                <v-img
                  :src="founderImage"
                  alt="Grundare"
                  class="founder-image"
                  height="200px"
                ></v-img>
              </v-col>
  
              <v-col cols="12" md="8">
                <v-card-title class="founder-name">{{ founderName }}</v-card-title>
                <v-card-subtitle class="founder-title">{{ founderTitle }}</v-card-subtitle>
                <v-card-text class="founder-description">
                  {{ founderDescription }}
                </v-card-text>
  
                <!-- Kontaktinformation -->
                <v-card-actions>
                  <p class="founder-contact">{{ founderEmail }}</p>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.services-page {
  padding: 2rem;
  background-color: #000000;
}

.hero-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  max-width: 1200px; /* Begränsar textens bredd */
  margin: 0 auto; /* Centrera hela textblocket horisontellt */
  text-align: center; /* Centrera texten inuti elementet */
}

.centered-text {
  font-size: 1.5rem;
  color: white;
  text-align: center;
  margin-top: rem; /* Lägger lite avstånd mellan text och resten av layouten */
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .centered-text {
    font-size: 1rem;
  }
}
</style>
