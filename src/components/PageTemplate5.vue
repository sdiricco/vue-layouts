<template>
  <!-- Main container -->
  <div class="main-container">
    <!-- Header -->
    <header class="header">
      <slot name="header"></slot>
    </header>
    <!-- Main content -->
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.sidebar-container {
  height: 100%;
  overflow-y: auto;
}

.main-container {
  display: grid;
  grid-template-rows: auto;
  height: 100%;
  overflow: hidden;
}

.main-container .content {
  overflow-y: auto;
}
</style>
