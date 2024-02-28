<template>
  <a-form class="w-5/12">
    <a-row>
      <a-checkbox-group>
        v-model:value="selectedRadioId" class="w-11/12">
        <a-col :span="24" v-for="item in formItems" :key="item.id" class="pt-3">
          <a-checkbox :value="item.id">{{ item.radioLabel }}</a-checkbox>
          <a-input v-model:value="item.inputValue" style="width: 400px" />
        </a-col>
      </a-checkbox-group>
    </a-row>
    <a-button type="primary" @click="handleSubmit">提交</a-button>
  </a-form>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import { Form, Input, Row, Col, Button, CheckBox } from 'ant-design-vue'

  export default defineComponent({
    components: {
      AForm: Form,
      AInput: Input,
      ACheckBox: CheckBox,
      ACheckBoxGroup: CheckBox.Group,
      ARow: Row,
      ACol: Col,
      AButton: Button,
    },
    setup() {
      const selectedRadioId = ref([])

      const formItems = ref([
        { id: '1', radioLabel: '选项A：' },
        { id: '2', radioLabel: '选项B：' },
        { id: '3', radioLabel: '选项C：' },
        { id: '4', radioLabel: '选项D：' },
      ])
      const handleSubmit = () => {
        console.log(formItems.value, selectedRadioId.value)
      }
      return { formItems, selectedRadioId, handleSubmit }
    },
  })
</script>
