<template>
  <a-form>
    <a-row>
      <a-col :span="2.5">
        <a-radio-group>
          <a-radio>1</a-radio>
        </a-radio-group>
      </a-col>
      <a-col :span="8">
        <a-form-item>
          <a-input />
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { Form, Input, Radio, Row, Col } from 'ant-design-vue'
  import type { UnwrapRef } from 'vue'

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
      interface FormState {
        resource: string
      }
      const formState: UnwrapRef<FormState> = reactive({
        resource: '',
      })
      const handler = () => {
        console.log(formState.resource)
      }
      const labelCol = { style: { width: '150px' } }
      const wrapperCol = { span: 14 }
      return { formState, labelCol, wrapperCol, handler }
    },
  })
</script>
