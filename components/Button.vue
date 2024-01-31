<script setup lang="ts">
defineProps({
  label: {
    type: Number,
    required: true,
  },
});

const button = ref(null);

const onMouseDrag = ({ movementX, movementY }) => {
  let getContainerStyle = window.getComputedStyle(button.value);
  let leftValue = parseInt(getContainerStyle.left);
  let topValue = parseInt(getContainerStyle.top);
  button.value.style.left = `${leftValue + movementX}px`;
  button.value.style.top = `${topValue + movementY}px`;
};

const onMouseDown = () => {
  console.log(button.value);
  button.value.addEventListener('mousemove', onMouseDrag);
};

const onMouseUp = () => {
  button.value.removeEventListener('mousemove', onMouseDrag);
};
</script>

<template>
  <div
    ref="button"
    class="button"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
  >
    {{ label }}
  </div>
</template>

<style lang="sass" scoped>
.button
  position: absolute
  left: 50%
  top: 50%
  height:2rem
  width:2rem
  background-color: #000
  border-radius: 50px
  transform: translate(-50%, -50%)
  cursor: move
  user-select: none
  color: orange
  text-align: center
  line-height: 2em
</style>
