<template>
  <div class="container">
    <div class="card" v-for="layout in layouts" :key="layout.path">
      <div style="margin-bottom: 1rem;">
        <h2>Layout: {{ layout.name }}</h2>
        <div><b>css system:</b>{{ layout.cssSystem }}</div>
        <div><b>responsive:</b>{{ layout.responsive }}</div>
      </div>
      <iframe :src="getLayoutFullPath(layout.path)"
        style="height: 300px; width: 600px; margin-bottom: 1rem; border-radius: 0.5rem; "></iframe>
      <div style="border-top: 1px solid #ccc; padding-top: 1rem; display: flex; justify-content: end; gap: 0.5rem;">
        <button class="button" @click="router.push({ name: layout.path })">Preview</button>
        <button class="button" @click="openCode(layout.codeLink)">Code</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '../router';

const layouts = [
  {
    name: 'Sidebar - Content',
    cssSystem: 'grid',
    responsive: false,
    description: '',
    path: 'layout1',
    codeLink: 'https://github.com/sdiricco/vue-layouts/blob/master/src/views/Layout1.vue'
  },
  {
    name: 'Sidebar - Header - Content',
    cssSystem: 'grid',
    responsive: false,
    description: '',
    path: 'layout2',
    codeLink: 'https://github.com/sdiricco/vue-layouts/blob/master/src/views/Layout2.vue'
  }
]

const getLayoutFullPath = (path:string) => `${router.options.history.base}/${path}`
const openCode = (link:string) => window.open(link, '_blank')  

</script>

<style scoped>
.container {
  margin: 16px;
  display: flex;
  gap: 1rem;
}
</style>