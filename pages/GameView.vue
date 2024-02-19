<script setup lang="ts">
import { useToggle } from '@vueuse/core';

const whiteMask = ref<HTMLElement>(null!);

onMounted(() => {
  whiteMask.value.style.display = 'none';
  whiteMask.value?.addEventListener('animationend', () => {});
});

const [isChatOpen, toggleChat] = useToggle(true);
</script>

<template>
  <main>
    <section>
      <gameDraggableItem />
      <gameSidebarItem />
      <gameChatItem :class="{ 'chat-item': isChatOpen }" />
      <button @click="toggleChat()" class="toggleBtn" type="button">
        Chat
      </button>
    </section>
    <div ref="whiteMask" class="white-mask">
      <p>Loading . . .</p>
    </div>
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
  display: flex
  top: 0
  left: 0
  width: 100%
  height: 100%
  opacity: 0.8
  z-index: 1
  background: $black
  animation: fade-in 2s ease-in-out
  justify-content: center
  align-items: center
  p
    color: $white

.chat-item
  display: none

.toggleBtn
  position: fixed
  bottom: 1em
  right: 1em
  z-index: 2
  border: 1px solid $black
  height: 4em
  width: 4em
  text-align: center
  cursor: pointer
  border-radius: 50%
  background: $black
  color: $white
  &:hover
    background: $white
    color: $black

@keyframes fade-in
  from
    opacity: 0.8
  to
    opacity: 0
</style>
