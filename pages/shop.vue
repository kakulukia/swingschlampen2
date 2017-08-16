<template lang="pug">
  .page.center
    v-container
      h1 Das Date

      img(src="/img/dateCover.png")

      v-layout(row-sm, column, child-flex-sm)
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
          br
          p Hier kannst Du dir das Booklet der CD herunterladen:&nbsp;
            a(href="/pdf/das Date-Booklet.pdf", target="_blank") PDF

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
