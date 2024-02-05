<script lang="ts" setup>
let btnListState = useBtnListStore() as Array<{ label: number; color: string }>; // object type

const delItem = (label: number) => {
  if (Array.isArray(btnListState)) {
    btnListState = btnListState.filter(
      (item: { label: number }) => item.label !== label
    );
  } else {
    btnListState.value = (btnListState as { value: { label: number; color: string }[] }).value.filter(
      (item: { label: number }) => item.label !== label
    );
  }
};
</script>

<template>
  <main>
    <div class="item" v-for="item in btnListState" :key="item.label">
      <span>{{ item.label }}</span>
      <button type="button" @click="delItem(item.label)">Delete</button>
    </div>
    <p v-if="btnListState.length === 0" class="tip">List is empty.</p>
  </main>
</template>

<style scoped lang="sass">
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
  margin: 0 auto
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
.tip
  position: absolute
  color: $black
  font-size: 2em
  text-align: center
</style>
