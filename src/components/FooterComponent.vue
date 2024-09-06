<template>
  <v-container fluid class="contact-page">
    <!-- Kontaktsektion -->
    <v-row>
      <v-col cols="12" md="10">
        <h2 class="contact-title">Comerit AB</h2>

        <p class="captcha-info">
          SE-ON-559494-3721 <br/>
          <a href="https://www.linkedin.com/company/comerit-ab/">LinkedIn</a> 
        </p>
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
.contact-page {
  background-color: #000;
  color: white;
  padding: 2rem;
}

.contact-title {
  font-size: 2rem;
  font-weight: bold;
}

.contact-description {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.v-text-field, .v-textarea {
  background-color: #333; /* Mörk bakgrund för formulärfält */
  color: white;
}

.v-text-field input, .v-textarea textarea {
  color: white;
}

.captcha-info {
  font-size: 0.8rem;
  margin-top: 1rem;
  color: #aaa;
}

.captcha-info a {
  color: white;
  text-decoration: underline;
}

.company-info {
  margin-top: 2rem;
  display: flex;
  justify-content: right;
}

.company-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.company-info p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.company-info a {
  color: white;
  text-decoration: none;
}

.company-info a:hover {
  text-decoration: underline;
}
</style>