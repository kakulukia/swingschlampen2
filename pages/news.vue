<template lang="pug">
  .page.center
    v-container
      h2 Neues von den SwingSchlampen
      v-layout(column)
        v-card-text.ma-2.news(v-for='article, index in news', key="index")
          h2 {{ article.title }}
          .content(v-html='article.text')
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data: function () {
    return {
      news: []
    }
  },
  created: function () {
    let app = this
    axios.get('/news/').then(function (response) {
      let news = response.data
      news.forEach(function (item) {
        item.text = item.text.replace(
          new RegExp('src="/media', 'g'),
          'src="' + process.env.baseUrl + '/media')
      })
      app.news = news
    })
  }
}
</script>

<style lang="sass">
.page
  background-image: url("/img/bg/Geheimnis.jpg")

  .news
    text-align: left
    h2
      font-family: "SF-Hollywood-Hills", serif
      text-shadow: 2px 2px 2px #333
    img
      display: block
      margin: 1em auto
      clear: both

      &:first-of-type
        margin-top: 0

      &.fr-fil
        float: left
        margin-right: 1em
      &.fr-fir
        float: right
        margin-left: 1em
</style>
