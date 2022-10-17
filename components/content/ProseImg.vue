<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: undefined,
  },
  width: {
    type: [String, Number],
    default: '640px',
  },
  height: {
    type: [String, Number],
    default: '100%',
  },
})

const $img = useImage()

const { sizes, srcset } = $img.getSizes(props.src, {
  sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
  provider: 'cloudinary',
  modifiers: { format: 'webp', quality: 70 },
})
</script>

<template>
  <QImg
    :src="$img(src, {}, { provider: 'cloudinary' })"
    :alt="alt"
    :width="width"
    :height="height"
    :srcset="srcset"
    :sizes="sizes"
    :placeholder-src="
      $img(src, { width: 100, quality: 70 }, { provider: 'cloudinary' })
    "
    class="block q-mx-auto"
  />
</template>
