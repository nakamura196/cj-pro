<template>
  <div>
    <v-container>
      <br />
      <h3>
        {{ data.Edificio_i }}
        <i>{{ data.Edificio_l }}</i>
      </h3>
      <br />
      <h2>{{ data.Didascalia }}</h2>
    </v-container>

    <iframe
      v-if="data != null"
      :src="uv"
      :key="'jotform-iframe-' + uv"
      width="100%"
      height="600px"
      allowfullscreen
      frameborder="0"
    ></iframe>

    <v-container>
      <div class="text-right">
        <p>
          <small
            >Photo by {{ data.photographer }}, {{ data.photo_date }}.</small
          >
        </p>
        <p>
          <small>Description by Natsumi ARAKI.</small>
        </p>
      </div>

      <p>{{ data["Parte dell'oggetto"] }}</p>
      <p>{{ data['Cronologia'] }}</p>
      <br />
      <small>Localizzazione moderna:</small>

      {{ data['Localizzazione moderna'] }}
    </v-container>
  </div>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    uv() {
      const url =
        'https://universalviewer.io/examples/uv/./uv.html#?manifest=' +
        encodeURIComponent(this.data.manifest)
      return url
    }
  }
}
</script>
