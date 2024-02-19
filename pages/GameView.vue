<script setup lang="ts">
const whiteMask = ref<HTMLElement>(null!);

onMounted(() => {
  whiteMask.value?.addEventListener('animationend', () => {
    whiteMask.value.style.display = 'none';
  });
});

</script>

<template>
  <main>
    <section>
      <gameDraggableItem />
      <gameSidebarItem />
      <gameChatItem />
    </section>
    <!-- <div ref="whiteMask" class="white-mask"></div> -->
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

@keyframes fade-in
  from
    opacity: 0.8
  to
    opacity: 0
</style>
