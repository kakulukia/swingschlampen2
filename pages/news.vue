<template lang="pug">
  .page.center
    .content
      v-container
        h2 Neues von den SwingSchlampen
        v-layout(column)
          v-card-text.ma-2.news(v-for='article, index in news', key="index")
            h2 {{ article.title }}
            .content(v-html='article.text')
    Footer
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
        item.text = item.text.replace(
          new RegExp('width: [0-9]+px', 'g'), '')
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
    font-size: 16px
    text-align: left
    h2
      font-family: "SF-Hollywood-Hills", serif
      text-shadow: 2px 2px 2px #333
    img
      display: block
      margin: 3em auto
      width: 70%
      clear: both

</style>
