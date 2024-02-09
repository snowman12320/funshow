<script setup lang="ts">
const props = defineProps({
  label: {
    type: Number,
    required: true,
  },
});

const btnItem = ref<HTMLElement | null>(null);

const onDoubleClick = () => {
  window.alert('double click');
};

import { useDraggable } from '@vueuse/core';
const { x, y, style } = useDraggable(btnItem, {
  initialValue: { x: 520, y: 400 },
});

import { defineEmits } from 'vue';
const emit = defineEmits(['dragEnd']);
const onDragEnd = () => {
  emit('dragEnd', x.value, y.value, props.label);
};
</script>

<template>
  <div
    ref="btnItem"
    class="btn-item"
    @dblclick="onDoubleClick"
    :style="style"
    style="position: fixed"
    @mousemove="onDragEnd"
  >
    {{ label }}
  </div>
</template>

<style lang="sass" scoped>
.btn-item
  position: fixed
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
