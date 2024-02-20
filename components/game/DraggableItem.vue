<script setup lang="ts">
const btnListState = useBtnListStore();

const addItem = (() => {
  let label: number = btnListState.value.length + 1;
  return () => {
    let color: string = btnListState.value.length % 2 === 0 ? '#000' : '#fff';
    btnListState.value.push({ label, color });
    label++;
  };
})();
</script>

<template>
  <main @keydown.enter="addItem" class="main-wrap" ref="parent">
    <button type="button" @click="addItem" class="add-btn">+ Enter</button>
    <gameChessItem
      v-for="btn in btnListState"
      :key="btn.label"
      :label="btn.label"
      :style="{ backgroundColor: btn.color }"
    />
  </main>
</template>

<style lang="sass" scoped>
.main-wrap
  width: 500px
  height: 500px
  margin: 0 auto
  border: 2px solid $black
  background-image: url('@/assets/bg.jpg')
  background-repeat: no-repeat
  background-size: contain
  position: relative
  background-position: center
  @media (max-width: $breakpoint)
    width: 350px
    height: 350px

.add-btn
  position: absolute
  top: -10%
  width: 70px
  height: 30px
  border-radius: 5px
  border: 2px solid $black
  background-color: $black
  color: $white
  cursor: pointer
  outline: none
  &:hover
    background-color: $white
    color: $black
</style>
