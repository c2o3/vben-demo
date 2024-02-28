<template>
  <a-form :model="formModel">
    <a-row v-for="item in formItems" :key="item.id">
      <a-col :span="2.5">
        <a-radio-group v-model="selectedRadio" @change="handleRadioChange">
          <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
        </a-radio-group>
      </a-col>
      <a-col :span="8">
        <a-form-item>
          <a-input v-model="inputValue" />
        </a-form-item>
      </a-col>
    </a-row>
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
      selectedRadio: '',
      inputValue: '',
    })
    
    const formItems = [
      { id: '1', radioLabel: '选项A' },
      { id: '2', radioLabel: '选项B' },
      { id: '3', radioLabel: '选项C' },
      { id: '4', radioLabel: '选项D' },
    ]

    const handleRadioChange = (e) => {
      formModel.selectedRadio = e.target.value
      // 如果有必要，可以在这里获取对应的inputValue并赋值给formModel.inputValue
      // 但根据现有代码逻辑，似乎不需要这样做
    }

    return { formModel, formItems, handleRadioChange }
  },
})
</script>