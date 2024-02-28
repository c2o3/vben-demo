<template>
  <a-form>
    <a-row>
      <a-radio-group v-model:value="selectedRadioId">
      <a-col :span="24">
      
          <a-radio v-for="item in formItems" :key="item.id" :value="item.id">{{
            item.radioLabel
          }}</a-radio>
      
        <!-- <a-input v-model="formModel[item.id]" style="width: 200px; margin-left: 12px" /> -->
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
      const formModel = reactive({
        1: '',
        2: '',
        3: '',
        4: '',
      })

      const formItems = [
        { id: '1', radioLabel: '选项A' },
        { id: '2', radioLabel: '选项B' },
        { id: '3', radioLabel: '选项C' },
        { id: '4', radioLabel: '选项D' },
      ]

      const handleSubmit = () => {
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
