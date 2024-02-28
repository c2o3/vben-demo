<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Activity name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="Instant delivery">
      <a-switch v-model:checked="formState.delivery" />
    </a-form-item>
    <a-form-item label="Activity type">
      <a-checkbox-group v-model:value="formState.type">
        <a-checkbox value="1" name="type">Online</a-checkbox>
        <a-checkbox value="2" name="type">Promotion</a-checkbox>
        <a-checkbox value="3" name="type">Offline</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Resources">
      <a-radio-group v-model:value="formState.resource">
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Activity form">
      <a-textarea v-model:value="formState.desc" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
  import { reactive, toRaw } from 'vue'
  import type { UnwrapRef } from 'vue'

  interface FormState {
    name: string
    delivery: boolean
    type: string[]
    resource: string
    desc: string
  }
  const formState: UnwrapRef<FormState> = reactive({
    name: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  })
  const onSubmit = () => {
    console.log('submit!', toRaw(formState))
  }
  const labelCol = { style: { width: '150px' } }
  const wrapperCol = { span: 14 }
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
      const formModel = reactive({
        selectedRadio: '1',
        inputValue: '',
      })
      const selectedRadio = ref('1')
      const formItems = [
        { id: '1', radioLabel: '选项A', inputValue: '11111' },
        { id: '2', radioLabel: '选项B', inputValue: '' },
        { id: '3', radioLabel: '选项C', inputValue: '' },
        { id: '4', radioLabel: '选项D', inputValue: '' },
      ]
      const handleRadioChange = (id) => {
        const selectedItem = formItems.find((item) => item.id === id)
        console.log('Input value for selected radio:', selectedItem.inputValue)
      }

      return { formModel, formItems, selectedRadio, handleRadioChange }
    },
  })
</script>
