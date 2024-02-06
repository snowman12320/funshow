<template>
  <main>
    <h1 class="text-xl">Five-in-a-Row (game)</h1>
    <slot />
  </main>
</template>

<style scoped lang="sass">
main
  height: 95vh
  display: grid
  place-items: center
  h1
    margin-bottom: 1em
</style>
