<script setup lang="ts">
import { useState, useComputedDate } from '../state';
import { normalizeCity } from '../timezones';
import VClock from './VClock.vue'
import SelectTimeZone from './SelectTimeZone.vue'

const state = useState()
const date = useComputedDate()

function addTimeZone(tz: string, label: string) {
  state.viewTimeZones.push([tz, label])
}
function removeTimeZone(index: number) {
  state.viewTimeZones.splice(index, 1)
}
</script>

<template>
  <h1 class="text-lg font-bold mb-4">3. Results</h1>

  <v-clock
    v-if="!state.useCurrentTime && state.manualTimeZone"
    :date="date"
    :timezone="state.manualTimeZone"
    :label="normalizeCity(state.manualTimeZone)"
  ></v-clock>
  <v-clock :date="date"></v-clock>
  <v-clock
    :date="date"
    v-for="([tz, label], idx) in state.viewTimeZones"
    :key="tz"
    :timezone="tz"
    :label="label"
    closable
    @close="removeTimeZone(idx)"
  ></v-clock>

  <div class="mb-6 -mx-2">
    <select-time-zone
      @select="addTimeZone"
      class="p-2 w-full bg-purple-500 hover:bg-purple-600 shadow text-white border rounded-lg appearance-none text-center cursor-pointer"
      label="Show in another timezone"
      autoclear
    ></select-time-zone>
  </div>
</template>