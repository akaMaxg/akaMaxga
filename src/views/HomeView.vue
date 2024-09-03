<template>
  <div class="services-page">

    <!-- Hero Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <h1 class="hero-title">Välkommen till Comerit</h1>
        </v-col>
      </v-row>
    </v-container>

    <!-- Services Section -->
    <v-container>
      <v-row>
        <v-col cols="12" md="4" v-for="service in services" :key="service.goal">
          <v-card class="service-card">
            <v-img :src="service.image" class="service-image" height="200px" cover></v-img>
            <v-card-title class="primary--text">{{ service.goal }}</v-card-title>
            <v-card-text>{{ service.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          goal: "Att leda tekniska innovationer",
          description: `På Comerit är vår vision att driva tekniska innovationer framåt och skapa lösningar som inte bara möter dagens behov utan också framtidens utmaningar. Vi strävar efter att kombinera vår djupa tekniska expertis med en passion för att utveckla hållbara och skalbara system.`,
          image: "https://images.pexels.com/photos/163142/glasses-notebook-wooden-business-163142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          goal: "Kompetensspridning och utbildning",
          description: `Vi på Comerit tror starkt på att dela med oss av vår kunskap och kompetens. Vår vision är att bli en ledande aktör inom utbildning och kompetensutveckling, där vi ger individer och organisationer verktygen att växa och utvecklas i takt med teknologins framsteg. Genom skräddarsydda utbildningsprogram och workshops säkerställer vi att våra partners alltid ligger steget före i den snabba IT-världen.`,
          image: "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          goal: "Innovativa IT-lösningar",
          description: `Vår vision är att ligga i framkant när det gäller att utveckla och implementera innovativa IT-lösningar som driver våra kunders verksamhet framåt. Vi strävar efter att erbjuda anpassade och framtidssäkra IT-lösningar som inte bara löser dagens utmaningar utan också banar väg för morgondagens möjligheter. Genom att kombinera vår tekniska expertis med ett djupt engagemang för kundernas framgång, skapar vi lösningar som gör skillnad.`,
          image: "https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ]
    };
  }
};
</script>

<style scoped>
.services-page {
  padding: 2rem;
  background-color: #f9f9f9;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--v-primary-darken-1);
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
