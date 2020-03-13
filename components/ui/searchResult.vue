<template>
  <div>
    <v-row>
      <v-col> {{ result.length }} {{ $t('message.works') }} </v-col>
      <v-col class="text-right">
        <v-btn-toggle v-model="toggle_exclusive" mandatory>
          <v-btn>
            <v-icon>mdi-view-list</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-view-grid</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-table</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <template v-if="toggle_exclusive === 1">
      <v-row>
        <v-col v-for="(obj, key) in result" :key="key" :cols="6" :md="3">
          <v-card
            :to="
              localePath({
                path: '/item',
                query: { file_no: obj.file_no }
              })
            "
          >
            <v-img
              :contain="true"
              :src="obj.thumbnail"
              max-height="200px"
            ></v-img>

            <v-card-text>
              <template v-if="$i18n.locale == 'ja'">
                <small>{{ key + 1 }}.</small> 第{{ obj.plate }}葉{{
                  obj.constellation
                }}
              </template>
              <template v-else>
                <small>{{ key + 1 }}.</small> page {{ obj.plate
                }}{{ obj.constellation }}
              </template>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>

    <template v-else-if="toggle_exclusive === 0">
      <v-card
        v-for="(obj, key) in result"
        :key="key"
        :to="
          localePath({
            path: '/item',
            query: { file_no: obj.file_no }
          })
        "
        class="my-5"
      >
        <v-card-text>
          <v-row>
            <v-col :cols="12" :md="3">
              <v-img
                :contain="true"
                :src="obj.thumbnail"
                class="mt-2"
                max-height="200px"
              ></v-img>
            </v-col>
            <v-col :cols="12" :md="9">
              <small>{{ key + 1 }}</small
              ><br />
              <template v-if="$i18n.locale == 'ja'">
                <small
                  ><b>{{ obj.volume }}巻</b> {{ obj.series_JP }}</small
                >
                <br />
                <b>{{ obj.plate }}葉{{ obj.constellation }}</b>
                {{ obj.title_JP }}
                <br />
                {{ obj.title }}
                <br />
                <p v-if="obj.Edificio_IL" class="mt-2">
                  <b>Edificio_IL: </b> {{ obj.Edificio_IL }}
                </p>
              </template>
              <template v-else>
                <small
                  ><b>Vol.{{ obj.volume }}</b> {{ obj.series }}</small
                >
                <br />
                <b>page.{{ obj.plate }}{{ obj.constellation }}</b>
                {{ obj.title }}
              </template>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  props: ['result'],
  data: () => ({
    toggle_exclusive: 0
  })
}
</script>
