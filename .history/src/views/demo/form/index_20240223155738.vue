<template>
  <div class="flex w-9/12 h-700 bg-violet-50">
    <CollapseContainer title="图标选择器(Iconify)" class="my-5">
      <div class="flex justify-around flex-wrap">
        <IconPicker />
      </div>
    </CollapseContainer>
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
