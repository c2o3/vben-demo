<template>
  <a-form
    class="w-5/12"
    :rules="rules"
    ref="formRef"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <a-row>
      <a-radio-group v-model:value="selectedRadioId" class="w-11/12">
        <a-col :span="24" v-for="item in formItems" :key="item.id" class="pt-3">
          <a-form-item>
            <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
          </a-form-item>
          <a-form-item>
            <a-input v-model:value="item.inputValue" style="width: 400px" />
          </a-form-item>
        </a-col>
      </a-radio-group>
    </a-row>
    <a-button type="primary" @click="handleSubmit">提交</a-button>
  </a-form>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'
  import type { Rule } from 'ant-design-vue/es/form'
  import type { FormInstance } from 'ant-design-vue'
  import { Form, Input, Radio, Row, Col, Button } from 'ant-design-vue'
  interface FormState {
    pass: string
    checkPass: string
    age: number | undefined
  }
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
      const formRef = ref<FormInstance>()
      const formState = reactive<FormState>({
        pass: '',
        checkPass: '',
        age: undefined,
      })
      const validateRadio = async (_rule: Rule, value: string) => {
        if (value === '') {
          return Promise.reject('Please input the password')
        } else {
          if (formState.checkPass !== '') {
            formRef.value.validateFields('checkPass')
          }
          return Promise.resolve()
        }
      }
      const rules: Record<string, Rule[]> = {
        Radio: [{ required: true, validator: validateRadio, trigger: 'change' }],
      }
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
      const handleFinish = (values: FormState) => {
        console.log(values, formState)
      }
      const handleFinishFailed = (errors) => {
        console.log(errors)
      }
      const resetForm = () => {
        formRef.value.resetFields()
      }
      const handleValidate = (...args) => {
        console.log(args)
      }
      return {
        formItems,
        selectedRadioId,
        handleSubmit,
        handleFinish,
        handleFinishFailed,
        resetForm,
        handleValidate,
      }
    },
  })
</script>
