<script setup lang="ts">
const whiteMask = ref<HTMLElement>(null!);
let socket: any;
const instance = getCurrentInstance();

onMounted(() => {
  whiteMask.value?.addEventListener('animationend', () => {
    if (whiteMask.value) {
      whiteMask.value.style.display = 'none';
    }
  });

  if (instance) {
    socket = instance.appContext.config.globalProperties.$nuxtSocket({
      channel: '/index',
    });

    socket.on('method1', (msg: any) => {
      // Handle event
      console.log(msg);
    });
  }

  // socket.onAny((event: string, ...args: any[]) => {
  //   console.log(`Received ${event} event with args:`, args);
  // });
});

const method1 = () => {
  socket.emit('method1', '123');
  console.log(socket.sendBuffer);
};
</script>

<template>
  <main>
    <section>
      <gameDraggableItem />
      <gameSidebarItem />
    </section>
    <section class="chat-wrap">
      {{  socket }}
      <button type="button" @click="method1">&copy;</button>
    </section>
    <div ref="whiteMask" class="white-mask"></div>
  </main>
</template>

<style lang="sass" scoped>
h1
  text-align: center
  margin-bottom: 3em
  @media (max-width: $breakpoint)
    margin-bottom: 0
section
  display: grid
  grid-template-columns: 1fr 1fr
  @media (max-width: $breakpoint)
    margin-top: 5em
    grid-template-columns: 1fr

.white-mask
  position: fixed
  display: block
  top: 0
  left: 0
  width: 100%
  height: 100%
  opacity: 0.8
  z-index: 1
  background: $black
  animation: fade-in 2s ease-in-out

.chat-wrap
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  margin-top: 2em
  button
    margin-bottom: 1em
    padding: 0.5em 1em
    background: $orange
    color: $black
    border: none
    border-radius: 5px
    cursor: pointer
    transition: 0.3s
    &:hover
      background: $black
      color: $orange
      transition: 0.3s
  p
    color: $orange
    font-size: 1.5em
    font-weight: bold
    text-align: center
    margin-bottom: 1em

@keyframes fade-in
  from
    opacity: 0.8
  to
    opacity: 0
</style>
