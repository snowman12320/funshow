<script setup lang="ts">
defineProps({
  label: {
    type: Number,
    required: true,
  },
});

const btnItem = ref<HTMLElement | null>(null);

const onMouseDrag = ({
  movementX,
  movementY,
}: {
  movementX: number;
  movementY: number;
}) => {
  let getContainerStyle = window.getComputedStyle(btnItem.value as Element);
  let leftValue = parseInt(getContainerStyle.left);
  let topValue = parseInt(getContainerStyle.top);
  (btnItem.value as HTMLElement).style.left = `${leftValue + movementX}px`;
  (btnItem.value as HTMLElement).style.top = `${topValue + movementY}px`;
};

const onMouseDown = () => {
  (btnItem.value as HTMLElement).addEventListener('mousemove', onMouseDrag);
};

const onMouseUp = () => {
  (btnItem.value as HTMLElement).removeEventListener('mousemove', onMouseDrag);
};

const onDoubleClick = () => {
  window.alert('double click');
};
</script>

<template>
  <div
    ref="btnItem"
    class="btn-item"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
    @dblclick="onDoubleClick"
  >
    {{ label }}
  </div>
</template>

<style lang="sass" scoped>
$black: #000
$orange: #f60
$breakpoint: 768px
.btn-item
  position: absolute
  left: 50%
  top: 50%
  height:2rem
  width:2rem
  background-color: $black
  border-radius: 50px
  transform: translate(-50%, -50%)
  cursor: move
  user-select: none
  color: $orange
  text-align: center
  line-height: 2em
  @media (max-width: $breakpoint)
    height: 1.5rem
    width: 1.5rem
    line-height: 1.5rem
    font-size: 1rem
</style>
