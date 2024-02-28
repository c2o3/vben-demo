import { Form } from 'ant-design-vue';
<template>
  <div class="w-3/5 h-60 absolute left-40 top-20">
    <a-form>
      <a-row>
        <a-col :span="2.5">
          <a-form-item>
            <a-radio-group>
              <a-radio>11111</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="10">
          <a-form-item label="选项">
            <a-input />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="2.5">
          <a-form-item>
            <a-radio-group>
              <a-radio>11111</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="10">
          <a-form-item label="选项">
            <a-input />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
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
      // const formRef = ref()
      const onFinish = (values: any) => {
        console.log('Success:', values)
      }
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
      }
      return {
        // formRef,
        onFinish,
        onFinishFailed,
      }
    },
  })
</script>
<style lang="scss" scoped></style>
