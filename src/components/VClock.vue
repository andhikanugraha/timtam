<script setup lang="ts">
import { computed } from 'vue'
import { format, formatInTimeZone } from 'date-fns-tz'
import VClose from './VClose.vue'
import { normalizeCity } from '@/timezones'

const props = defineProps<{
  date: Date
  closable?: boolean
  timezone?: string
  label?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const DATE_FORMAT = 'PPPP'
const TIME_FORMAT = 'pp'
const TZ_FORMAT = "'UTC'xxx zzzz"

const formattedDate = computed(() => {
  if (props.timezone) {
    return formatInTimeZone(props.date, props.timezone, DATE_FORMAT)
  } else {
    return format(props.date, DATE_FORMAT)
  }
})

const formattedTime = computed(() => {
  if (props.timezone) {
    return formatInTimeZone(props.date, props.timezone, TIME_FORMAT)
  } else {
    return format(props.date, TIME_FORMAT)
  }
})

const label = computed<string>(() => {
  if (props.label) {
    return props.label
  }
  if (props.timezone) {
    return normalizeCity(props.timezone)
  }

  return '📍'
})

const tzName = computed(() => {
  if (props.timezone) {
    let format = TZ_FORMAT
    if (props.timezone.includes('GMT'))
      format = 'zzzz'
    return formatInTimeZone(props.date, props.timezone, format)
  } else {
    return format(props.date, TZ_FORMAT)
  }
})

function handleClose() {
  emit('close')
}
</script>

<template>
  <div class="mb-4 bg-white -mx-2 p-4 rounded-lg">
    <v-close v-if="props.closable" @click="handleClose"></v-close>
    <span class="text-purple-500 block mb-1">
      <span v-if="label" class="font-semibold text-purple-800 mr-1">{{ label }}</span>
      {{ tzName }}
    </span>
    <br class="hidden" />
    <span class="block mb-1">{{ formattedDate }}</span>
    <br class="hidden" />
    <span class="text-4xl font-bold font-mono block">{{ formattedTime }}</span>
  </div>
</template>

