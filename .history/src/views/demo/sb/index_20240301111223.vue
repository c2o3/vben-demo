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

      const isFormValid = computed(() => {
        const hasEnoughOptionsSelected = selectedCheckboxIds.value.length >= 2
        const hasAllInputsFilled = formItems.value.every((item) => item.inputValue.trim())
        return hasEnoughOptionsSelected && hasAllInputsFilled
      })

      const handleSubmit = () => {
        if (!isFormValid.value) {
          message.warning('请确保选择至少两个选项并填写所有选项内容。')
          return
        }
        console.log('提交表单:', {
          selectedCheckboxIds: selectedCheckboxIds.value,
          formItems: formItems.value,
        })
        message.success('提交成功！')
      }

      const resetForm = () => {
        selectedCheckboxIds.value = []
        formItems.value.forEach((item) => (item.inputValue = ''))
      }

      return { formItems, selectedCheckboxIds, handleSubmit, resetForm }
    },
  })
</script>
