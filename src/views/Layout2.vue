<template>
  <PageTemplate2>
    <template #sidebar>
      <ContentPlaceholder title="Sidebar" :words="200" background-color="#000" color="#fff"/>
    </template>
    <template #header>
      <ContentPlaceholder title="Header" background-color="#000" color="#fff"/>
    </template>
    <template #content>
      <ContentPlaceholder title="Content" :words="2000" bg-color="#fff"/>
    </template>
  </PageTemplate2>
</template>

<script setup lang="ts">
import PageTemplate2 from '../components/PageTemplate2.vue';
import ContentPlaceholder from '../components/shared/ContentPlaceholder.vue';
</script>

