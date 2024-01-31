<template>
  <main>
    <section>
      <DraggableView />
      <SidebarView />
    </section>
  </main>
</template>

<style lang="sass" scoped>
$black: #000

section
  display: grid
  grid-template-columns: 3fr 1fr 
  grid-gap: 1em
</style>
