export default {
  methods: {
    get_print_data(response) {
      const result = response.data

      const data = {}
      const index = {}

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

      return {
        data,
        index
      }
    },

    get_photo_data(response) {
      const result = response.data

      const data = {}
      const index = {}

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

        map.manifest = obj['@id']
      }

      return {
        data,
        index
      }
    }
  }
}
