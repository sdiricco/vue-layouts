<template>
  <div class="container-wrapper">

    <div class="container">
      <div class="card flex flex-column m-bottom-1rem" v-for="layout in layouts" :key="layout.path">
        <div style="margin-bottom: 1rem;">
          <h2>Layout: {{ layout.name }}</h2>
          <div><b>css system:</b>{{ layout.cssSystem }}</div>
          <div><b>responsive:</b>{{ layout.responsive }}</div>
        </div>
        <iframe :src="getLayoutFullPath(layout.path)" class="iframe" frameborder="0"></iframe>
        <div class="border-top p-top-1rem flex justify-content-end gap-05rem">
          <button class="button" @click="router.push({ name: layout.path })">Preview</button>
          <button class="button" @click="openCode(layout.codeLink)">Code</button>
        </div>
      </div>
    </div>
  </div>

  <footer style="padding: 1rem; background-color: black; color: white;">
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
  },
  {
    name: 'Header - Content - Footer',
    cssSystem: 'grid',
    responsive: false,
    description: '',
    path: 'layout4',
    codeLink: 'https://github.com/sdiricco/vue-layouts/blob/master/src/components/PageTemplate4.vue'
  },
  {
    name: 'Header - Content',
    cssSystem: 'grid',
    responsive: false,
    description: '',
    path: 'layout5',
    codeLink: 'https://github.com/sdiricco/vue-layouts/blob/master/src/components/PageTemplate5.vue'
  }
]

const getLayoutFullPath = (path: string) => `${router.options.history.base}/${path}`
const openCode = (link: string) => window.open(link, '_blank')

</script>

<style scoped>

.container-wrapper{
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  overflow-x: auto;
}

.container {
  max-width: 800px;
  min-width: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;

}
</style>