<template lang="pug">
.page.center
  .content
    v-container

      a(v-tooltip:right="{ html: 'PDF-Booklet herunterladen' }", href="/pdf/das Date-Booklet.pdf", target="_blank")
        img(src="/img/dateCover.png")
      iframe(src="https://open.spotify.com/embed/artist/4Qeo7kAAnCUzr0ABpRPZqZ", width="300", height="364", frameborder="0", allowtransparency="true", allow="encrypted-media")

      v-layout(row-sm, child-flex-sm)
        v-card-text.ma-1
          p Hier kannst Du unser neues Album bestellen!
            br
            | Mit dem Klick auf "Jetzt kaufen" wirst Du zu PayPal weitergeleitet.
          form(action="https://www.paypal.com/cgi-bin/webscr", method="post", target="_top")
            input(type="hidden", name="cmd", value="_s-xclick")
            input(type="hidden", name="hosted_button_id", value="XVFZBXLXS5VLE")
            input(type="image", src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_buynow_LG.gif", border="0", name="submit", alt="Jetzt einfach, schnell und sicher online bezahlen – mit PayPal.")
            img(alt="", border="0", src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif", width="1", height="1")

          br
          p PS: Uns kann man auch #[a(href="https://itunes.apple.com/de/album/das-date/1327971493") bei iTunes genießen].

  Footer
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.page
  background-image: url("/img/bg/Zunge.jpg")

form img
  border: none
  outline: none
</style>
