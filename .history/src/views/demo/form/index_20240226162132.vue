<template>
  <a-form :model="formModel">
    <a-row v-for="item in formItems" :key="item.id">
      <a-col :span="2.5">
        <a-radio-group v-model="selectedRadio" @change="handleRadioChange(id)">
          <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
        </a-radio-group>
      </a-col>
      <a-col :span="12">
        <a-form-item>
          <a-input v-model="item.inputValue" />
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
        { id: '1', radioLabel: '选项A', inputValue: '' },
        { id: '2', radioLabel: '选项B', inputValue: '' },
        { id: '3', radioLabel: '选项C', inputValue: '' },
        { id: '4', radioLabel: '选项D', inputValue: '' },
      ]
      const handleRadioChange = (id) => {
      formItems.forEach((item) => {
        if(item.id !== id){
          formModel[]
        }
      })
      }
      return { formModel, formItems, selectedRadio, handleRadioChange }
    },
  })
</script>
