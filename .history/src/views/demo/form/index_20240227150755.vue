<template>
  <a-form>
    <a-row>
      <a-radio-group v-model:value="item.selectedRadioId">
        <a-col :span="24" v-for="item in formItems" :key="item.id">
          <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
          <a-input v-model:value="item.inputValue" style="width: 200px; margin-left: 12px" />
        </a-col>
      </a-radio-group>
    </a-row>
    <a-button type="primary" @click="handleSubmit">提交</a-button>
  </a-form>
</template>

<script>
  import { defineComponent, reactive, ref } from 'vue'
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
      const selectedRadioId = ref([])

      const formItems = ref([
        { id: '1', radioLabel: '选项A' },
        { id: '2', radioLabel: '选项B' },
        { id: '3', radioLabel: '选项C' },
        { id: '4', radioLabel: '选项D' },
      ])
      const handleSubmit = () => {
        console.log(formItems.value)
        return
        const submissionData = {
          selectedRadioId: selectedRadioId.value,
          answer: formModel[selectedRadioId.value],
        }
        console.log('Submission data:', submissionData)
        // 在这里调用后端接口，提交submissionData
      }

      return { formItems, formModel, selectedRadioId, handleSubmit }
    },
  })
</script>
