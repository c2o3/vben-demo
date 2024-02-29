<template>
  <a-form
    class="w-5/12"
    :rules="rules"
    ref="formRef"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <a-row>
      <a-radio-group v-model:value="selectedRadioId" class="w-11/12">
        <a-col :span="24" v-for="item in formItems" :key="item.id" class="pt-3">
          <a-form-item name="radio">
            <a-radio :value="item.id">{{ item.radioLabel }}</a-radio>
          </a-form-item>
          <a-form-item name="input">
            <a-input v-model:value="item.inputValue" style="width: 400px" />
          </a-form-item>
        </a-col>
      </a-radio-group>
    </a-row>
    <a-button type="primary" @click="handleSubmit">提交</a-button>
  </a-form>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import type { Rule } from 'ant-design-vue/es/form'
  import type { FormInstance } from 'ant-design-vue'
  import { Form, Input, Radio, Row, Col, Button } from 'ant-design-vue'
  // interface FormState {
  //   radio: number
  //   input: string
  // }
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
      // const formState = reactive<FormState>({
      //   radio:  ,
      //   input: '',
      // })
      const validateRadio = async (_rule: Rule, value: string) => {
        if (value === '') {
          return Promise.reject('Please input the password')
        } else {
          return Promise.resolve()
        }
      }
      const validateInput = async (_rule: Rule, value: string) => {
        if (value === '') {
          return Promise.reject('请输入选项内容')
        } else {
          return Promise.resolve()
        }
      }
      const rules: Record<string, Rule[]> = {
        radio: [{ required: true, validator: validateRadio, trigger: 'change' }],
        input: [{ required: true, validator: validateInput, trigger: 'change' }],
      }
      const selectedRadioId = ref([])

      const formItems = ref([
        { id: '1', radioLabel: '选项A：' },
        { id: '2', radioLabel: '选项B：' },
        { id: '3', radioLabel: '选项C：' },
        { id: '4', radioLabel: '选项D：' },
      ])
      const handleSubmit = () => {
        formRef.value
          .validate()
          .then(() => {
            console.log('Selected ID:', selectedRadioId.value)
            console.log('Form Items:', formItems.inputvalue)
            // 处理表单提交逻辑
          })
          .catch((err) => {
            console.log('Validation Failed:', err)
          })
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
        handleFinishFailed,
        resetForm,
        handleValidate,
        formRef,
        rules,
      }
    },
  })
</script>
