<template>
  <PageTemplate5>
    <template #header>
      <ContentPlaceholder title="Header" background-color="#000" color="#fff"/>
    </template>
    <template #content>
      <ContentPlaceholder title="Content" :words="2000" bg-color="#fff"/>
      <ContentPlaceholder title="Footer" background-color="#000" color="#fff"/>
    </template>
  </PageTemplate5>
</template>

<script setup lang="ts">
import PageTemplate5 from '../components/PageTemplate5.vue';
import ContentPlaceholder from '../components/shared/ContentPlaceholder.vue';
</script>

