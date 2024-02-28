<template>
  <a-form>
    <a-row v-for="item in formItems" :key="item.id">
      <a-col :span="2.5">
        <a-radio-group v-model="selectedRadioId">
          <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
        </a-radio-group>
      </a-col>
      <a-col :span="8">
        <a-form-item>
          <a-input
            v-model="formModel[item.id].inputValue"
            :disabled="selectedRadioId !== item.id"
          />
        </a-form-item>
      </a-col>
    </a-row>
    <a-button type="primary" @click="handleSubmit">提交</a-button>
  </a-form>
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
      const formModel = reactive({
        1: { selectedRadio: false, inputValue: '' },
        2: { selectedRadio: false, inputValue: '' },
        3: { selectedRadio: false, inputValue: '' },
        4: { selectedRadio: false, inputValue: '' },
      })

      const formItems = [
        { id: '1', radioLabel: '选项A' },
        { id: '2', radioLabel: '选项B' },
        { id: '3', radioLabel: '选项C' },
        { id: '4', radioLabel: '选项D' },
      ]

      const handleRadioChange = (item) => {
        // Reset all other selections
        Object.keys(formModel).forEach((key) => {
          formModel[key].selectedRadio = false
        })
        // Set the current item as selected
        formModel[item.id].selectedRadio = true
      }

      const handleSubmit = () => {
        const selectedItems = Object.entries(formModel).filter(
          ([key, value]) => value.selectedRadio && value.inputValue,
        )

        if (selectedItems.length > 0) {
          console.log(
            'Sending data to the server:',
            selectedItems.map(([key, value]) => ({ id: key, ...value })),
          )
          // 在这里调用你的接口，将selectedItems作为参数传递
          // yourApiCall(selectedItems);
        } else {
          console.log('No item selected or input value is empty.')
        }
      }

      return { formModel, formItems, handleRadioChange, handleSubmit }
    },
  })
</script>
