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

onMounted(() => {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem();
    }
  });
});

const onDragEnd = (x: number, y: number, label: number) => {
  let mainWrap = document.querySelector('.main-wrap') as HTMLElement;
  let mainWidth: number = mainWrap.offsetWidth;
  let mainHeight: number = mainWrap.offsetHeight;
  let mainLeft: number = mainWrap.offsetLeft;
  let mainTop: number = mainWrap.offsetTop;
  if (
    x < mainLeft ||
    x > mainLeft + mainWidth ||
    y < mainTop ||
    y > mainTop + mainHeight
  ) {
    btnListState.value = btnListState.value.filter(
      (item: { label: number }) => item.label !== label
    );
    window.alert('Haha, your chess piece fell.');
  }
};
</script>

<template>
  <main @keydown.enter="addItem" class="main-wrap" ref="parent">
    <button type="button" @click="addItem" class="add-btn">+ Enter</button>
    <gameChessItem
      v-for="btn in btnListState"
      :key="btn.label"
      :label="btn.label"
      :style="{ backgroundColor: btn.color }"
      @dragEnd="onDragEnd"
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
