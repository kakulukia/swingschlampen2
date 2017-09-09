<template lang="pug">
  v-app#app
    .header
      navigation
    nuxt
</template>


<script>
import Navigation from '~/components/Navigation'
export default {
  methods: {
    showMenu: function () {
      console.log('here we are')
    },
    hideMenu: function () {
      console.log('and now we aint!')
    }
  },
  components: {
    Navigation
  }
}
</script>

<style lang="sass">
@font-face
  font-family: 'SF-Hollywood-Hills'
  src: url('/fonts/SF-Hollywood-Hills.woff')
  font-weight: bold
  font-style: normal
  font-stretch: normal

@font-face
  font-family: 'scriptina'
  src: url('/fonts/scriptin-webfont.woff')
  font-weight: normal
  font-style: normal


.header
  background: black

html, body, #__nuxt, #app
  padding: 0
  margin: 0
  height: 100%
  font-family: 'Saira', serif

#app
  display: flex
  flex-direction: column

.page
  flex-grow: 1
  font-family: 'Saira', serif
  background-size: cover
  background-position: center center
  background-repeat: no-repeat
  background-attachment: fixed
  padding-top: 3em
  overflow: scroll
  &.center
    text-align: center

  h1
    margin-bottom: 0.5em
    color: darkred
    text-shadow: 5px 5px 5px #333

  img, iframe
    border: 17px solid black
    outline: 2px solid white
    margin: 10px

  .card__text
    background: rgba(255, 255, 255, 0.7)

  a
    color: darkred
    font-weight: bold
    text-decoration: none

  h2
    font-size: 35px
    color: darkred
    text-shadow: 5px 5px 5px #333

  figure
    position: relative
    figcaption
      position: absolute
      bottom: 35px
      color: whitesmoke
      font-family: "SF-Hollywood-Hills", serif
      font-size: 35px
      text-shadow: 5px 5px 5px #000
      text-align: center
      width: 100%

</style>
