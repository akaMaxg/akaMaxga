<template>
  <div class="hero-section">
    <!-- Video Background -->
    <video autoplay muted loop playsinline class="background-video">
      <source src="\FirstVid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="overlay">
      <!-- Fixed button in the top right corner -->
      <div class="top-right-buttons">
      <p>Comerit AB</p>  
      </div>
      <div class="content">
        <h1>Comerit AB</h1>
        <p>Ett konsultbolag med hjärtat på rätt ställe.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // No additional method needed for mailto
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for contrast */
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-right-buttons {
  position: fixed; /* Fixerar knappen i visningsporten */
  top: 20px;
  right: 20px;
  z-index: 100; /* Se till att knappen alltid ligger över andra element */
}

.content {
  text-align: center;
  color: white;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color:white;
}

a.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: black;
  background-color: #d3d3d3;
  border: 2px solid #000000;
  border-radius: 15px;
  text-decoration: none;
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
  cursor: pointer;
}

a.btn:hover {
  background-color: #b6b4b3;
}
</style>
