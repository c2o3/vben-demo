<template>
  <a-form :model="formModel">
    <template v-for="item in formItems">
      <a-radio-group v-model="selectedRadio" :key="item.id">
        <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
      </a-radio-group>
      <a-form-item>
        <a-input v-model="inputValue" />
      </a-form-item>
    </template>
  </a-form>
</template>

<script>
  import { defineComponent, reactive } from 'vue'
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
      const formModel = reactive({
        selectedRadio: '1',
        inputValue: '',
      })
      const formItems = [
        { id: '1', radioLabel: '选项A', inputValue: '' },
        { id: '2', radioLabel: '选项B', inputValue: '' },
        { id: '3', radioLabel: '选项C', inputValue: '' },
        { id: '4', radioLabel: '选项D', inputValue: '' },
      ]

      const handleRadioChange = (id) => {
        formModel.selectedRadio = id
      }

      return { formModel, formItems, selectedRadio: formModel.selectedRadio, handleRadioChange }
    },
  })
</script>
