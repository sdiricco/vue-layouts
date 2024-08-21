<template>
  <PageTemplate1>
    <template #sidebar>
      <ContentPlaceholder title="Sidebar" :words="200" bg-color="#eee "/>
    </template>
    <template #content>
      <ContentPlaceholder title="Content" :words="2000" bg-color="#fff"/>
    </template>
  </PageTemplate1>
</template>

<script setup lang="ts">
import PageTemplate1 from '../components/PageTemplate1.vue';
import ContentPlaceholder from '../components/shared/ContentPlaceholder.vue';
</script>

