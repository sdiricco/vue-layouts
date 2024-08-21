<template>
  <!--Main container-->
  <div class="main-container">
    <!--Sidebar container-->
    <div class="sidebar-container">
      <slot name="sidebar"></slot>
    </div>
    <!-- Content container -->
    <div class="content-container">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 20rem 1fr;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.sidebar-container {
  overflow-y: auto;
}

.content-container {
  overflow-y: auto;
}
</style>