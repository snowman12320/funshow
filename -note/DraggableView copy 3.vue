<script setup lang="ts">
const drag1 = ref(null);

const onMouseDrag = ({ movementX, movementY }) => {
  let getContainerStyle = window.getComputedStyle(drag1.value);
  let leftValue = parseInt(getContainerStyle.left);
  let topValue = parseInt(getContainerStyle.top);
  drag1.value.style.left = `${leftValue + movementX}px`;
  drag1.value.style.top = `${topValue + movementY}px`;
};

const onMouseDown = () => {
  drag1.value.addEventListener('mousemove', onMouseDrag);
};

const onMouseUp = () => {
  drag1.value.removeEventListener('mousemove', onMouseDrag);
};

onMounted(() => {
  drag1.value = document.querySelector('#drag1');
});

const addElement = () => {
  const newDrag1 = document.createElement('div');
  newDrag1.id = 'drag1';
  newDrag1.classList.add('container');

  document.querySelector('.main-wrap').appendChild(newDrag1);

  newDrag1.addEventListener('mousedown', onMouseDown);
  newDrag1.addEventListener('mouseup', onMouseUp);
};
</script>

<template>
  <main class="main-wrap">
    <button type="button" @click="addElement">新增div</button>
    <div
      id="drag1"
      class="container"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    ></div>

    <!-- <div class="border"></div> -->
  </main>
</template>

<style lang="sass" scoped>
$black: #000

.main-wrap
  width: 100%
  height: 500px
  margin: 0 auto
  border: 2px solid $black
  position: relative


.container
  position: absolute
  left: 50%
  top: 50%
  height: 1rem
  width:1rem
  padding: 10px
  background-color: $black
  border-radius: 50px
  transform: translate(-50%, -50%)
  cursor: move
  user-select: none
</style>
