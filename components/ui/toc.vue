<template>
  <div>
    <v-select
      :items="items"
      :label="$t('message.browse')"
      @change="select"
      v-model="index"
      item-text="text"
      item-value="value"
    ></v-select>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
    index: ''
  }),
  created() {
    for (let i = 1; i <= 29; i++) {
      this.items.push({
        value: i,
        text: this.$i18n.locale === 'ja' ? '第' + i + '巻' : 'Vol.' + i
      })
    }
  },
  methods: {
    select() {
      this.$router.push(
        this.localePath({
          path: '/volume',
          query: { volume: this.index }
        })
      )
    }
  }
}
</script>
