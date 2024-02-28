<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Resources">
      <a-radio-group v-model:value="formState.resource" @change="handler(value)">
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRaw } from 'vue'
  import { Form, Radio } from 'ant-design-vue'
  import type { UnwrapRef } from 'vue'

  export default defineComponent({
    components: {
      AForm: Form,
      ARadioGroup: Radio.Group,
      ARadio: Radio,
    },
    setup() {
      interface FormState {
        resource: string
      }
      const formState: UnwrapRef<FormState> = reactive({
        resource: '',
      })
      const onSubmit = () => {
        console.log('submit!', toRaw(formState))
      }
      const handler = () => {
        console.log('handler!')
      }
      const labelCol = { style: { width: '150px' } }
      const wrapperCol = { span: 14 }
      return { formState, labelCol, wrapperCol, onSubmit, handler }
    },
  })
</script>
