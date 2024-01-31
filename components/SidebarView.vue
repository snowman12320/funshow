<script lang="ts" setup>
const selectedListStore: SelectedListStore = useSelectedListStore();

const delItem = (label) => {
  selectedListStore.value = selectedListStore.value.filter(
    (item) => item.label !== label
  );
};
</script>

<template>
  <main>
    <div class="item" v-for="item in selectedListStore" :key="item.label" >
      <span>{{ item.label }}</span>
      <button type="button" @click="delItem(item.label)">Delete</button>
    </div>
  </main>
</template>

<style scoped lang="sass">
$black: #000
$white: #fff
$red: #ff0000

main
  height: 500px
  border: 2px solid $black
  width: 100%
  padding: 10px
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: repeat(10, 1fr)
  grid-gap: 5px
  overflow-y: scroll
  box-sizing: border-box
  width: 300px
  place-items: center
.item
  width: 200px
  height: 50px
  border-radius: 5px
  border: 2px solid $black
  color: $black
  display: flex
  justify-content: space-around 
  align-items: center
  font-size: 2em
  padding: 0 10px
  button
    width: 60px
    height: 30px
    border-radius: 5px
    border: 2px solid $black
    background-color: $red
    color: $white
    cursor: pointer
    outline: none 
    &:hover
      background-color: $white
      color: $black
</style>
