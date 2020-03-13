<template>
  <div>
    <section class="mb-5">
      <v-parallax src="/hero.jpg" height="600">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-center">
            <b>{{ $t('title') }}</b>
          </h1>
        </v-layout>
      </v-parallax>
    </section>

    <v-container>
      <p class="display-1 text--primary text-center my-5">
        {{ $t('message.about') }}
      </p>
      <p v-if="$i18n.locale == 'en'">
        About
      </p>
      <p v-else>
        あばうと
      </p>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>
