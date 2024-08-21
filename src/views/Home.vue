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
  <footer style="padding: 1rem; background-color: #ccc;">
    <h3>Footer</h3>
  </footer>

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
    codeLink: 'https://github.com/sdiricco/vue-layouts/blob/master/src/components/PageTemplate1.vue'
  },
  {
    name: 'Sidebar - Header - Content',
    cssSystem: 'grid',
    responsive: false,
    description: '',
    path: 'layout2',
    codeLink: 'https://github.com/sdiricco/vue-layouts/blob/master/src/components/PageTemplate2.vue'
  },
  {
    name: 'Sidebar - Header - Content - Footer',
    cssSystem: 'grid',
    responsive: false,
    description: '',
    path: 'layout3',
    codeLink: 'https://github.com/sdiricco/vue-layouts/blob/master/src/components/PageTemplate3.vue'
  }
]

const getLayoutFullPath = (path:string) => `${router.options.history.base}/${path}`
const openCode = (link:string) => window.open(link, '_blank')  

</script>

<style scoped>
.container {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>