<template>
  <PageWrapper title="引导页" content="用于给用户的指引操作">
    <a-button type="primary" @click="handleStart">开始</a-button>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { PageWrapper } from '/@/components/Page'

  export default defineComponent({
    components: { PageWrapper },
    setup() {
    },
  })
</script>
