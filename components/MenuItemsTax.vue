<script setup lang="ts">
defineProps<{ tax: 'category' | 'tag' }>()
const { taxonomy } = useAppConfig()
</script>

<template>
  <QItem
    v-for="item in taxonomy[tax]"
    :key="item.name"
    :active="$route.path.endsWith(item.name)"
    :to="`/${tax === 'tag' ? 'tag' : 'cat'}/${item.name}`"
    active-class="bg-accent"
  >
    <QItemSection>{{ item.title }}</QItemSection>
  </QItem>
</template>
