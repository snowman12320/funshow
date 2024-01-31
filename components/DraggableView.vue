<script setup lang="ts">
const buttons = reactive([{ label: 1, color: '#000' }]);

const addElement = () => {
  let label = buttons.length + 1;
  let color = buttons.length % 2 === 0 ? '#000' : '#fff';
  buttons.push({ label, color });
};


const addCount = () => {
  count.value++;
};

</script> 

<template>
  <main>
    <button type="button" @click="addElement">新增div</button>
    <Button
      v-for="button in buttons"
      :key="button.label"
      :label="button.label"
      :style="{ backgroundColor: button.color }"
    />

    <button @click="addCount">123
    </button>
  </main>
</template>

<style lang="sass" scoped>
$black: #000

main
  width: 100%
  height: 500px
  margin: 0 auto
  border: 2px solid $black
  // background-image: url('@/assets/bg.jpg')
  background-repeat: no-repeat
  background-size: cover
  position: relative
</style>
