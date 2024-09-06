<template>
  <div class="services-page">
    <!-- Hero Section -->

    <v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <h1 class="hero-title">Om oss</h1>
        </v-col>
      </v-row>

    </v-container>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <p class="centered-text">
            På Comerit, är merit en central pelare i allt vi gör. Vi värdesätter den kompetens och erfarenhet som våra medarbetare bidrar med. Vi strävar också efter att ständigt förbättra våra kvalifikationer. Vår vision är att genom högkvalitativt arbete, kompetensspridning och engagemang bygga förtroende och skapa lösningar som inte bara möter, utan överträffar marknadens krav.
          </p>
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

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
}
.centered-text {
  text-align: center; /* Centrera texten */
  max-width: 900px; /* Valfri bredd för att begränsa textens bredd */
  margin: 0 auto; /* Centrera elementet horisontellt */
  line-height: 1.8; /* Bättre läsbarhet genom att justera radavståndet */
  font-size: 1.2rem; /* Justera storleken om nödvändigt */
  color: white; /* Gör texten vit om bakgrunden är mörk */
}
</style>
