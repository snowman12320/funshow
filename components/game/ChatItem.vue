<template>
  <main>
    <h2>Chat Window {{ username }}</h2>
    <ul>
      <li
        v-for="(msg, index) in messages"
        :key="index"
        :class="{ 'own-message': msg.user === username }"
      >
        <strong v-if="msg.user !== username">{{ msg.user }}:</strong>
        {{ msg.text }}
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
const username = ref('');

const sendMessage = () => {
  if (!newMessage.value) return;
  $io.emit('send message', { text: newMessage.value, user: username.value });
  messages.value.push({ text: newMessage.value, user: username.value });
  newMessage.value = '';
};

onMounted(() => {
  $io.on('new user connected', () => {
    console.log('connected', $io);
  });

  $io.on('assign username', (data) => {
    username.value = data;
  });

  $io.on('new message sent',function (data) {
    messages.value.push(data);
    console.log('new message sent2', data);
  });

  // 成功訊息傳遞
  $io.on('user disconnected', function (data) {
    // alert(`${data} got disconnected`);
  });


  let name = window.prompt('Enter your username', 'Anonymous');
  if (name) {
    username.value = name;
    $io.emit('assign username', name);
  }
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
