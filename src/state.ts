import { computed, reactive, ref, watchEffect } from 'vue'
import type { ComputedRef } from 'vue'
import { add, sub } from 'date-fns'

const Units = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'] as const

export { Units }

export interface TimeOperation {
  operation: string | 'add' | 'sub'
  count: number
  unit: string | typeof Units[number]
}

const state = reactive({
  useCurrentTime: true,
  manualTime: new Date(),
  manualTimeZone: '',
  manipulations: [{
    operation: 'add',
    count: 0,
    unit: 'hours'
  }] as TimeOperation[],
  viewTimeZones: [] as [string, string][]
})

export function useState() {
  return state
}

const currentTime = ref<Date>(new Date())

function scheduleTick() {
  return window.setInterval(() => {
    currentTime.value = new Date()
  }, 1000)
}

const tick = ref<number>(scheduleTick())
watchEffect(() => {
  if (state.useCurrentTime) {
    currentTime.value = new Date()
    tick.value = scheduleTick()
  } else {
    window.clearInterval(tick.value)
  }
})

const base = computed(() => state.useCurrentTime ? currentTime.value : state.manualTime)

export function useCurrentTime() {
  return currentTime
}

export function useComputedDate(): ComputedRef<Date> {
  return computed(() => {
    let date = base.value
    for (const op of state.manipulations) {
      if (op.operation === 'add') {
        date = add(date, { [op.unit]: op.count })
      } else {
        date = sub(date, { [op.unit]: op.count })
      }
    }

    return date
  })
}