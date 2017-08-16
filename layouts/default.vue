<template lang="pug">
  v-app#app
    .header
      ul.nav
        li
          nuxt-link(to="/", exact) Home
        li
          nuxt-link(to="/news") News
        li
          nuxt-link(to="/band") Band
        li
          a(href="#") Media
          .menu
            nuxt-link(to="/fotos") Fotos
            nuxt-link(to="/videos") Videos

        li
          nuxt-link(to="/dates") Dates
        li
          nuxt-link(to="/shop") Shop
        li
          nuxt-link(to="/kontakt") Kontakt
    nuxt
</template>

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

.nav
  padding: 10px 40px
  margin: 0
  text-align: right
  font-family: "SF-Hollywood-Hills", serif
  li
    font-size: 35px
    display: inline-block
    margin-bottom: 10px
    position: relative
    a
      color: #f5f5f5
      display: block
      margin-left: 20px
      text-decoration: none
      &.nuxt-link-active, &:hover
        border-bottom: 4px solid darkred
      background: black
      border-bottom: 4px solid black
      &:first-letter
        :font-size 50px
        color: darkred
.menu
  position: absolute
  left: 0
  top: 66px
  display: none
  flex-direction: column
  z-index: 7
li:hover .menu
  display: flex


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
