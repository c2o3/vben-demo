<template>
  <a-form :model="formModel">
    <a-row v-for="(item, index) in formItems" :key="item.id">
      <a-col :span="2.5">
        <a-radio-group v-model="formModel[item.id].selectedRadio" @change="handleRadioChange(item)">
          <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
        </a-radio-group>
      </a-col>
      <a-col :span="8">
        <a-form-item>
          <a-input v-model="formModel[item.id].inputValue" />
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>

  <!-- 示例：提交按钮触发handleSubmit -->
  <a-button type="primary" @click="handleSubmit">提交</a-button>
</template>

<script>
  import { defineComponent, reactive } from 'vue'
  import { Form, Input, Radio, Row, Col, Button } from 'ant-design-vue'

  export default defineComponent({
    components: {
      AForm: Form,
      AInput: Input,
      ARadioGroup: Radio.Group,
      ARadio: Radio,
      ARow: Row,
      ACol: Col,
      AButton: Button,
    },
    setup() {
      const formModel = reactive([
        { id: '1', selectedRadio: '', inputValue: '' },
        { id: '2', selectedRadio: '', inputValue: '' },
        { id: '3', selectedRadio: '', inputValue: '' },
        { id: '4', selectedRadio: '', inputValue: '' },
      ])

      const formItems = [
        { id: '1', radioLabel: '选项A' },
        { id: '2', radioLabel: '选项B' },
        { id: '3', radioLabel: '选项C' },
        { id: '4', radioLabel: '选项D' },
      ]

      const handleRadioChange = (item) => {
        const formItem = formModel.find((formModelItem) => formModelItem.id === item.id)
        if (formItem) {
          formItem.selectedRadio = item.id
        }
      }

      const handleSubmit = () => {
        console.log('Sending data to the server:', formModel)
        // 在这里调用你的接口，将formModel作为参数传递
        // yourApiCall(formModel);
      }

      return { formModel, formItems, handleRadioChange, handleSubmit }
    },
  })
</script>
