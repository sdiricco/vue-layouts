<template>
  <PageTemplate3>
    <template #sidebar>
      <ContentPlaceholder title="Sidebar" :words="200" background-color="#000" color="#fff"/>
    </template>
    <template #header>
      <ContentPlaceholder title="Header" background-color="#000" color="#fff"/>
    </template>
    <template #content>
      <ContentPlaceholder title="Content" :words="2000" bg-color="#fff"/>
    </template>
    <template #footer>
      <ContentPlaceholder title="Footer" background-color="#000" color="#fff"/>
    </template>
  </PageTemplate3>
</template>

<script setup lang="ts">
import PageTemplate3 from '../components/PageTemplate3.vue';
import ContentPlaceholder from '../components/shared/ContentPlaceholder.vue';
</script>

