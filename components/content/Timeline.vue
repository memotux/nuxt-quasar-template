<script setup lang="ts">
const props = defineProps<{
  color?: string
  side?: 'left' | 'right'
  layout?: 'dense' | 'comfortable' | 'loose'
  dark?: boolean
}>()
</script>

<template>
  <QTimeline v-bind="props">
    <slot />
  </QTimeline>
</template>
