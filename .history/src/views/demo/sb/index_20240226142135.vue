import { Form } from 'ant-design-vue';
<template>
  <div> </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { Form, Input, Radio, Row, Col } from 'ant-design-vue'
  export default defineComponent({
    components: {
      AForm: Form,
      AInput: Input,
      ARadioGroup: Radio.Group,
      ARadio: Radio,
      ARow: Row,
      ACol: Col,
    },
    setup() {
      const formRef = ref()
      const onFinish = (values: any) => {
        console.log('Success:', values)
      }
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
      }
      return {
        formRef,
        onFinish,
        onFinishFailed,
      }
    },
  })
</script>
<style lang="scss" scoped></style>
