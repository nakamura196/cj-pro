<template>
  <div>
    <v-container>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(value, i) in data" :key="i">
            <v-list-item-content>
              <router-link
                :to="{ path: '/maprf', query: { Edificio_IL: value } }"
                >{{ value }}</router-link
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    data: []
  }),
  created() {
    this.init()
  },
  methods: {
    init() {
      axios
        .get(
          'https://raw.githubusercontent.com/nakamura196/piranesi/master/docs/print/iiif/top.json'
        )
        .then((response) => {
          const result = response.data

          const data = {}
          const index = {}

          // 初期化
          const manifests = result.manifests
          for (let i = 0; i < manifests.length; i++) {
            const obj = manifests[i]
            const metadata = obj.metadata

            const map = {}
            for (let j = 0; j < metadata.length; j++) {
              const m = metadata[j]
              const label = m.label
              const value = m.value
              if (!index[label]) {
                index[label] = {}
              }
              if (!index[label][value]) {
                index[label][value] = []
              }
              index[label][value].push(obj['@id'])

              map[label] = value
            }

            data[obj['@id']] = map

            map.thumbnail = obj.thumbnail
            map.manifest = obj['@id']
          }

          const obj = index.Edificio_IL
          const arr = []
          for (const key in obj) {
            arr.push(key)
          }
          this.data = arr.sort()
        })
    }
  }
}
</script>
