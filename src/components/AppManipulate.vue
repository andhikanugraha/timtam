<script setup lang="ts">
import IconAdd from './IconAdd.vue'
import IconSubtract from './IconSubtract.vue'
import VClose from './VClose.vue'
import VButton from './VButton.vue'
import { useState, Units } from '@/state'

const state = useState()

function addManipulation(operation: 'add' | 'sub') {
  state.manipulations.push({
    operation,
    count: 1,
    unit: 'hours'
  })
}
function removeManipulation(idx: number) {
  state.manipulations.splice(idx, 1)
}
</script>

<template>
  <h1 class="text-lg font-bold mb-4">2. Manipulate it</h1>

  <div v-for="(op, idx) in state.manipulations" :key="idx" class="bg-white -mx-2 px-4 py-2 mb-4 rounded-lg">
    <v-close @click="removeManipulation(idx)" class="-my-0"></v-close>
    <span v-if="op.operation === 'add'" class="text-purple-500">
      <icon-add class="inline-block"></icon-add>&nbsp;Add
    </span>
    <span v-else-if="op.operation === 'sub'" class="text-purple-500">
      <icon-subtract class="inline-block"></icon-subtract>&nbsp;Subtract
    </span>
    <input
      type="number"
      v-model.number="op.count"
      size="4"
      class="bg-white border p-1 text-base mx-4 rounded shadow-sm focus:outline focus:outline-purple-500"
    />
    <select
      v-model="op.unit"
      class="bg-white border p-1 text-base rounded shadow-sm focus:outline focus:outline-purple-500"
    >
      <option v-for="unit in Units" :key="unit">{{ unit }}</option>
    </select>
  </div>

  <div class="flex gap-4 -mx-2">
    <div class="flex-1">
      <v-button @click="addManipulation('sub')">
        <icon-subtract class="inline-block"></icon-subtract>&nbsp;Subtract
      </v-button>
    </div>
    <div class="flex-1">
      <v-button @click="addManipulation('add')">
        Add&nbsp;
        <icon-add class="inline-block"></icon-add>
      </v-button>
    </div>
  </div>
</template>