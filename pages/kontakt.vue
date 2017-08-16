<template lang="pug">
  .page
    v-container
      h1 So kannst Du uns erreichen
      v-layout(row-sm, column, child-flex-sm)
        v-card-text.ma-1
          h3 Kontakt
          p(style='white-space:pre;').
            Management
            Die Swing Schlampen GbR
            Am Heideberg 50
            15738 Zeuthen
            (Autogrammadresse)
        v-card-text.ma-1
          h3 Booking
          p(style='white-space:pre;').
            Die Swing Schlampen GbR
            E-Mail: swingschlamps@gmail.com
            Tel. 0176 8757 6699
        v-card-text.ma-1
          h3 Label
          p(style='white-space:pre;').
            Calygram
            Calyra GmbH
            Verlag und Medien
            Ernst-König-Straße 1-2
            06108 Halle (Saale)

</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.page
  text-align: center
  background-image: url("/img/bg/Koffer.jpg")

</style>
