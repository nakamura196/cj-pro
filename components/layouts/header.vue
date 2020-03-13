<template>
  <div>
    <v-navigation-drawer v-model="drawer" :temporary="true" app overflow>
      <v-list>
        <v-list-item :to="localePath({ name: 'index' })" link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="localePath({ name: 'mg' })" link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{
              $t('manifest_generator')
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link
          :to="localePath('/')"
          style="color: inherit;
  text-decoration: inherit;"
        >
          {{ $t('title') }}
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn :to="switchLocalePath('en')" v-if="$i18n.locale == 'ja'" text>
        English
      </v-btn>
      <v-btn :to="switchLocalePath('ja')" v-if="$i18n.locale == 'en'" text>
        日本語
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: false
    }
  }
}
</script>
