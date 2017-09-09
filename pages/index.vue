<template lang="pug">
  .page
    .content
      .logo Die
        br
        | Swing Schlampen
    Footer
</template>

<script>
export default {
  data () {
    return {
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
  color: #8b0000
  text-shadow: 1px 1px 2px #000
  margin-top: 35vh

@media (max-width: 900px)
  .logo
    font-size: 50px

</style>
