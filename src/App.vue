<script setup lang="ts">
import AppInitialTime from './components/AppInitialTime.vue'
import AppManipulate from './components/AppManipulate.vue'
import AppResults from './components/AppResults.vue'
</script>

<template>
  <div class="container mx-auto">
    <p class="text-lg mt-8 lg:mt-16 font-bold mb-4 border-b pb-3 px-4">timtam</p>
    <div class="lg:flex lg:gap-12 mx-4">
      <div class="flex-1 mb-8">
        <app-initial-time></app-initial-time>
      </div>
      <div class="flex-1 mb-8">
        <app-manipulate></app-manipulate>
      </div>
      <div class="flex-1">
        <app-results></app-results>
      </div>
    </div>
  </div>
</template>
