<script setup lang="ts">
const container = ref(null);

const onMouseDrag = ({ movementX, movementY }) => {
  let getContainerStyle = window.getComputedStyle(container.value);
  let leftValue = parseInt(getContainerStyle.left);
  let topValue = parseInt(getContainerStyle.top);
  container.value.style.left = `${leftValue + movementX}px`;
  container.value.style.top = `${topValue + movementY}px`;
};

const onMouseDown = () => {
  container.value.addEventListener('mousemove', onMouseDrag);
};

const onMouseUp = () => {
  container.value.removeEventListener('mousemove', onMouseDrag);
};

onMounted(() => {
  container.value = document.querySelector('.container');
});
</script>

<template>
  <main>
    <button type="button" @click="addElement">新增div</button>
    <div class="container" @mousedown="onMouseDown" @mouseup="onMouseUp">
      <header>Draggable element</header>
    </div>
  </main>
</template>

<style lang="sass" scoped>
$black: #000

main
  width: 100%
  height: 500px
  margin: 0 auto
  border: 2px solid $black
  position: relative

.container
  position: absolute
  left: 50%
  top: 50%
  min-height: 2rem
  width: 15rem
  padding: 10px
  background-color: rgb(218, 255, 194)
  border-radius: 5px
  transform: translate(-50%, -50%)
  cursor: move
  user-select: none
</style>
