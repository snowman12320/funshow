<template>
  <section>
    <DraggableView />
    <SidebarView />
  </section>
</template>

<style lang="sass" scoped>
$black: #000

section
  display: grid
  grid-template-columns: 3fr 1fr
  grid-gap: 1em
  max-width: 1000px
  margin: 0 auto
</style>
