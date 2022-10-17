<script setup lang="ts">
const props = defineProps<{
  heading?: boolean
  tag?: string
  side?: 'left' | 'right'
  icon?: string
  avatar?: string
  color?: string
  title?: string
  subtitle?: string
  body?: string
}>()
</script>

<template>
  <QTimelineEntry v-bind="props">
    <ContentSlot :use="$slots.default" />
  </QTimelineEntry>
</template>
