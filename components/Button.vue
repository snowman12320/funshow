<script setup lang="ts">
defineProps({
  label: {
    type: Number,
    required: true,
  },
});

const button = ref(null);

/**
 * @param 
 * movementX: 正負方向
 * movementY: 正負方向
 * getContainerStyle: 取得目前的style
 * leftValue: 取得目前的left值
 * topValue: 取得目前的top值
 */

const onMouseDrag = ({ movementX, movementY }) => {
  let getContainerStyle = window.getComputedStyle(button.value);
  let leftValue = parseInt(getContainerStyle.left);
  let topValue = parseInt(getContainerStyle.top);
  button.value.style.left = `${leftValue + movementX}px`;
  button.value.style.top = `${topValue + movementY}px`;
};

const onMouseDown = () => {
  button.value.addEventListener('mousemove', onMouseDrag);
};

const onMouseUp = () => {
  button.value.removeEventListener('mousemove', onMouseDrag);
};

const onDoubleClick = () => {
  window.alert('double click');
};
</script>

<template>
  <div
    ref="button"
    class="button"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
    @dblclick="onDoubleClick"
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
