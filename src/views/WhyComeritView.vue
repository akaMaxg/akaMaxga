<template>
  <div class="services-page">
    <!-- Hero Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <h1 class="hero-title">Varför välja Comerit?</h1>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <!-- Services Cards -->
      <v-row align="center" justify="center">
        <!-- För Företag -->
        <v-col cols="12" md="4" class="service-col">
          <v-card class="service-card">
            <v-img
              src="\Handshake.jpg"
              class="service-image"
            >
              <div class="card-content left-content">
                <v-card-title>För Företag</v-card-title>
                <ul class="text-list">
                  <li>Skräddarsydda lösningar</li>
                  <li>Teknisk expertis</li>
                  <li>Erfarenhet av komplexa uppdrag</li>
                  <li>Specialistkompetens</li>
                  <li>Personlig kontakt</li>
                </ul>
              </div>
            </v-img>
          </v-card>
        </v-col>

        <!-- För Arbetstagare -->
        <v-col cols="12" md="4" class="service-col">
          <v-card class="service-card">
            <v-img
              src="\ServiceThree.jpg"
              class="service-image"
            >
              <div class="card-content right-content">
                <v-card-title>För Arbetstagare</v-card-title>
                <ul class="text-list">
                  <li>Generösa arbetsvillkor</li>
                  <li>Utbildningsmöjligheter</li>
                  <li>Karriärutveckling</li>
                  <li>Flexibel arbetsgivare</li>
                  <li>Spännande uppdrag</li>
                  <li>Välkomnar mångfald</li>
                </ul>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    readMore(service) {
      alert(`Läs mer om ${service}`);
    }
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
  margin-bottom: 2rem;
  color: white;
}

/* Card Styling */
.service-card {
  border-radius: 15px;
  margin-bottom: 50px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  width: 25vw; /* Width of each card */
  position: relative;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.service-col {
  display: flex;
  justify-content: center;
}

.service-image {
}

.card-content {
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.left-content {
  text-align: left;
}

.right-content {
  text-align: right;
}

.text-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.text-list li {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.v-card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
}

.v-btn {
  background-color: #ffffff;
  opacity: 75%;
  color: black;
  font-weight: bold;
  border-radius: 25px;
  padding: 10px 20px;
}

.v-btn:hover {
  background-color: #cccccc;
}
</style>
