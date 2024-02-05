<script setup lang="ts">
// let btnListState = useBtnListStore() as Array<{ label: number; color: string }>;
const [btnListState, delItem, addItem] = useBtnListStore();

// const addItem = (() => {
//   let label: number = btnListState.value.length + 1;
//   return () => {
//     let color: string = btnListState.value.length % 2 === 0 ? '#000' : '#fff';
//     btnListState.value.push({ label, color });
//     label++;
//   };
// })();

onMounted(() => {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      // addItem();
    }
  });
});

const onDragEnd = (e: MouseEvent) => {
  let { movementX, movementY } = e;
  let getContainerStyle: CSSStyleDeclaration = window.getComputedStyle(
    e.target as Element
  );
  let leftValue: number = parseInt(getContainerStyle.left);
  let topValue: number = parseInt(getContainerStyle.top);
  let width: number = parseInt(getContainerStyle.width);
  let height: number = parseInt(getContainerStyle.height);
  let mainWidth: number = parseInt(
    window.getComputedStyle(document.querySelector('.main-wrap') as Element)
      .width
  );
  let mainHeight: number = parseInt(
    window.getComputedStyle(document.querySelector('.main-wrap') as Element)
      .height
  );

  if (
    leftValue + movementX < 0 ||
    leftValue + movementX + width > mainWidth + 30 ||
    topValue + movementY < 0 ||
    topValue + movementY + height > mainHeight + 20
  ) {
    btnListState.value = btnListState.value.filter(
      (item: btnListState) =>
        item.label !== parseInt((e.target as Element).innerText)
    );
    window.alert('Haha, your chess piece fell.');
  }
};
</script>

<template>
  <main @keydown.enter="addItem" class="main-wrap">
    <button type="button" @click="addItem" class="add-btn">+ Enter</button>
    <gameChessItem
      v-for="btn in btnListState"
      :key="btn.label"
      :label="btn.label"
      :style="{ backgroundColor: btn.color }"
      @mouseout="onDragEnd"
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
