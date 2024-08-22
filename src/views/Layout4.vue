<template>
  <PageTemplate4>
    <template #header>
      <ContentPlaceholder title="Header" background-color="#000" color="#fff"/>
    </template>
    <template #content>
      <ContentPlaceholder title="Content" :words="2000" bg-color="#fff"/>
    </template>
    <template #footer>
      <ContentPlaceholder title="Footer" background-color="#000" color="#fff"/>
    </template>
  </PageTemplate4>
</template>

<script setup lang="ts">
import PageTemplate4 from '../components/PageTemplate4.vue';
import ContentPlaceholder from '../components/shared/ContentPlaceholder.vue';
</script>

