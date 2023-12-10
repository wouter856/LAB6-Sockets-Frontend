<script setup>
    import { ref, onMounted } from 'vue';

    let teamScores = ref([
    {
        team: 'Terdoencke Boenke',
        score: 8,
    },
    {
        team: 'Dremmel UTD',
        score: 7,
    },
    {
        team: 'Zapato',
        score: 6,
    },
    {
        team: 'TikTak',
        score: 5,
    },
    {
        team: '2K',
        score: 4,
    },
    ]);

    let socket = null;

    onMounted(() => {
    socket = new WebSocket('wss://lab-6-sockets-backend.vercel.app/primus');

    // Listen for new data
    socket.onmessage = function (event) {
        let m = JSON.parse(event.data);
        console.log(m);
        if (m.action === 'updateStats') {
        // Find the team in teamScores
        const existingTeam = teamScores.value.find((team) => team.team === m.team);

        if (existingTeam) {
            // Update the score of the existing team
            existingTeam.score = m.score;
        } else {
            // Team not found, add a new entry to teamScores
            teamScores.value.push({
            team: m.team,
            score: m.score,
            });
        }

        // Sort teamScores by score in descending order
        teamScores.value.sort((a, b) => b.score - a.score);
        }
    };
    });
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
          <td>{{ team.team }}:</td>
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
