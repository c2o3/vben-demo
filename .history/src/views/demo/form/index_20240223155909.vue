<template>
  <div class="flex w-9/12 h-700 bg-violet-50">
    <IconPicker />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import IconPicker from '@/components/Icon'
  export default defineComponent({
    name: 'DemoPage',
    setup() {
      return {}
    },
  })
</script>
<style lang="scss" scoped></style>
