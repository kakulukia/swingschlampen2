<template lang="pug">
.footer
  a(href="https://www.facebook.com/dieSwingSchlampen/", target="_blank")
    i.fa.fa-facebook-official.fa-2x
  a(href="https://www.instagram.com/die_swingschlampen/", target="_blank")
    i.fa.fa-instagram.fa-2x
  a(href="https://twitter.com/swingschlampen", target="_blank")
    i.fa.fa-twitter-square.fa-2x
  nuxt-link(to="/impressum", exact) Impressum
</template>

<style lang="sass" scoped>
.page
  .footer, footer
    color: white
    background: none
    justify-content: flex-end
    display: flex
    align-items: center

    a
      color: white
    i
      margin-right: 15px
</style>
