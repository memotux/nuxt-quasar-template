<script setup lang="ts">
const props = defineProps<{ vertical?: boolean; icons?: boolean }>()
const {
  menu: { main },
} = useAppConfig()

const horizontal = props.vertical ? undefined : 'row q-gutter-md flex-center'
</script>

<template>
  <QList padding class="text-body" :class="horizontal">
    <QItem
      v-for="item in main"
      :key="item.name"
      :active="$route.path.endsWith(item.url)"
      :to="{
        path: item.url.startsWith('/#') ? '/' : item.url,
        hash: item.url.startsWith('/#') ? item.url.substring(1) : undefined,
      }"
      active-class="bg-accent"
    >
      <QItemSection v-if="icons && item.icon" side
        ><QIcon :name="item.icon"
      /></QItemSection>
      <QItemSection>{{ item.title }}</QItemSection>
    </QItem>
    <slot />
  </QList>
</template>
