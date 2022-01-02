<script setup lang="ts">
import { cities } from '../timezones'
</script>

<template>
  <option v-for="[tz, city] in cities" :key="tz" :value="tz" class="bg-white text-gray-800">{{ city }}</option>
</template>