<script setup lang="ts">
const props = defineProps<{
  link: string
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2' | '8:5'
  skipTo?: {
    h: number
    m: number
    s: number
  }
  autoPlay?: boolean
  title?: string
  caption?: string
}>()

const { h, m, s } = props.skipTo || { h: 0, m: 0, s: 0 }

const tH = h * 60
const tM = m * 60

const startTime = tH + tM + s

const paddings = {
  '1:1': '100%',
  '16:9': '56.25%',
  '4:3': '75%',
  '3:2': '66.66%',
  '8.5': '62.5%',
}
const padding = props.aspectRatio
  ? paddings[props.aspectRatio]
  : paddings['16:9']
</script>

<template>
  <QCard class="q-my-lg q-mx-auto" style="max-width: 80%">
    <QCardSection
      :style="{
        position: 'relative',
        width: '100%',
        paddingTop: padding,
      }"
    >
      <iframe
        :title="title"
        :src="`${link}?autoplay=${autoPlay || false}&start=${startTime}`"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        :style="{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }"
      />
    </QCardSection>
    <QCardSection v-if="caption">
      <h4>{{ caption }}</h4>
    </QCardSection>
  </QCard>
</template>
