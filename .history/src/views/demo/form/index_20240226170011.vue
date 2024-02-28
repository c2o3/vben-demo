<template>
  <a-form :model="formModel">
    <a-row v-for="item in formItems" :key="item.id">
      <a-col :span="2.5">
        <a-radio-group v-model="selectedRadio" @change="() => handleRadioChange(item.id)">
          <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
        </a-radio-group>
      </a-col>
      <a-col :span="12">
        <a-form-item>
          <a-input v-model="formModel.inputValue" />
          {{ item.inputValue }}
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
  import { defineComponent, reactive, ref } from 'vue'
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
      const selectedRadio = ref('1')
      const formItems = [
        { id: '1', radioLabel: '选项A', inputValue: '1' },
        { id: '2', radioLabel: '选项B', inputValue: '2' },
        { id: '3', radioLabel: '选项C', inputValue: '3' },
        { id: '4', radioLabel: '选项D', inputValue: '4' },
      ]
      const handleRadioChange = (id) => {
        const selectedItem = formItems.find((item) => item.id === id)
        console.log('Input value for selected radio:', selectedItem.inputValue)
      }

      return { formModel, formItems, selectedRadio, handleRadioChange }
    },
  })
</script>
