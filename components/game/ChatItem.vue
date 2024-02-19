<template>
  <main>
    <h2>Chat Window {{ username }}</h2>
    <ul>
      <li
        v-for="(msg, index) in messages"
        :key="index"
        :class="{ 'own-message': msg.user === username }"
      >
        <strong v-if="msg.user !== username">{{ msg.user }}:</strong> {{ msg.text }}
      </li>
    </ul>

    <form @submit.prevent="sendMessage">
      <input v-model="newMessage" type="text" placeholder="Type a message" />
      <button type="submit">Send</button>
    </form>
  </main>
</template>

<script setup>
const { $io } = useNuxtApp();

const messages = ref([]);
const newMessage = ref('');
const username = ref('Player 1');

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

<style lang="sass" scoped>
main
  border: 1px solid $black
  padding: 1em
  min-height: 300px
  display: flex
  flex-direction: column
  justify-content: space-between
  position: fixed
  bottom: 4em
  right: 4em
  width: 300px
  background: $white
  h2
    text-align: center
    margin-bottom: 1em

  ul
    padding-left: 0
  li
    list-style: none
    word-break: break-all
  .own-message
      text-align: end
  form
    display: flex
    input
      flex: 1
      margin-right: 1em
    button
      padding: 0.5em 1em
      background: $black
      color: $white
      border: none
      cursor: pointer
      border: 1px solid $black
      &:hover
        background: $white
        color: $black
</style>
