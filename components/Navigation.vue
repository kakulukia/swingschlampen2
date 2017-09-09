<template lang="pug">
  .burger
    i.fa.fa-bars(@click="showMenu()")
    ul.nav(@blur="hideMenu()", :class="{open: menuOpen}", @click="hideMenu()")
      li
        nuxt-link(to="/", exact) Home
      li
        nuxt-link(to="/news") News
      li
        nuxt-link(to="/band") Band
      li
        nuxt-link(to="/fotos") Fotos
      li
        nuxt-link(to="/videos") Videos
      li
        nuxt-link(to="/dates") Dates
      li
        nuxt-link(to="/shop") Shop
      li
        nuxt-link(to="/kontakt") Kontakt
</template>


<script>
export default {
  data: function () {
    return {
      menuOpen: false
    }
  },
  methods: {
    showMenu: function () {
      console.log('here we are')
      this.menuOpen = !this.menuOpen
    },
    hideMenu: function () {
      console.log('and now we aint!')
      let app = this
      setTimeout(function () { app.menuOpen = false }, 500)
    }
  },
  components: {
  }
}
</script>

<style lang="sass">
.burger
  text-align: right
  padding: 0 20px
  i
    font-size: 25px
    display: none


@media (max-width: 900px)
  .burger
    color: white
    padding: 20px
    i
      cursor: pointer
      display: inline-block

  .nav
    position: absolute
    width: 150px
    top: -777px
    right: 20px
    &.open
      top: 55px
    li
      font-size: 15px


.nav
  padding: 0
  z-index: 11
  transition: all .5s cubic-bezier(0, 1, 0.5, 1)
  display: inline-block
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
      text-decoration: none
      padding: 0 10px
      background: black
      border-bottom: 4px solid black
      &.nuxt-link-active, &:hover
        border-bottom: 4px solid darkred
      &:first-letter
        :font-size 50px
        color: darkred


@media (max-width: 900px)
  .burger
    color: white
    padding: 20px
    i
      cursor: pointer
      display: inline-block

  .nav
    position: absolute
    width: 100px
    top: -777px
    right: 20px
    &.open
      top: 75px
    li
      font-size: 20px
      a
        &:first-letter
          font-size: 25px
          color: darkred

</style>
