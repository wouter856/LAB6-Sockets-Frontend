<script setup>
import { ref, onMounted } from 'vue';

const teamScores = ref([]);
const teams = [
  { id: 1, label: 'Terdoencke Boenke', score: 0 },
  { id: 2, label: 'Dremmel UTD', score: 0 },
  { id: 3, label: 'Zapato', score: 0 },
  { id: 4, label: 'TikTak', score: 0 },
  { id: 5, label: '2K', score: 0 },
];

// Update the scores randomly
teams.forEach((team) => {
  team.score = Math.floor(Math.random() * 10);
});

// Sort teams by score in descending order
teams.sort((a, b) => b.score - a.score);

// Populate the teamScores ref with the sorted teams
teamScores.value = teams;
</script>

<template>
  <div>
    <header>
      <h1>Livescore.com</h1>
      <h2>Check your scores live</h2>
    </header>
    <main>
      <h2>Team Scores:</h2>
      <table>
        <tr v-for="team in teamScores" :key="team.id">
          <td>{{ team.label }}:</td>
          <td>{{ team.score }}</td>
        </tr>
      </table>
      <a href="/">Change My Score</a>
    </main>
  </div>
</template>

<style scoped>
table {
    width: 40%;
    background-color: #318ce7;
    padding: 1% 2%;
    border-radius: 20px;
}
tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    color: whitesmoke;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 2px solid whitesmoke;
}
td {
    font-size: 24px;
    font-weight: 700;
}
</style>
