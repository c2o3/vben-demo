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
      const selectedRadioId = reactive({ id: null })
      const formModel = reactive({
        1: { inputValue: '' },
        2: { inputValue: '' },
        3: { inputValue: '' },
        4: { inputValue: '' },
      })

      const formItems = [
        { id: '1', radioLabel: '选项A' },
        { id: '2', radioLabel: '选项B' },
        { id: '3', radioLabel: '选项C' },
        { id: '4', radioLabel: '选项D' },
      ]

      const handleSubmit = () => {
        if (selectedRadioId.id && formModel[selectedRadioId.id].inputValue) {
          console.log('提交的数据：', {
            selectedRadioId: selectedRadioId.id,
            inputValue: formModel[selectedRadioId.id].inputValue,
          })
          // 在这里调用你的接口，将上述对象作为参数传递
        } else {
          console.log('请选择一个选项并输入值')
        }
      }

      return { formModel, formItems, selectedRadioId, handleSubmit }
    },
  })
</script>
