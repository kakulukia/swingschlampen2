<template lang="pug">
  #app
    .header
      ul.nav
        li
          nuxt-link(to="/", exact) Home
        li
          nuxt-link(to="/news") News
        li
          nuxt-link(to="/band") Band
        li
          el-dropdown
            span.el-dropdown-link Media
            el-dropdown-menu(slot="dropdown")
              el-dropdown-item
                nuxt-link(to="/fotos") Fotos
              el-dropdown-item
                nuxt-link(to="/videos") Videos

        li
          nuxt-link(to="/dates") Dates
        li
          nuxt-link(to="/shop") Shop
        li
          nuxt-link(to="/kontakt") Kontakt
    nuxt
</template>

<style src="element-ui/lib/theme-default/index.css"></style>

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
  li, span.el-dropdown-link
    color: #f5f5f5
    display: inline-block
    margin-bottom: 10px
    &:first-letter
      font-size: 50px
      color: darkred


li
  position: relative

  a, .el-dropdown-link
    font-size: 35px
    font-family: "SF-Hollywood-Hills", serif
    color: #f5f5f5
    text-decoration: none
    padding: 5px 10px
    border-bottom: 4px solid black

    &.nuxt-link-active, &:hover
      border-bottom: 4px solid darkred

ul.el-dropdown-menu
  background: black

.el-dropdown-menu__item:hover:not(.is-disabled)
  background: black

html, body, .page, #__nuxt, #app
  padding: 0
  margin: 0
  height: 100%

.page
  background-size: cover
  background-position: center center
  background-repeat: no-repeat
</style>
