<template>
  <div class="flex w-9/12 bg-sky-950">
    <IconPicker />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import IconPicker from '@/components/Icon/src/IconPicker'
  export default defineComponent({
    name: 'DemoPage',
    setup() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
