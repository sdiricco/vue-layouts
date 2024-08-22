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
    <!-- Footer -->
    <header class="footer">
      <slot name="footer"></slot>
    </header>
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
  grid-template-rows: auto 1fr auto;
  height: 100%;
  overflow: hidden;
}

.main-container .content {
  overflow-y: auto;
}
</style>
