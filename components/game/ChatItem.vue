<template>
  <div>
    <h1>Nuxt module playground!</h1>
    <ul>
      <li v-for="(msg, index) in messages" :key="index">
        <strong>{{ msg.user }}:</strong> {{ msg.text }}
      </li>
    </ul>

    <form @submit.prevent="sendMessage">
      <input v-model="newMessage" type="text" placeholder="Type a message" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup>
const { $io } = useNuxtApp();

const messages = ref([]); 
const newMessage = ref(''); 
const username = ref('玩家A'); 

const sendMessage = () => {
  if (!newMessage.value) return;
  $io.emit('send message', { text: newMessage.value, user: username.value });
  messages.value.push({ text: newMessage.value, user: username.value }); 
  newMessage.value = '';
};

onMounted(() => {
  $io.on('connect', () => {
    console.log('connected', $io.id);
  });
  $io.on('user disconnected', function (data) {
    // alert(`${data} got disconnected`);
  });

  $io.on('assign username', (data) => {
    username.value = data;
  });

  $io.on('new message sent', (data) => {
    messages.value.push(data); 
  });
});
</script>
