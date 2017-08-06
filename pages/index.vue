<template lang="pug">
  .page
    .logo Swing Schlampen
</template>

<script>
export default {
  layout: 'teub',
  data () {
    return {
      num1: 1,
      color: 'rgba(19, 206, 102, 0.8)'
    }
  }
}
</script>

<style lang="sass" scoped>
.page
  background-image: url("/img/bg/Reich.jpg")
  text-align: center

.logo
  font-family: 'scriptina', serif
  font-size: 70px
</style>
