<template>
  <div class="services-page">
    <!-- Hero Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <h1 class="hero-title">Välkommen till Comerit</h1>
        </v-col>
      </v-row>

      <!-- Centrerad Text -->
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <p class="centered-text">
            Comerit är ett nybildat konsultbolag baserat i Stockholm. Vi strävar efter att förse våra kunder med specialiserade konsulter inom IT, utbildning, management och systemutveckling. 
            <br/><br/>
            Genom att värna om våra anställda och kunder bygger vi ett starkt och hållbart företag där merit är i centrum i allt vi gör – för att tillsammans skapa värde för våra kunder. 
            Detta gör vi genom att skapa skräddarsydda lösningar för våra kunder med tydliga ramar och förväntningar, samt med vår progressiva inställning till arbetskraft och generösa arbetsvillkor.
          </p>
        </v-col>
      </v-row>

      <!-- Centered Image -->
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <img
            src="\FirstImage.jpg"
            alt="Centered Image"
            class="centered-image"
          />
        </v-col>
      </v-row>
    </v-container>

    <!-- Services Section -->
    <v-container>
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
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
}

p {
  color: white
}

.centered-text {
  text-align: center; /* Centrera texten */
  max-width: 900px; /* Valfri bredd för att begränsa textens bredd */
  margin: 0 auto; /* Centrera elementet horisontellt */
  line-height: 1.8; /* Bättre läsbarhet genom att justera radavståndet */
  font-size: 1.2rem; /* Justera storleken om nödvändigt */
  color: white; /* Gör texten vit om bakgrunden är mörk */
}

/* Image Styling */
.centered-image {
  width: 25vw; /* 30% of viewport width */
  height: auto;
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Optional: slight shadow for a subtle effect */
  transition: transform 0.3s ease;
}

.centered-image:hover {
  transform: scale(1.05); /* Optional: Slight scale effect on hover */
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.service-image {
  border-bottom: 1px solid #eeeeee;
}

.service-card .v-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
}

.service-card .v-card-text {
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #666666;
}

@media (max-width: 768px) {
  .service-card .v-card-title {
    font-size: 1.3rem;
  }

  .service-card .v-card-text {
    font-size: 0.9rem;
  }

  .hero-title {
    font-size: 2rem;
  }
}
</style>
