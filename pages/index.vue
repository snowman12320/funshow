<template>
  <main>
    <h1>Five-in-a-Row (game)</h1>
    <nuxt-link to="/GameView">START</nuxt-link>
  </main>
</template>

<style lang="sass" scoped>
main
  margin: 0 auto
  text-align: center

h1
  text-align: center
  margin-bottom: 3em

a
  text-decoration: none
  color: $black
  font-size: 2em
  border: 2px solid $black
  &:hover
    color: $white
    cursor: pointer
    outline: none
    background: $black
</style>
