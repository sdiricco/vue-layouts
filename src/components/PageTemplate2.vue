<template>
  <!-- Main container -->
  <div class="root-container">
    <!-- Sidebar container -->
    <div class="sidebar-container">
      <slot name="sidebar"></slot>
    </div>
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
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.root-container {
  display: grid;
  grid-template-columns: 20rem 1fr;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.sidebar-container {
  height: 100%;
  overflow-y: auto;
}

.main-container {
  display: grid;
  grid-template-rows: auto 1fr; 
  height: 100%;
  overflow: hidden;
}

.main-container .content {
  overflow-y: auto;
}
</style>
