<template lang="pug">
  .page.center
    v-container
      h2 Hier kannst Du uns als naechstes sehen

      dl.dates
        template(v-for='date,index  in dates')
          dt {{ date.start | moment("dd, Do MMMM YYYY") }}
          dd {{ date.name }}
          br
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data: function () {
    return {
      dates: []
    }
  },
  created: function () {
    let app = this
    axios.get('/dates/').then(function (response) {
      app.dates = response.data
    })
  }
}
</script>

<style lang="sass" scoped>
.page
  background-image: url("/img/bg/Schiff.jpg")

  .dates
    margin-top: 4em
  dt, dd
    width: 50%
    display: inline-block
    margin-bottom: 3px
  dt
    text-align: right
    padding-right: 1em
  dd
    border-left: 2px solid #333
    text-align: left
    padding-left: 1em
</style>
