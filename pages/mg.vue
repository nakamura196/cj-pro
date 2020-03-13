<template>
  <div class="my-12">
    <v-container>
      <h2>{{ $t('please_input_item_id_from_js_or_cj') }}</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="id" label="ID" required></v-text-field>
        <v-btn @click="check" color="primary" class="mr-4">
          {{ $t('execute') }}
        </v-btn>
      </v-form>

      <template v-if="uri !== null">
        <v-sheet class="pa-6 mt-12" color="grey lighten-3">
          <h2>{{ $t('result') }}</h2>
          <a :href="uri" class="mr-4" target="_blank"
            ><img
              width="30px"
              src="https://pbs.twimg.com/profile_images/596366309601845248/2uaPY5NH_400x400.png"
          /></a>
          <a
            v-for="viewer in viewers"
            :key="viewer.image"
            :href="viewer.url + uri"
            target="_blank"
            class="mr-4"
            ><img :src="viewer.image" width="30px"
          /></a>
        </v-sheet>
      </template>

      <h2 class="mt-12">{{ $t('example') }}</h2>

      <v-container fluid>
        <v-row dense>
          <v-col v-for="result in results" :key="result.s.value" :cols="4">
            <v-card @click="add(result.s.value)">
              <v-img
                :src="result.image.value"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                contain
              >
                <v-card-title v-text="result.label.value"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    results: '',
    id: '',
    uri: null,
    viewers: [
      {
        image: 'https://iiif.dl.itc.u-tokyo.ac.jp/images/mirador.png',
        url: 'http://da.dl.itc.u-tokyo.ac.jp/mirador/?manifest='
      },
      {
        image: 'https://iiif.dl.itc.u-tokyo.ac.jp/images/uv.png',
        url: 'http://universalviewer.io/examples/uv/uv.html#?manifest='
      },
      {
        image: 'https://www.kanzaki.com/parts/me128b.png',
        url: 'http://www.kanzaki.com/works/2016/pub/image-annotator?u='
      },
      {
        image: 'https://iiif.dl.itc.u-tokyo.ac.jp/images/icp.png',
        url:
          'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest='
      }
    ]
  }),
  mounted() {
    const query = `
    PREFIX jps: <https://jpsearch.go.jp/term/property#>
    PREFIX schema: <http://schema.org/>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    select * where {
      ?s jps:accessInfo ?accessinfo . 
      ?s schema:image ?image . 
      ?s rdfs:label ?label . 
      ?accessinfo schema:associatedMedia ?media
    }
    ORDER BY RAND() 
    LIMIT 12
    `

    axios
      .get('https://jpsearch.go.jp/rdf/sparql', {
        params: {
          query
        }
      })
      .then((response) => {
        this.results = response.data.results.bindings
      })
  },
  methods: {
    check() {
      this.uri = null
      const manifest = 'https://api.cultural.jp/iiif/' + this.id + '/manifest'
      axios.get(manifest).then((response) => {
        if (response.data['@type'] === 'sc:Manifest') {
          this.uri = manifest
        }
      })
    },
    add(uri) {
      const tmp = uri.split('/')
      this.id = tmp[tmp.length - 1]
      this.check()
    }
  }
}
</script>
