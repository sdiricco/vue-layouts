<template>
  <PageTemplate1>
    <template #sidebar>
      <ContentPlaceholder title="Sidebar" :words="200" background-color="#000" color="#fff"/>
    </template>
    <template #content>
      <ContentPlaceholder title="Content" :words="2000"/>
    </template>
  </PageTemplate1>
</template>

<script setup lang="ts">
import PageTemplate1 from '../components/PageTemplate1.vue';
import ContentPlaceholder from '../components/shared/ContentPlaceholder.vue';
</script>

