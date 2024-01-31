<script setup lang="ts">
const mydiv = ref(null);
let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

const dragMouseDown = (e) => {
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.addEventListener('mouseup', closeDragElement);
  document.addEventListener('mousemove', elementDrag);
  // 0 0 432 49
  // console.log(pos1, pos2, pos3, pos4);
};

const elementDrag = (e) => {
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  // -1 0 463 79
  console.log(pos1, pos2, pos3, pos4);
  // mydiv.value.style.top = mydiv.value.offsetTop - pos3 + 'px';
  // mydiv.value.style.left = mydiv.value.offsetLeft - pos4 + 'px';
  mydiv.value.style.top = pos3 + 'px';
  mydiv.value.style.left = pos4 + 'px';
  // 34px 415px
  // console.log(mydiv.value.style.top, mydiv.value.style.left);
};

const closeDragElement = () => {
  document.removeEventListener('mouseup', closeDragElement);
  document.removeEventListener('mousemove', elementDrag);
};
</script>

<template>
  <main>
    <button type="button" @click="addElement">新增div</button>
    <div ref="mydiv" id="mydiv" @mousedown="dragMouseDown">drag</div>
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

#mydiv
  position: absolute
  width: 200px
  height: 200px
  top: 50px
  left: 50px
  z-index: 9
  background-color: red
  text-align: center
  border: 1px solid black
</style>
