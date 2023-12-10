<script setup>
    import { ref, onMounted } from 'vue'

    const teamScores = ref([]);
    //create a random array of score for the teams Terdoencke Boenke, Dremmel UTD, Zapato, TikTak, 2K
    const team1 = ref(Math.floor(Math.random() * 10));
    const team2 = ref(Math.floor(Math.random() * 10));
    const team3 = ref(Math.floor(Math.random() * 10));
    const team4 = ref(Math.floor(Math.random() * 10));
    const team5 = ref(Math.floor(Math.random() * 10));
    //put them in teamscores array
    teamScores.value.push({ id: 1, label: "Terdoencke Boenke", score: team1.value });
    teamScores.value.push({ id: 2, label: "Dremmel UTD", score: team2.value });
    teamScores.value.push({ id: 3, label: "Zapato", score: team3.value });
    teamScores.value.push({ id: 4, label: "TikTak", score: team4.value });
    teamScores.value.push({ id: 5, label: "2K", score: team5.value });

</script>

<template>
  <div>
    <header>
        <h1>Livescore.com</h1>
        <h2>Check you're scores live</h2>
    </header>
    <main>
        <h2>Team Scores:</h2>
        <ul>
        <li v-for="team in teamScores" :key="team.id">
            {{ team.label }}: {{ team.score }}
        </li>
        </ul>
    </main>
  </div>
</template>

<style scoped>
    
</style>
