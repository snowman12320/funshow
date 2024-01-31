<script setup lang="ts">
const selectedListStore: SelectedListStore = useSelectedListStore();

const addElement = (() => {
  let label = selectedListStore.value.length + 1;
  return () => {
    let color = selectedListStore.value.length % 2 === 0 ? '#000' : '#fff';
    selectedListStore.value.push({ label, color });
    label++;
  };
})();

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addElement();
    }
  });
});

const onDragEnd = (e) => {
  let { movementX, movementY } = e;
  let getContainerStyle = window.getComputedStyle(e.target);
  let leftValue = parseInt(getContainerStyle.left);
  let topValue = parseInt(getContainerStyle.top);
  let width = parseInt(getContainerStyle.width);
  let height = parseInt(getContainerStyle.height);
  let mainWidth = parseInt(
    window.getComputedStyle(document.querySelector('.main-wrap')).width
  );
  let mainHeight = parseInt(
    window.getComputedStyle(document.querySelector('.main-wrap')).height
  );

  if (
    leftValue + movementX < 0 ||
    leftValue + movementX + width > mainWidth ||
    topValue + movementY < 0 ||
    topValue + movementY + height > mainHeight
  ) {
    selectedListStore.value = selectedListStore.value.filter(
      (item) => item.label !== parseInt(e.target.innerText)
    );
    window.alert('Haha, your chess piece fell.');
  }
};
</script>

<template>
  <main @keydown.enter="addElement" class="main-wrap">
    <button type="button" @click="addElement" class="add-btn">+ Enter</button>
    <Button
      v-for="button in selectedListStore"
      :key="button.label"
      :label="button.label"
      :style="{ backgroundColor: button.color }"
      @mouseout="onDragEnd"
    />
  </main>
</template>

<style lang="sass" scoped>
$black: #000

.main-wrap
  width: 100%
  height: 500px
  margin: 0 auto
  border: 2px solid $black
  background-image: url('@/assets/bg.jpg')
  background-repeat: no-repeat
  background-size: cover
  position: relative
.add-btn
  position: absolute
  top: 10px
  left: 10px
  width: 70px
  height: 30px
  border-radius: 5px
  border: 2px solid $black
  background-color: $black
  color: #fff
  cursor: pointer
  outline: none
  &:hover
    background-color: #fff
    color: $black
</style>
