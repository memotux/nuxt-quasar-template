<script setup lang="ts">
const props = defineProps<{
  link: string
  dataWidth?: number
  caption?: string
  title?: string
  aspectRatio?: string
}>()

const fbCardStyle = {
  maxWidth: props.dataWidth ? `${props.dataWidth}px` : '80%',
  width: '100%',
}

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

const link = new URL('https://www.facebook.com/plugins/video.php')
link.searchParams.append('href', props.link)
link.searchParams.append('width', '500')
link.searchParams.append('height', props.caption ? '300' : '282')
link.searchParams.append('show_text', props.caption ? 'false' : 'true')
link.searchParams.append('appId', '233305715281951')
</script>

<template>
  <QCard class="q-mx-auto q-mb-md" :style="fbCardStyle">
    <QCardSection
      class="text-center"
      :style="{
        position: 'relative',
        width: '100%',
        paddingTop: padding,
      }"
    >
      <iframe
        :title="title"
        :src="link"
        :style="{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden',
        }"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </QCardSection>
    <QCardSection v-if="caption">
      <h4>{{ caption }}</h4>
    </QCardSection>
  </QCard>
</template>
