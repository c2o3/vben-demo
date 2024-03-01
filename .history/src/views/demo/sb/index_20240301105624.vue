<template>
  <a-form class="w-5/12" @submit.prevent="handleSubmit">
    <a-row>
      <a-checkbox-group v-model:value="selectedCheckboxIds" class="w-11/12">
        <a-col :span="24" v-for="item in formItems" :key="item.id" class="pt-3">
          <a-form-item :name="`radio_${item.id}`">
            <a-checkbox :value="item.id">{{ item.radioLabel }}</a-checkbox>
          </a-form-item>
          <a-form-item>
            <a-input v-model:value="item.inputValue" style="width: 400px" />
          </a-form-item>
        </a-col>
      </a-checkbox-group>
    </a-row>
    <a-button type="primary" html-type="submit">提交</a-button>
    <a-button type="default" @click="resetForm">重置</a-button>
  </a-form>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import { Form, Input, Checkbox, CheckboxGroup, Row, Col, Button, message } from 'ant-design-vue'

  export default defineComponent({
    components: {
      AForm: Form,
      AInput: Input,
      ACheckbox: Checkbox,
      ACheckboxGroup: CheckboxGroup,
      ARow: Row,
      ACol: Col,
      AButton: Button,
    },
    setup() {
      const selectedCheckboxIds = ref([])

      const formItems = ref([
        { id: '1', radioLabel: '选项A：', inputValue: '' },
        { id: '2', radioLabel: '选项B：', inputValue: '' },
        { id: '3', radioLabel: '选项C：', inputValue: '' },
        { id: '4', radioLabel: '选项D：', inputValue: '' },
      ])
      const handleSubmit = () => {
        let isFormValid = true
        let isAnyInputEmpty = false // 新增变量，用于检查是否有任何一个输入框为空
        if (!selectedCheckboxIds.value) {
          message.warning('请至少选择一个选项作为正确答案！')
          isFormValid = false
        }
        for (const item of formItems.value) {
          if (!item.inputValue.trim()) {
            isAnyInputEmpty = true // 只要有一个输入框为空，就设置这个变量为 true
          }
        }
        // 循环结束后，根据isAnyInputEmpty变量的值决定是否弹出提示
        if (isAnyInputEmpty) {
          message.warning('请填写所有选项内容！')
          isFormValid = false
        }
        if (isFormValid) {
          console.log('提交表单:', {
            selectedCheckboxIds: selectedCheckboxIds.value,
            formItems: formItems.value,
          })
          message.success('提交成功！')
          // 在这里执行进一步的提交操作...
        }
      }
      const resetForm = () => {
        selectedRadioId.value = ''
        formItems.value.forEach((item) => (item.inputValue = ''))
      }
      return { formItems, selectedCheckboxIds, handleSubmit, resetForm }
    },
  })
</script>
