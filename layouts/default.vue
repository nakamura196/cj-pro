<template>
  <v-app>
    <Header />

    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      @click="toTop"
      fab
      dark
      fixed
      bottom
      right
      large
      color="error"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>

    <br />

    <v-content>
      <nuxt />
    </v-content>

    <v-footer :dark="true" class="mt-5">
      <v-container>
        <p class="text-center my-5">
          {{ $t('project') }}
        </p>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '~/components/layouts/header.vue'

export default {
  components: {
    Header
  },
  data: () => ({
    fab: false
  }),
  methods: {
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'ja' ? 'en' : 'ja'
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
<style>
.v-btn {
  text-transform: none !important;
}
</style>
