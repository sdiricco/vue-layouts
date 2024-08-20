<template>
  <!--Main container-->
  <div class="main-container">
    <!--Sidebar container-->
    <div class="sidebar-container" style="width: 260px">
      <div class="content">
        Sidebar
      </div>
    </div>
    <!-- Content container -->
    <div class="content-container">
      <div class="content">
        Content
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main-container{
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.sidebar-container{
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-shrink: 0;
  overflow-x: hidden;
  background-color: #eee;
}

.sidebar-container .content {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid #666;
  border-radius: 1rem;
  border-style: dashed;
}

.content-container{
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  flex-grow: 1;
}

.content-container .content {
  height: 100%;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid #666;
  border-radius: 1rem;
  border-style: dashed;
}

</style>
