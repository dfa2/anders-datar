<template>
<div>
  <navbar />
  <weather :text="message" />
</div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import '@nuxtjs/axios'
import '@nuxtjs/bulma'
import { BootstrapVue, IconsPlugin, LayoutPlugin } from 'bootstrap-vue'

import Navbar from '~/components/Navbar.vue'
import Weather from '~/components/Weather.vue'
import { TemperatureResponse } from '~/interfaces/responses'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)

export default Vue.extend({
    components: {
	Weather,
	Navbar,
    },
    asyncData: ({ app }) => app.$axios
	.get('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16/lat/58/data.json').then(({ data }: { data: TemperatureResponse }) => ({ message: data })),
    data: () => ({
	message: 'initial message'
    })
})

</script>

<style>
  .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  }
  
  .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  }
  
  .subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  }
  
  .links {
  padding-top: 15px;
  }
</style>
