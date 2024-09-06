<template>
  <v-container class="about-section" fluid>
    <v-row align="center" justify="center">
      <!-- Bilden -->
      <v-col cols="6" md="2" class="text-center">
        <v-img
          src="\ProfilBild.jpg"
          alt="Blog image"
          class="about-image"
        ></v-img>
      </v-col>

      <!-- Texten -->
      <v-col cols="6" md="1" class="text-center">
        <div class="about-text">
          <h1>Grundare & VD</h1>
          <h1 class="mindre-text">Max Güclü</h1>
          <p>
            Jag grundade Comerit under 2024 med visionen att skapa bryggor mellan behov och kompetens. 
            Med en gedigen bakgrund inom systemutveckling inom försvarsindustrin samt en passion för att driva 
            strategiska initiativ och utvecklingsprojekt ser jag möjligheter att skapa värdefulla samarbeten där människan är i fokus.</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.about-section {
  background-color: #000000;
  padding: 3rem 0; /* Extra padding för mer utrymme */
  color: white;
}

/* Bild */
.about-image {
  border-radius: 15px;
  object-fit: cover;
  width: 100%;
  max-width: 400px; /* Maxbredd för att minska bildstorlek */
  height: auto;
  margin: 0 auto; /* Centrera bilden */
}

/* Text */
.about-text h1 {
  font-size: 2rem; /* Mindre rubrikstorlek */
  color: white;
  text-align: left;
}

h1.mindre-text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.about-text p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: white;
  max-width: 400px; /* Maxbredd för texten */
  margin: 0 auto; /* Centrera texten */
  text-align: left; /* Centrera textinnehållet */
}

/* Anpassning för mindre skärmar */
@media (max-width: 768px) {
  .about-text h1 {
    font-size: 1.8rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  .about-image {
    margin-bottom: 20px;
  }
}
</style>
