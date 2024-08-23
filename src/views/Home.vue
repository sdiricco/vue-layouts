<template>

  <PageTemplate5>
    <template #header>
      <header class="flex p-1rem justify-content-end bg-primary color-primary-inverse">
        <ButtonIcon @click="openLink('https://github.com/sdiricco/vue-layouts')">
          <Icon icon="mdi:github" style="font-size: 2rem;" />
        </ButtonIcon>
      </header>
    </template>
    <template #content>
      <div class="container-wrapper">
        <div class="container">
          <Carousel>
            <Slide v-for="layout in layouts" :key="layout.path">
              <div class="carousel__item">
                <div style="margin-bottom: 1rem;">
                  <h2>Layout: {{ layout.name }}</h2>
                  <div><b>css system:</b>{{ layout.cssSystem }}</div>
                  <div><b>responsive:</b>{{ layout.responsive }}</div>
                </div>
                <iframe :src="getLayoutFullPath(layout.path)" class="iframe" frameborder="0"></iframe>
                <div class="p-top-2rem flex justify-content-end gap-1rem">
                  <button class="button" @click="router.push({ name: layout.path })">Preview</button>
                  <button class="button" @click="openLink(layout.codeLink)">Code</button>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>



      <footer class="flex p-1rem justify-content-center bg-primary color-primary-inverse">
        <h3>Simone Di Ricco</h3>
      </footer>
    </template>
  </PageTemplate5>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import ButtonIcon from '../components/shared/ButtonIcon.vue';
import router from '../router';
import PageTemplate5 from '../components/PageTemplate5.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

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
const openLink = (link: string) => window.open(link, '_blank')

</script>

<style scoped>
.container-wrapper {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  overflow-x: auto;
}

.container {
  max-width: 1200px;
  min-width: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;

}

.carousel__item {
  width: 100%;
  border-radius: 2px;
  padding: 2rem 4rem;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12);
}

.carousel__next .carousel__icon {
  fill: var(--vc-clr-white);
  color: var(--vc-clr-primary);

}

.carousel__slide {
  padding: 10px;
}



</style>

<style>
.carousel__next{
  right: 1rem;
}

.carousel__prev{
  left: 1rem;
}

.carousel .carousel__prev,
.carousel .carousel__next {
  border-radius: 2px;
  box-sizing: content-box;
  border: 5px solid black;
  color: var(--vc-clr-primary);
  fill: var(--vc-clr-white)

}

</style>