<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: true,
  },
  maxwidth: {
    type: Number,
    default: 480,
    validate: (val: number) => val >= 220 && val <= 550,
  },
  hide_media: {
    type: Boolean,
    default: false,
  },
  hide_thread: {
    type: Boolean,
    default: false,
  },
  omit_script: {
    type: Boolean,
    default: true,
  },
  align: {
    type: String,
    default: 'center',
    validate: (val: string) =>
      ['left', 'right', 'center', 'none'].includes(val),
  },
  related: {
    type: String,
    default: undefined,
  },
  lang: {
    type: String,
    default: 'es',
  },
  theme: {
    type: String,
    default: 'dark',
    validate: (val: string) => ['dark', 'light'].includes(val),
  },
  link_color: {
    type: String,
    default: undefined,
    validate: (val: string) => val || val.startsWith('#'),
  },
  widget_type: {
    type: String,
    default: undefined,
    validate: (val: string) => val || val === 'video',
  },
  dnt: {
    type: Boolean,
    default: true,
  },
})

const container = ref<HTMLElement>(null)

onBeforeMount(async () => {
  const twttrId = 'twitter-wjs'
  const twttrKey = 'twttr'
  // https://github.com/DannyFeliz/vue-tweet/blob/main/src/components/vue-tweet.vue
  if (!(window[twttrKey] && window[twttrKey].ready)) {
    if (document.getElementById(twttrId)) {
      window[twttrKey] = undefined
      document.getElementById(twttrId).remove()
    }
    const fjs = document.getElementsByTagName('script')[0]
    const js = document.createElement('script')
    js.id = twttrId
    js.src = 'https://platform.twitter.com/widgets.js'
    js.async = true
    fjs.parentNode.insertBefore(js, fjs)
    return
  }
  await window[twttrKey].ready()
  window[twttrKey].widgets.load(container.value)
})
</script>

<template>
  <QCard class="q-mx-auto q-mb-md" :style="{ maxWidth: maxwidth + 'px' }"
    ><QCardSection>
      <blockquote
        ref="container"
        class="twitter-tweet"
        :align="align"
        :data-width="maxwidth"
        :data-dnt="dnt"
        :data-theme="theme"
      >
        <p dir="ltr" :lang="lang" class="text-center q-ma-none">
          <a :href="link"><QSpinner size="xl" /></a>
        </p></blockquote></QCardSection
  ></QCard>
</template>
