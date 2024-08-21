<template>
  <PageTemplate3>
    <template #sidebar>
      <ContentPlaceholder title="Sidebar" :words="200" bg-color="#eee "/>
    </template>
    <template #header>
      <ContentPlaceholder title="Header" bg-color="#ddd"/>
    </template>
    <template #content>
      <ContentPlaceholder title="Content" :words="2000" bg-color="#fff"/>
    </template>
    <template #footer>
      <ContentPlaceholder title="Footer" bg-color="#ddd"/>
    </template>
  </PageTemplate3>
</template>

<script setup lang="ts">
import PageTemplate3 from '../components/PageTemplate3.vue';
import ContentPlaceholder from '../components/shared/ContentPlaceholder.vue';
</script>

