<template>
  <v-container fluid class="career-page">

        <v-card class="pa-5">
          <!-- Text Content -->
          <v-card-text>
            <h1 class="font-weight-bold text-center">Karriär på Comerit</h1>
            <p class="text-center">
              Comerit AB är ett nystartat företag med stora ambitioner. Vi söker ständigt efter talangfulla och engagerade individer som vill vara med och skapa nästa generations IT-lösningar.
            </p>
            <p class="text-center">
              Är du driven och har erfarenhet inom IT, systemutveckling eller utbildning? Vi välkomnar spontana ansökningar och ser fram emot att lära känna dig. Din kompetens kan vara precis vad vi söker.
            </p>
            <p class="text-center">
              Skicka din ansökan eller frågor till <a href="mailto:info@comerit.se" class="email-link">info@comerit.se</a>.
            </p>
          </v-card-text>

          <!-- Image Content -->
          <v-img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Person som jobbar med IT"
            class="mt-5"
            height="300"
            contain
          ></v-img>
        </v-card>
  </v-container>
</template>

<style scoped>
.career-page {
  background-color: #f8f9fa;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
}

.v-card {
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  color: #333;
}

p {
  font-size: 1.1rem;
  color: #555;
}

.email-link {
  color: #007bff;
  text-decoration: none;
}

.email-link:hover {
  text-decoration: underline;
}

.v-img {
  width: 100%;
  border-radius: 8px;
}
</style>
