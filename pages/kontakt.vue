<template lang="pug">
  .page
    el-row(:gutter="20")
      el-col(:span="8")
        h4 Kontakt
      el-col(:span="8")
        h4 Booking
      el-col(:span="8")
        h4 Label
    el-row(:gutter="20")
      el-col(:span="8")
        p(style='white-space:pre;').
          Management
          Die Swing Schlampen GbR
          Am Heideberg 50
          15738 Zeuthen
          (Autogrammadresse)
      el-col(:span="8")
        p(style='white-space:pre;').
          Die Swing Schlampen GbR
          E-Mail: swingschlamps@gmail.com
          Tel. 0176 8757 6699
      el-col(:span="8")
        p(style='white-space:pre;').
          Calygram
          Calyra GmbH
          Verlag und Medien
          Ernst-König-Straße 1-2
          D -06108 Halle (Saale)

</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.page
  background-image: url("/img/bg/Koffer.jpg")
</style>
