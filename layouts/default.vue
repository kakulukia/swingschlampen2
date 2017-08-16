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
  padding: 2.5% 40px
  margin: 0
  text-align: right
  li
    font-size: 35px
    display: inline-block
    margin-bottom: 10px
    position: relative
    a
      color: #f5f5f5
      display: block
      text-decoration: none
      &:first-letter
        :font-size 50px
        color: darkred
.menu
  position: absolute
  left: 0
  top: 50px
  display: none
  flex-direction: column
  z-index: 7
li:hover .menu
  display: flex

li
  position: relative

  a
    font-size: 35px
    font-family: "SF-Hollywood-Hills", serif
    color: #f5f5f5
    text-decoration: none
    padding: 5px 10px
    border-bottom: 4px solid black
    background: black

    &.nuxt-link-active, &:hover
      border-bottom: 4px solid darkred

ul.el-dropdown-menu
  background: black

.el-dropdown-menu__item:hover:not(.is-disabled)
  background: black

html, body, #__nuxt, #app
  padding: 0
  margin: 0
  height: 100%
  font-family: 'Saira', serif

.page
  height: 100%
  font-family: 'Saira', serif
  background-size: cover
  background-position: center center
  background-repeat: no-repeat
  padding-top: 3em
</style>
