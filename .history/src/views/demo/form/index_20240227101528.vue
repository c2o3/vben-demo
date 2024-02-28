<template>
  <a-form>
    <a-radio-group v-model="selectedRadio">
      <a-row v-for="item in formItems" :key="item.id">
        <a-col :span="24">
          <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
          <a-input
            v-if="selectedRadio === item.id"
            v-model="item.inputValue"
            style="margin-left: 20px"
          />
        </a-col>
      </a-row>
    </a-radio-group>
  </a-form>
  <!-- 提交按钮触发handleSubmit -->
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
      const selectedRadio = reactive({ value: '' })
      const formItems = reactive([
        { id: '1', radioLabel: '选项A', inputValue: '' },
        { id: '2', radioLabel: '选项B', inputValue: '' },
        { id: '3', radioLabel: '选项C', inputValue: '' },
        { id: '4', radioLabel: '选项D', inputValue: '' },
      ])

      const handleSubmit = () => {
        const selectedItem = formItems.find((item) => item.id === selectedRadio.value)
        if (selectedItem && selectedItem.inputValue) {
          console.log('Sending data to the server:', selectedItem)
          // 在这里调用你的接口，将selectedItem作为参数传递
          // yourApiCall(selectedItem);
        } else {
          console.log('No item selected or input value is empty.')
        }
      }

      return { selectedRadio, formItems, handleSubmit }
    },
  })
</script>
