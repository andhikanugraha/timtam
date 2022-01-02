<script setup lang="ts">
import { ref } from 'vue'
import { normalizeCity } from '../timezones'
import OptionTimeZone from './OptionTimeZone.vue'

const props = defineProps<{
  label: string,
  autoclear?: boolean
}>()

const emit = defineEmits<{
  (e: 'select', timeZone: string, label: string): void
}>()

const selectedTimeZone = ref('')

function handleChange() {
  emit('select', selectedTimeZone.value, normalizeCity(selectedTimeZone.value))
  if (props.autoclear) {
    selectedTimeZone.value = ''
  }
}
</script>

<template>
<select @change="handleChange" v-model="selectedTimeZone">
  <option disabled value="" class="italic bg-white p-1">{{ props.label }}</option>
  <option-time-zone></option-time-zone>
</select>
</template>