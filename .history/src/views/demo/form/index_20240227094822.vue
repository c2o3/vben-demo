<template>
  <a-form :model="formModel">
    <a-row v-for="(item, index) in formItems" :key="item.id">
      <a-col :span="2.5">
        <a-radio-group v-model="selectedRadio" @change="handleRadioChange(item)">
          <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
        </a-radio-group>
      </a-col>
      <a-col :span="8">
        <a-form-item>
          <a-input :value="inputValues.value[item.id]" @input="updateInputValue(item.id, $event)" />
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
        selectedRadio: '',
        inputValues: ref({}),
      })

      const formItems = [
        { id: '1', radioLabel: '选项A' },
        { id: '2', radioLabel: '选项B' },
        { id: '3', radioLabel: '选项C' },
        { id: '4', radioLabel: '选项D' },
      ]

      const handleRadioChange = (item) => {
        formModel.selectedRadio = item.id
        console.log('Selected radio ID:', formModel.selectedRadio)
      }

      const updateInputValue = (id, value) => {
        formModel.inputValues.value[id] = value.target.value
      }

      return { formModel, formItems, handleRadioChange, updateInputValue }
    },
  })
</script>
