<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { format, zonedTimeToUtc } from 'date-fns-tz'
import { useCurrentTime, useState } from '../state';
import VClock from './VClock.vue'
import VButton from './VButton.vue'
import OptionTimeZone from './OptionTimeZone.vue'

const state = useState()

const currentTime = useCurrentTime()

const manualTime = ref<string>(format(currentTime.value, "yyyy-MM-dd'T'HH:mm:ss"))
watchEffect(() => {
  if (state.manualTimeZone) {
    state.manualTime = zonedTimeToUtc(new Date(manualTime.value), state.manualTimeZone)
  } else {
    state.manualTime = new Date(manualTime.value)
  }
})

const localTimeZoneName = format(new Date(), 'zzzz')

</script>

<template>
  <h1 class="text-lg font-bold mb-4">1. Set initial time</h1>
  <template v-if="state.useCurrentTime">
    <v-clock :date="currentTime"></v-clock>
    <div class="-mx-2">
      <v-button @click="state.useCurrentTime = false">Set manually</v-button>
    </div>
  </template>
  <template v-else>
    <v-clock :date="state.manualTime" :timezone="state.manualTimeZone"></v-clock>
    <div class="-mx-2 rounded-lg">
      <input
        type="datetime-local"
        v-model="manualTime"
        class="block w-full p-4 rounded-lg bg-white mb-4 border shadow"
      />
      <select
        class="block w-full rounded-lg p-4 bg-white mb-4 border shadow focus:outline focus:outline-purple-500"
        v-model="state.manualTimeZone"
      >
        <option disabled selected>Select a time zone</option>
        <option value>&#128205; <!-- map pushpin emoji --> {{ localTimeZoneName }}</option>
        <option-time-zone></option-time-zone>
      </select>
    </div>
    <div class="-mx-2">
      <v-button @click="state.useCurrentTime = true">Use current time</v-button>
    </div>
  </template>
</template>