<script setup>
    import { ref, reactive, onMounted } from 'vue';

    let teams = reactive(["Terdoencke Boenke", "Dremmel UTD", "Zapato", "TikTak", "2K"]);
    let selectedTeam = ref(null);
    let score = ref(null);

    let socket = null;

    onMounted(() => {
        socket = new WebSocket('wss://lab-6-sockets-backend.vercel.app/primus');
    });

    const updateStats = () => {
        let m = {
            "action": "updateStats",
            "team": selectedTeam.value,
            "score": score.value
        };

        socket.send(JSON.stringify(m));
    };
</script>

<template>
  <div>
    <header>
        <h1>Livescore.com</h1>
        <h2>Update you're scores now</h2>
    </header>
    <main>
        <form @submit.prevent="submitForm">
            <div class="formField">
                <label for="team">Select Your Team:</label>
                <select v-model="selectedTeam" id="teamSelect">
                    <option v-for="team in teams" :key="team" :value="team">{{ team }}</option>
                </select>
            </div>
            <br />
            <div class="formField">
                <label for="score">Enter Your Score:</label>
                <input v-model="score" type="number" id="score" name="score" />
            </div>
            <br />
            <button type="submit" @click="updateStats">Submit</button>
        </form>
        <a href="/live">Check out the live scores</a>
    </main>
  </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    color: whitesmoke;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    width: 50%;
    background-color: #318ce7;
    padding-top: 3%;
    padding-bottom: 3%;
    border-radius: 20px;
}
.formField {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
}
label {
    width: 50%;
    font-size: 16px;
    font-weight: 700;
}
select {
    width: 50%;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    font-size: 16px;
    width: 60%;
}
input {
    width: 50%;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    font-size: 16px;
    width: calc(60% - 12px);
}
button {
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    font-size: 16px;
    width: 60%;
    background-color: #318ce7;
    color: whitesmoke;
    font-weight: 700;
}
button:hover {
    background-color: whitesmoke;
    color: #318ce7;
    font-weight: 700;
    cursor: pointer;
}
</style>