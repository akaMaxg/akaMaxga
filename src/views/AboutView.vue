<template>
  <div class="management-page">

    <!-- Management Group Section -->
    <section class="management-group">
      <h1>Grundare</h1>

      <div class="leader" v-for="leader in leaders" :key="leader.name">
        <div class="leader-image">
          <img :src="leader.image" :alt="leader.name" />
        </div>
        <div class="leader-info">
          <h2>{{ leader.name }}</h2>
          <h3>{{ leader.title }}</h3>
          <p>{{ leader.description }}</p>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-group">
      <h1>Vision</h1>

      <div class="vision" v-for="vision in visions" :key="vision.goal">
        <div class="vision-image">
          <img :src="vision.image" :alt="vision.goal" />
        </div>
        <div class="vision-info">
          <h2>{{ vision.goal }}</h2>
          <p>{{ vision.description }}</p>
        </div>
      </div>
    </section>

    <!-- References Section -->
    <section class="references-group">
      <h1>Referenser</h1>

      <div class="reference" v-for="reference in references" :key="reference.company">
        <div class="reference-image">
          <img :src="reference.image" :alt="reference.company" />
        </div>
        <div class="reference-info">
          <h2>{{ reference.company }}</h2>
          <h3>{{ reference.role }}</h3>
          <p><strong>Nivå:</strong> {{ reference.level }}</p>
          <p><strong>Uppgift:</strong> {{ reference.task }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leaders: [
        {
          name: "Max Guclu",
          title: "VD & Senior konsult",
          description: `Max grundade Comerit under 2024, där han leder verksamheten med en gedigen bakgrund inom systemutveckling och ingenjörskonst, särskilt inom försvarsindustrin. Med en passion för att bygga framgångsrika lösningar och driva komplexa tekniska projekt har Max en imponerande meritlista från tidigare ledande positioner. Han har lett strategiska initiativ och utvecklingsprojekt hos framstående företag och myndigheter inom försvar och säkerhet, däribland CAG Syntell och FMV. Max kombinerar en djup teknisk förståelse med en förmåga att skapa effektiva processer och driva innovation.`,
          image: "https://media.licdn.com/dms/image/v2/D4D03AQGVvKHPAmFTkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696252749357?e=1730937600&v=beta&t=z4-9ZqMz-SMsWzoRlyIE3_Exts34MgLtE3UQmltNnbs"
        }
      ],
      visions: [
        {
          goal: "Merit",
          description: `På Comerit är merit en central pelare i allt vi gör. Vi värdesätter den kompetens och erfarenhet som våra medarbetare bidrar med, och vi strävar efter att ständigt förbättra våra kvalifikationer. Vår vision är att genom högkvalitativt arbete och tekniska innovationer bygga förtroende och skapa lösningar som inte bara möter utan överträffar marknadens krav. Genom att hålla oss till de högsta standarderna säkerställer vi att varje projekt vi genomför lever upp till vårt rykte om excellens.`,
          image: "https://images.pexels.com/photos/163142/glasses-notebook-wooden-business-163142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          goal: "Kompetensspridning",
          description: `Kompetensspridning är hjärtat av vår verksamhet på Comerit. Vi tror starkt på att dela med oss av vår kunskap och att stärka våra kunder och partners genom utbildning och utveckling. Vår vision är att vara ledande inom kompetensutveckling genom att erbjuda skräddarsydda utbildningsprogram och workshops. Genom att ligga i framkant med den senaste teknologin och metodologin, ser vi till att de vi arbetar med alltid har den kunskap och de verktyg de behöver för att lyckas.`,
          image: "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          goal: "Engagemang",
          description: `Engagemang är en grundläggande värdering hos Comerit. Vi är dedikerade till våra kunders framgång och arbetar nära dem för att förstå deras unika behov och utmaningar. Vår vision är att genom ett starkt och personligt engagemang utveckla och implementera skräddarsydda IT-lösningar som inte bara löser dagens problem utan också förbereder för framtidens möjligheter. Med ett helhjärtat fokus på kvalitet och kundnöjdhet strävar vi efter att varje projekt ska leverera på ett sätt som gör verklig skillnad.`,
          image: "https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ],
      references: [
        {
          company: "SAAB",
          role: "Systemutvecklare",
          level: "Strategisk",
          task: "Ansvarig för att utveckla och implementera säkerhetskritiska systemlösningar inom försvarsindustrin.",
          image: "https://cdn.pixabay.com/photo/2022/09/28/20/28/saab-jas-39-gripen-7485936_1280.jpg" // Teknisk bild för SAAB
        },
        {
          company: "FMV",
          role: "Teknisk Projektledare",
          level: "Operativ",
          task: "Leder tekniska projekt inom försvarssektorn med fokus på utveckling och integration av nya teknologier.",
          image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1600" // Teknisk bild för FMV
        }
      ]
    };
  }
};
</script>

<style scoped>
.management-page {
  margin: 2rem;
}

.management-group h1,
.vision-group h1,
.references-group h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.leader,
.vision,
.reference {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1.5rem;
}

.leader-image img,
.vision-image img,
.reference-image img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.leader-info,
.vision-info,
.reference-info {
  flex: 1;
}

.leader-info h2,
.vision-info h2,
.reference-info h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.leader-info h3,
.vision-info h3,
.reference-info h3 {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
}

.leader-info p,
.vision-info p,
.reference-info p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .leader,
  .vision,
  .reference {
    flex-direction: column;
    text-align: center;
  }

  .leader-image img,
  .vision-image img,
  .reference-image img {
    width: 100%;
    height: auto;
  }
}
</style>
