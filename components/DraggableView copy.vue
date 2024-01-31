<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useDraggable } from '@vueuse/core';

let id = 0;
const elements = reactive([]);

function addElement() {
  let el = ref(null);
  const { style } = useDraggable(el, {
    initialValue: { x: 40, y: 40 },
  });

  elements.push({ id: id++, el, style });
}

</script>

<template>
  <main>
    <button type="button" @click="addElement">新增div</button>
    <div v-for="element in elements" :key="element.id">
      <div :ref="element.el" class="drag-div" :style="element.style">
        Drag me!
      </div>
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
  .drag-div
    background: #eee
    border-radius: 4px
    padding: 8px
    cursor: move
    position: fixed
</style>